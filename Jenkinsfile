pipeline {
    agent any

    environment {
        /*
         * Public Docker Hub repository.
         */
        DOCKERHUB_REPOSITORY = 'praneethls4008/playwright-framework'

        /*
         * Physical Docker volume used by:
         * /var/jenkins_home
         *
         * This is your restored Jenkins volume.
         */
        JENKINS_HOME_VOLUME = 'jenkins_jenkins_data'

        /*
         * Keep this aligned with @playwright/test in package.json
         * and package-lock.json.
         */
        PLAYWRIGHT_VERSION = '1.61.1'

        /*
         * Total Playwright shards.
         */
        SHARD_TOTAL = '3'

        NODE_ENV = 'PROD'
        CI = 'true'
        REGION = 'PROD'

        /*
         * Use this URL when the API is running directly on the
         * Pop!_OS Docker host at port 3001.
         */
        API_BASE_URL = 'http://host.docker.internal:3001/api/v1/'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        skipDefaultCheckout(true)

        /*
         * Prevent Jenkins logs from growing without limit.
         */
        buildDiscarder(
            logRotator(
                numToKeepStr: '20',
                artifactNumToKeepStr: '10'
            )
        )
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()

                git(
                    branch: 'main',
                    url: 'https://github.com/praneethls4008/playwrightFInalFramework.git'
                )

                sh '''
                    set -eu

                    echo "========================================"
                    echo "Repository information"
                    echo "========================================"

                    echo "Workspace:"
                    echo "${WORKSPACE}"

                    echo "Branch:"
                    git branch --show-current

                    echo "Commit:"
                    git rev-parse HEAD

                    echo "Remote:"
                    git remote -v
                '''
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                    set -eu

                    echo "========================================"
                    echo "Jenkins execution environment"
                    echo "========================================"

                    echo "Current user:"
                    whoami

                    echo "Docker executable:"
                    command -v docker

                    echo "Docker client and server:"
                    docker version

                    echo "Docker daemon details:"
                    docker info --format \
                      'Server={{.ServerVersion}}, Driver={{.Driver}}'

                    echo "Jenkins home volume:"
                    docker volume inspect \
                      "${JENKINS_HOME_VOLUME}" \
                      --format \
                      'Name={{.Name}}, Mountpoint={{.Mountpoint}}'

                    echo "Playwright version:"
                    echo "${PLAYWRIGHT_VERSION}"
                '''
            }
        }

        stage('Check Visual Baselines') {
            steps {
                sh '''
                    set -eu

                    echo "========================================"
                    echo "Visual snapshot baselines"
                    echo "========================================"

                    if [ -d "resources/visual" ]; then
                        SNAPSHOT_COUNT=$(
                            find resources/visual \
                              -type f \
                              -name "*.png" \
                              2>/dev/null |
                            wc -l |
                            tr -d ' '
                        )

                        echo "Committed snapshot baselines: ${SNAPSHOT_COUNT}"

                        find resources/visual \
                          -type f \
                          -name "*.png" \
                          -print |
                        head -20 || true
                    else
                        echo "WARNING: resources/visual does not exist."
                        echo "Visual tests may fail if no baselines are committed."
                    fi
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    set -eux

                    echo "========================================"
                    echo "Building Playwright Docker image"
                    echo "========================================"

                    docker build \
                      --build-arg \
                        PLAYWRIGHT_VERSION="${PLAYWRIGHT_VERSION}" \
                      --tag \
                        "${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}" \
                      --tag \
                        "${DOCKERHUB_REPOSITORY}:latest" \
                      .

                    echo "Built Docker images:"

                    docker image ls \
                      "${DOCKERHUB_REPOSITORY}" \
                      --format \
                      'Repository={{.Repository}} Tag={{.Tag}} Size={{.Size}} ID={{.ID}}'
                '''
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKERHUB_USERNAME',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        set -eu
                        set +x

                        cleanup_docker_login() {
                            docker logout >/dev/null 2>&1 || true
                        }

                        trap cleanup_docker_login EXIT

                        echo "${DOCKERHUB_TOKEN}" |
                          docker login \
                            --username "${DOCKERHUB_USERNAME}" \
                            --password-stdin

                        echo "Pushing build-number image..."

                        docker push \
                          "${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}"

                        echo "Pushing latest image..."

                        docker push \
                          "${DOCKERHUB_REPOSITORY}:latest"

                        echo "Docker Hub push completed."
                    '''
                }
            }
        }

        stage('Prepare Shard Directories') {
            steps {
                sh '''
                    set -eu

                    echo "========================================"
                    echo "Preparing shard output directories"
                    echo "========================================"

                    rm -rf \
                      test-results \
                      allure-shard1 \
                      allure-shard2 \
                      allure-shard3 \
                      blob-shard1 \
                      blob-shard2 \
                      blob-shard3 \
                      combined-blobs \
                      combined-allure-results \
                      playwright-report \
                      storage-states

                    mkdir -p \
                      test-results/shard1 \
                      test-results/shard2 \
                      test-results/shard3 \
                      allure-shard1 \
                      allure-shard2 \
                      allure-shard3 \
                      blob-shard1 \
                      blob-shard2 \
                      blob-shard3 \
                      storage-states/shard1 \
                      storage-states/shard2 \
                      storage-states/shard3 \
                      combined-blobs \
                      combined-allure-results \
                      playwright-report
                '''
            }
        }

        stage('Run Playwright Shards') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'crypto-secret-key',
                        variable: 'CRYPTO_SECRET_KEY'
                    ),
                    usernamePassword(
                        credentialsId: 'bankapp-admin-credentials',
                        usernameVariable: 'ADMIN_USERNAME',
                        passwordVariable: 'ADMIN_PASSWORD'
                    ),
                    usernamePassword(
                        credentialsId: 'bankapp-user-credentials',
                        usernameVariable: 'USER_USERNAME',
                        passwordVariable: 'USER_PASSWORD'
                    )
                ]) {
                    script {
                        def shardBranches = [:]

                        for (int index = 1; index <= 3; index++) {
                            int shardIndex = index

                            shardBranches["Shard ${shardIndex} of 3"] = {
                                withEnv([
                                    "SHARD_INDEX=${shardIndex}"
                                ]) {
                                    catchError(
                                        buildResult: 'FAILURE',
                                        stageResult: 'FAILURE'
                                    ) {
                                        sh '''
                                            set -eu

                                            echo ""
                                            echo "========================================"
                                            echo "Running Playwright shard"
                                            echo "Shard: ${SHARD_INDEX}/${SHARD_TOTAL}"
                                            echo "========================================"

                                            mkdir -p \
                                              "${WORKSPACE}/test-results/shard${SHARD_INDEX}" \
                                              "${WORKSPACE}/allure-shard${SHARD_INDEX}" \
                                              "${WORKSPACE}/blob-shard${SHARD_INDEX}" \
                                              "${WORKSPACE}/storage-states/shard${SHARD_INDEX}"

                                            docker run --rm \
                                              --init \
                                              --ipc=host \
                                              --name \
                                                "playwright-${BUILD_NUMBER}-shard-${SHARD_INDEX}" \
                                              --add-host=host.docker.internal:host-gateway \
                                              --volume \
                                                "${JENKINS_HOME_VOLUME}:/var/jenkins_home" \
                                              --workdir /app \
                                              --env HOME=/tmp \
                                              --env CI=true \
                                              --env NODE_ENV=PROD \
                                              --env REGION="${REGION}" \
                                              --env BUILD_NUMBER="${BUILD_NUMBER}" \
                                              --env API_BASE_URL="${API_BASE_URL}" \
                                              --env \
                                                ALLURE_RESULTS_DIR="${WORKSPACE}/allure-shard${SHARD_INDEX}" \
                                              --env \
                                                PLAYWRIGHT_BLOB_OUTPUT_DIR="${WORKSPACE}/blob-shard${SHARD_INDEX}" \
                                              --env \
                                                PLAYWRIGHT_BLOB_OUTPUT_NAME="shard-${SHARD_INDEX}.zip" \
                                              --env \
                                                STORAGE_STATE_ROOT_PATH="${WORKSPACE}/storage-states/shard${SHARD_INDEX}/" \
                                              --env CRYPTO_SECRET_KEY \
                                              --env ADMIN_USERNAME \
                                              --env ADMIN_PASSWORD \
                                              --env USER_USERNAME \
                                              --env USER_PASSWORD \
                                              "${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}" \
                                              npx playwright test \
                                                --project=ui-chromium \
                                                --project=api \
                                                --project=visual-chromium \
                                                --shard="${SHARD_INDEX}/${SHARD_TOTAL}" \
                                                --output="${WORKSPACE}/test-results/shard${SHARD_INDEX}"

                                            echo ""
                                            echo "Shard ${SHARD_INDEX}/${SHARD_TOTAL} completed."

                                            echo "Blob files:"

                                            find \
                                              "${WORKSPACE}/blob-shard${SHARD_INDEX}" \
                                              -maxdepth 1 \
                                              -type f \
                                              -name "*.zip" \
                                              -print 2>/dev/null || true

                                            ALLURE_COUNT=$(
                                                find \
                                                  "${WORKSPACE}/allure-shard${SHARD_INDEX}" \
                                                  -maxdepth 1 \
                                                  -type f \
                                                  -name "*-result.json" \
                                                  2>/dev/null |
                                                wc -l |
                                                tr -d ' '
                                            )

                                            echo "Allure result count: ${ALLURE_COUNT}"
                                        '''
                                    }
                                }
                            }
                        }

                        parallel shardBranches
                    }
                }
            }
        }

        stage('Collect Shard Reports') {
            steps {
                sh '''
                    set -eu

                    echo "========================================"
                    echo "Collecting Playwright blob reports"
                    echo "========================================"

                    rm -rf \
                      "${WORKSPACE}/combined-blobs" \
                      "${WORKSPACE}/combined-allure-results"

                    mkdir -p \
                      "${WORKSPACE}/combined-blobs" \
                      "${WORKSPACE}/combined-allure-results"

                    for SHARD_INDEX in 1 2 3
                    do
                        BLOB_DIRECTORY="${WORKSPACE}/blob-shard${SHARD_INDEX}"
                        ALLURE_DIRECTORY="${WORKSPACE}/allure-shard${SHARD_INDEX}"

                        echo ""
                        echo "Processing shard ${SHARD_INDEX}..."

                        if [ -d "${BLOB_DIRECTORY}" ]; then
                            find "${BLOB_DIRECTORY}" \
                              -maxdepth 1 \
                              -type f \
                              -name "*.zip" \
                              -exec cp {} \
                                "${WORKSPACE}/combined-blobs/" \\;
                        else
                            echo "Missing blob directory: ${BLOB_DIRECTORY}"
                        fi

                        if [ -d "${ALLURE_DIRECTORY}" ]; then
                            cp -a \
                              "${ALLURE_DIRECTORY}/." \
                              "${WORKSPACE}/combined-allure-results/"
                        else
                            echo "Missing Allure directory: ${ALLURE_DIRECTORY}"
                        fi
                    done

                    BLOB_COUNT=$(
                        find "${WORKSPACE}/combined-blobs" \
                          -maxdepth 1 \
                          -type f \
                          -name "*.zip" \
                          2>/dev/null |
                        wc -l |
                        tr -d ' '
                    )

                    ALLURE_COUNT=$(
                        find "${WORKSPACE}/combined-allure-results" \
                          -maxdepth 1 \
                          -type f \
                          -name "*-result.json" \
                          2>/dev/null |
                        wc -l |
                        tr -d ' '
                    )

                    echo ""
                    echo "Combined Playwright blobs: ${BLOB_COUNT}"
                    echo "Combined Allure results: ${ALLURE_COUNT}"

                    echo ""
                    echo "Collected blob files:"

                    find "${WORKSPACE}/combined-blobs" \
                      -maxdepth 1 \
                      -type f \
                      -name "*.zip" \
                      -print || true
                '''
            }
        }

        stage('Create Allure Metadata') {
            steps {
                sh '''
                    set -eu

                    mkdir -p \
                      "${WORKSPACE}/combined-allure-results"

                    cat > \
                      "${WORKSPACE}/combined-allure-results/environment.properties" \
                      <<EOF
Environment=${NODE_ENV}
Region=${REGION}
Build.Number=${BUILD_NUMBER}
Job.Name=${JOB_NAME}
Git.Commit=$(git rev-parse HEAD)
Docker.Image=${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}
Playwright.Version=${PLAYWRIGHT_VERSION}
Shards=${SHARD_TOTAL}
EOF

                    BUILD_ORDER="${BUILD_NUMBER:-0}"

                    case "${BUILD_ORDER}" in
                        ''|*[!0-9]*)
                            BUILD_ORDER=0
                            ;;
                    esac

                    cat > \
                      "${WORKSPACE}/combined-allure-results/executor.json" \
                      <<EOF
{
  "name": "Jenkins",
  "type": "jenkins",
  "url": "${JENKINS_URL:-}",
  "buildOrder": ${BUILD_ORDER},
  "buildName": "${JOB_NAME:-Playwright Tests} #${BUILD_NUMBER:-0}",
  "buildUrl": "${BUILD_URL:-}"
}
EOF

                    echo "Allure environment metadata:"
                    cat \
                      "${WORKSPACE}/combined-allure-results/environment.properties"
                '''
            }
        }

        stage('Merge Playwright Reports') {
            steps {
                script {
                    def blobCountText = sh(
                        returnStdout: true,
                        script: '''
                            if [ ! -d "combined-blobs" ]; then
                                echo "0"
                                exit 0
                            fi

                            find combined-blobs \
                              -maxdepth 1 \
                              -type f \
                              -name "*.zip" \
                              2>/dev/null |
                            wc -l |
                            tr -d ' '
                        '''
                    ).trim()

                    int blobCount = 0

                    if (blobCountText?.isInteger()) {
                        blobCount = blobCountText.toInteger()
                    }

                    echo "Playwright blob count before merge: ${blobCount}"

                    if (blobCount > 0) {
                        catchError(
                            buildResult: 'UNSTABLE',
                            stageResult: 'FAILURE'
                        ) {
                            sh '''
                                set -eu

                                rm -rf \
                                  "${WORKSPACE}/playwright-report"

                                mkdir -p \
                                  "${WORKSPACE}/playwright-report"

                                docker run --rm \
                                  --init \
                                  --volume \
                                    "${JENKINS_HOME_VOLUME}:/var/jenkins_home" \
                                  --workdir /app \
                                  --env HOME=/tmp \
                                  --env PLAYWRIGHT_HTML_OPEN=never \
                                  --env \
                                    PLAYWRIGHT_HTML_OUTPUT_DIR="${WORKSPACE}/playwright-report" \
                                  "${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}" \
                                  npx playwright merge-reports \
                                    --reporter=html \
                                    "${WORKSPACE}/combined-blobs"

                                if [ ! -f \
                                  "${WORKSPACE}/playwright-report/index.html" \
                                ]; then
                                    echo "ERROR: Playwright index.html was not generated."
                                    exit 1
                                fi

                                echo "Playwright HTML report generated successfully."
                            '''
                        }
                    } else {
                        echo 'No Playwright blob reports were available to merge.'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                echo '========================================'
                echo 'Publishing Playwright and Allure reports'
                echo '========================================'

                /*
                 * Publish merged Playwright HTML report.
                 */
                if (fileExists('playwright-report/index.html')) {
                    catchError(
                        buildResult: 'UNSTABLE',
                        stageResult: 'FAILURE'
                    ) {
                        publishHTML(target: [
                            allowMissing         : false,
                            alwaysLinkToLastBuild: true,
                            keepAll              : true,
                            reportDir            : 'playwright-report',
                            reportFiles          : 'index.html',
                            reportName           : 'Playwright Report',
                            reportTitles         : 'Merged Playwright Shard Report',
                            escapeUnderscores    : false
                        ])
                    }

                    echo 'Playwright HTML report published.'
                } else {
                    echo 'Playwright HTML report was not generated.'
                }

                /*
                 * Count combined Allure results.
                 */
                def allureCountText = sh(
                    returnStdout: true,
                    script: '''
                        if [ ! -d "combined-allure-results" ]; then
                            echo "0"
                            exit 0
                        fi

                        find combined-allure-results \
                          -maxdepth 1 \
                          -type f \
                          -name "*-result.json" \
                          2>/dev/null |
                        wc -l |
                        tr -d ' '
                    '''
                ).trim()

                int allureCount = 0

                if (allureCountText?.isInteger()) {
                    allureCount = allureCountText.toInteger()
                }

                echo "Combined Allure result count: ${allureCount}"

                /*
                 * Publish Allure report.
                 */
                if (allureCount > 0) {
                    catchError(
                        buildResult: 'UNSTABLE',
                        stageResult: 'FAILURE'
                    ) {
                        allure(
                            commandline: 'allure-2.43.0',
                            reportBuildPolicy: 'ALWAYS',
                            reportName: 'Allure Report',
                            resultPolicy: 'LEAVE_AS_IS',
                            includeProperties: false,
                            jdk: '',
                            results: [
                                [
                                    path: 'combined-allure-results'
                                ]
                            ]
                        )
                    }

                    echo 'Allure report published.'
                } else {
                    echo 'No combined Allure result files were generated.'
                }

                /*
                 * Archive test evidence.
                 *
                 * Storage states are intentionally not archived because
                 * they may contain authenticated cookies and tokens.
                 */
                catchError(
                    buildResult: 'UNSTABLE',
                    stageResult: 'FAILURE'
                ) {
                    archiveArtifacts(
                        artifacts: [
                            'test-results/**',
                            'playwright-report/**',
                            'combined-allure-results/**',
                            'combined-blobs/**',
                            'blob-shard1/**',
                            'blob-shard2/**',
                            'blob-shard3/**',
                            'allure-shard1/**',
                            'allure-shard2/**',
                            'allure-shard3/**'
                        ].join(', '),
                        allowEmptyArchive: true,
                        fingerprint: false
                    )
                }

                /*
                 * Remove only the build-number tag.
                 *
                 * Keep the local "latest" image so Docker can reuse its
                 * layers during the next Jenkins build.
                 */
                sh '''
                    docker image rm \
                      "${DOCKERHUB_REPOSITORY}:${BUILD_NUMBER}" \
                      2>/dev/null || true
                '''

                /*
                 * Remove exited Playwright containers in case a build was
                 * interrupted before --rm completed.
                 */
                sh '''
                    docker ps -a \
                      --filter \
                        "name=playwright-${BUILD_NUMBER}-shard-" \
                      --format "{{.ID}}" |
                    xargs -r docker rm -f \
                      2>/dev/null || true
                '''

                echo 'Pipeline report processing completed.'
            }
        }
    }
}