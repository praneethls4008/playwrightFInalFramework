pipeline {
    agent any

    environment {
        NODE_ENV = 'PROD'
        TEST_ENVIRONMENT = 'PROD'
        REGION = 'PROD'

        /*
         * Declarative environment values should be strings.
         */
        CI = 'true'

        PLAYWRIGHT_BROWSERS_PATH = '/var/playwright-browsers'
        PLAYWRIGHT_HTML_OPEN = 'never'

        API_BASE_URL = 'http://172.17.0.1:3001/api/v1/'
        STORAGE_STATE_ROOT_PATH = 'storage-states/'

        CRYPTO_SECRET_KEY = credentials('crypto-secret-key')
    }

    tools {
        nodejs 'NodeJS'
    }

    options {
        timestamps()

        /*
         * Prevent two builds of the same job from using the same workspace
         * and overwriting report directories.
         */
        disableConcurrentBuilds()
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git(
                    branch: 'main',
                    url: 'https://github.com/praneethls4008/playwrightFInalFramework'
                )
            }
        }

        stage('Install NPM Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Playwright Shards in Parallel') {
            failFast false

            parallel {
                stage('Shard 1 of 3') {
                    steps {
                        withCredentials([
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
                            sh '''
                                set +e

                                PLAYWRIGHT_BLOB_OUTPUT_DIR=blob-shard1 \
                                PLAYWRIGHT_BLOB_OUTPUT_NAME=shard1.zip \
                                ALLURE_RESULTS_DIR=allure-shard1 \
                                npm run test:prod -- \
                                    --shard=1/3 \
                                    --output=test-results/shard1

                                TEST_EXIT_CODE=$?

                                echo "========================================"
                                echo "Shard 1 execution completed"
                                echo "Exit code: ${TEST_EXIT_CODE}"
                                echo "========================================"

                                echo "Shard 1 blob files:"

                                find blob-shard1 \
                                    -maxdepth 1 \
                                    -type f \
                                    -name "*.zip" \
                                    -print 2>/dev/null || true

                                ALLURE_COUNT=$(
                                    find allure-shard1 \
                                        -maxdepth 1 \
                                        -type f \
                                        -name "*-result.json" \
                                        2>/dev/null |
                                    wc -l |
                                    tr -d ' '
                                )

                                echo "Shard 1 Allure result count: ${ALLURE_COUNT}"

                                /*
                                 * Return the original Playwright exit code.
                                 * Jenkins will mark the branch as failed when tests fail,
                                 * while the pipeline-level post always block still publishes
                                 * the reports.
                                 */
                                exit "${TEST_EXIT_CODE}"
                            '''
                        }
                    }
                }

                stage('Shard 2 of 3') {
                    steps {
                        withCredentials([
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
                            sh '''
                                set +e

                                PLAYWRIGHT_BLOB_OUTPUT_DIR=blob-shard2 \
                                PLAYWRIGHT_BLOB_OUTPUT_NAME=shard2.zip \
                                ALLURE_RESULTS_DIR=allure-shard2 \
                                npm run test:prod -- \
                                    --shard=2/3 \
                                    --output=test-results/shard2

                                TEST_EXIT_CODE=$?

                                echo "========================================"
                                echo "Shard 2 execution completed"
                                echo "Exit code: ${TEST_EXIT_CODE}"
                                echo "========================================"

                                echo "Shard 2 blob files:"

                                find blob-shard2 \
                                    -maxdepth 1 \
                                    -type f \
                                    -name "*.zip" \
                                    -print 2>/dev/null || true

                                ALLURE_COUNT=$(
                                    find allure-shard2 \
                                        -maxdepth 1 \
                                        -type f \
                                        -name "*-result.json" \
                                        2>/dev/null |
                                    wc -l |
                                    tr -d ' '
                                )

                                echo "Shard 2 Allure result count: ${ALLURE_COUNT}"

                                exit "${TEST_EXIT_CODE}"
                            '''
                        }
                    }
                }

                stage('Shard 3 of 3') {
                    steps {
                        withCredentials([
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
                            sh '''
                                set +e

                                PLAYWRIGHT_BLOB_OUTPUT_DIR=blob-shard3 \
                                PLAYWRIGHT_BLOB_OUTPUT_NAME=shard3.zip \
                                ALLURE_RESULTS_DIR=allure-shard3 \
                                npm run test:prod -- \
                                    --shard=3/3 \
                                    --output=test-results/shard3

                                TEST_EXIT_CODE=$?

                                echo "========================================"
                                echo "Shard 3 execution completed"
                                echo "Exit code: ${TEST_EXIT_CODE}"
                                echo "========================================"

                                echo "Shard 3 blob files:"

                                find blob-shard3 \
                                    -maxdepth 1 \
                                    -type f \
                                    -name "*.zip" \
                                    -print 2>/dev/null || true

                                ALLURE_COUNT=$(
                                    find allure-shard3 \
                                        -maxdepth 1 \
                                        -type f \
                                        -name "*-result.json" \
                                        2>/dev/null |
                                    wc -l |
                                    tr -d ' '
                                )

                                echo "Shard 3 Allure result count: ${ALLURE_COUNT}"

                                exit "${TEST_EXIT_CODE}"
                            '''
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                echo 'Collecting and publishing Playwright and Allure reports...'

                /*
                 * ----------------------------------------------------------
                 * 1. Collect Playwright blob reports and Allure raw results
                 * ----------------------------------------------------------
                 */
                def collectionStatus = sh(
                    returnStatus: true,
                    script: '''
                        set -e

                        rm -rf combined-blobs
                        rm -rf combined-allure-results
                        rm -rf playwright-report

                        mkdir -p combined-blobs
                        mkdir -p combined-allure-results

                        echo ""
                        echo "========================================"
                        echo "Collecting Playwright blob reports"
                        echo "========================================"

                        for BLOB_DIR in \
                            blob-shard1 \
                            blob-shard2 \
                            blob-shard3
                        do
                            if [ -d "${BLOB_DIR}" ]; then
                                echo "Reading ${BLOB_DIR}"

                                find "${BLOB_DIR}" \
                                    -maxdepth 1 \
                                    -type f \
                                    -name "*.zip" \
                                    -exec cp {} combined-blobs/ \\;
                            else
                                echo "Missing blob directory: ${BLOB_DIR}"
                            fi
                        done

                        BLOB_COUNT=$(
                            find combined-blobs \
                                -maxdepth 1 \
                                -type f \
                                -name "*.zip" |
                            wc -l |
                            tr -d ' '
                        )

                        echo "Total Playwright blob ZIP files: ${BLOB_COUNT}"

                        find combined-blobs \
                            -maxdepth 1 \
                            -type f \
                            -name "*.zip" \
                            -print || true

                        echo ""
                        echo "========================================"
                        echo "Collecting Allure raw result files"
                        echo "========================================"

                        for ALLURE_DIR in \
                            allure-shard1 \
                            allure-shard2 \
                            allure-shard3
                        do
                            if [ -d "${ALLURE_DIR}" ]; then
                                echo "Reading ${ALLURE_DIR}"

                                cp -a \
                                    "${ALLURE_DIR}/." \
                                    combined-allure-results/
                            else
                                echo "Missing Allure directory: ${ALLURE_DIR}"
                            fi
                        done

                        ALLURE_RESULT_COUNT=$(
                            find combined-allure-results \
                                -maxdepth 1 \
                                -type f \
                                -name "*-result.json" |
                            wc -l |
                            tr -d ' '
                        )

                        echo "Total Allure result JSON files: ${ALLURE_RESULT_COUNT}"

                        echo ""
                        echo "First Allure result files:"

                        find combined-allure-results \
                            -maxdepth 1 \
                            -type f \
                            -name "*-result.json" \
                            -print |
                            head -20 || true

                        echo ""
                        echo "========================================"
                        echo "Creating Allure environment information"
                        echo "========================================"

                        ENVIRONMENT_VALUE="${TEST_ENVIRONMENT:-${NODE_ENV:-PROD}}"
                        REGION_VALUE="${REGION:-UNKNOWN}"
                        BUILD_NUMBER_VALUE="${BUILD_NUMBER:-UNKNOWN}"
                        BUILD_TAG_VALUE="${BUILD_TAG:-UNKNOWN}"
                        JOB_NAME_VALUE="${JOB_NAME:-UNKNOWN}"
                        NODE_NAME_VALUE="${NODE_NAME:-UNKNOWN}"
                        GIT_BRANCH_VALUE="${GIT_BRANCH:-main}"

                        cat > combined-allure-results/environment.properties <<EOF
Environment=${ENVIRONMENT_VALUE}
Region=${REGION_VALUE}
Build.Number=${BUILD_NUMBER_VALUE}
Build.Tag=${BUILD_TAG_VALUE}
Job.Name=${JOB_NAME_VALUE}
Node.Name=${NODE_NAME_VALUE}
Git.Branch=${GIT_BRANCH_VALUE}
Shards=3
Node.Version=$(node --version)
NPM.Version=$(npm --version)
Playwright.Version=$(npx playwright --version)
EOF

                        echo ""
                        cat combined-allure-results/environment.properties

                        /*
                         * Add Jenkins information to the Allure report.
                         */
                        BUILD_ORDER="${BUILD_NUMBER:-0}"

                        case "${BUILD_ORDER}" in
                            ''|*[!0-9]*)
                                BUILD_ORDER=0
                                ;;
                        esac

                        cat > combined-allure-results/executor.json <<EOF
{
  "name": "Jenkins",
  "type": "jenkins",
  "url": "${JENKINS_URL:-}",
  "buildOrder": ${BUILD_ORDER},
  "buildName": "${JOB_NAME:-Playwright Tests} #${BUILD_NUMBER:-0}",
  "buildUrl": "${BUILD_URL:-}"
}
EOF

                        echo ""
                        echo "Allure executor information:"

                        cat combined-allure-results/executor.json
                    '''
                )

                if (collectionStatus != 0) {
                    echo """
                        Report collection encountered an error.
                        Exit code: ${collectionStatus}

                        Publishing will still be attempted for any available files.
                    """.stripIndent()
                }

                /*
                 * ----------------------------------------------------------
                 * 2. Merge Playwright shard blobs into one HTML report
                 * ----------------------------------------------------------
                 */
                def playwrightMergeStatus = sh(
                    returnStatus: true,
                    script: '''
                        set -e

                        echo ""
                        echo "========================================"
                        echo "Generating Playwright HTML report"
                        echo "========================================"

                        BLOB_COUNT=$(
                            find combined-blobs \
                                -maxdepth 1 \
                                -type f \
                                -name "*.zip" |
                            wc -l |
                            tr -d ' '
                        )

                        echo "Blob count before merge: ${BLOB_COUNT}"

                        if [ "${BLOB_COUNT}" -eq 0 ]; then
                            echo "ERROR: No Playwright blob ZIP files were found."
                            exit 2
                        fi

                        npx playwright merge-reports \
                            --reporter=html \
                            ./combined-blobs

                        if [ ! -f "playwright-report/index.html" ]; then
                            echo "ERROR: Playwright report index.html was not generated."
                            exit 3
                        fi

                        echo "Playwright report generated successfully:"
                        ls -lh playwright-report/index.html
                    '''
                )

                if (playwrightMergeStatus != 0) {
                    echo """
                        Playwright report generation failed.
                        Exit code: ${playwrightMergeStatus}
                    """.stripIndent()
                }

                /*
                 * ----------------------------------------------------------
                 * 3. Publish Playwright HTML using HTML Publisher
                 * ----------------------------------------------------------
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
                            escapeUnderscores    : false,
                            numberOfWorkers      : 4
                        ])
                    }

                    echo 'Playwright HTML report published.'
                } else {
                    echo 'Playwright HTML report was not generated.'
                }

                /*
                 * ----------------------------------------------------------
                 * 4. Publish Allure using the native Allure Jenkins plugin
                 * ----------------------------------------------------------
                 *
                 * Do not run:
                 *
                 *   npx allure generate ...
                 *
                 * Do not publish Allure through publishHTML.
                 *
                 * The Jenkins Allure plugin receives the raw result directory
                 * and generates/stores the report for the Jenkins build.
                 */
                def allureResultCountText = sh(
                    returnStdout: true,
                    script: '''
                        if [ ! -d "combined-allure-results" ]; then
                            echo "0"
                            exit 0
                        fi

                        find combined-allure-results \
                            -maxdepth 1 \
                            -type f \
                            -name "*-result.json" |
                        wc -l |
                        tr -d ' '
                    '''
                ).trim()

                int allureResultCount = 0

                if (allureResultCountText?.isInteger()) {
                    allureResultCount = allureResultCountText.toInteger()
                }

                echo "Allure result JSON count before publishing: ${allureResultCount}"

                if (allureResultCount > 0) {
                    catchError(
                        buildResult: 'UNSTABLE',
                        stageResult: 'FAILURE'
                    ) {
                        allure(
                            /*
                             * This must exactly match the name configured under:
                             *
                             * Manage Jenkins
                             *   → Tools
                             *   → Allure Commandline installations
                             */
                            commandline: 'allure-2.43.0',

                            /*
                             * Generate the report for passed, unstable,
                             * and failed builds.
                             */
                            reportBuildPolicy: 'ALWAYS',

                            /*
                             * Display name in the Jenkins build left menu.
                             */
                            reportName: 'Allure Report',

                            /*
                             * Do not change the original Playwright/Jenkins
                             * build result based on report generation.
                             */
                            resultPolicy: 'LEAVE_AS_IS',

                            includeProperties: false,
                            jdk: '',

                            /*
                             * Raw merged Allure result directory.
                             */
                            results: [
                                [path: 'combined-allure-results']
                            ]
                        )
                    }

                    echo 'Allure report published through the Jenkins Allure plugin.'
                } else {
                    echo 'No Allure result JSON files were available for publishing.'
                }

                /*
                 * ----------------------------------------------------------
                 * 5. Archive raw reports and failure evidence
                 * ----------------------------------------------------------
                 */
                catchError(
                    buildResult: 'UNSTABLE',
                    stageResult: 'FAILURE'
                ) {
                    archiveArtifacts(
                        artifacts: [
                            'combined-blobs/*.zip',
                            'combined-allure-results/**',
                            'playwright-report/**',
                            'test-results/**',
                            'allure-shard1/**',
                            'allure-shard2/**',
                            'allure-shard3/**'
                        ].join(', '),
                        allowEmptyArchive: true,
                        fingerprint: false
                    )
                }

                echo 'Report processing completed.'
            }
        }
    }
}