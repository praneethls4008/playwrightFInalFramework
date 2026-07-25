#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# --- CONFIGURATION ---
TOTAL_SHARDS=3
MAIN_BLOB_DIR="./blob-report"
HTML_DIR="./playwright-report"

echo "=== 🧹 Step 1: Cleaning up old reports ==="
rm -rf "$MAIN_BLOB_DIR" "$HTML_DIR"
mkdir -p "$MAIN_BLOB_DIR"

echo "=== 🚀 Step 2: Running $TOTAL_SHARDS shards sequentially ==="
for ((i=1; i<=TOTAL_SHARDS; i++)); do
  echo "----------------------------------------"
  echo "▶️ Running Shard $i of $TOTAL_SHARDS..."
  echo "----------------------------------------"
  
  # ✅ FIX: Route each shard into its own unique subfolder so they don't delete each other!
  SHARD_DIR="$MAIN_BLOB_DIR/shard-$i"
  
  NODE_ENV="PROD" PLAYWRIGHT_BLOB_OUTPUT_DIR="$SHARD_DIR" npm run ui:prod -- --grep='@mytest' --shard="$i/$TOTAL_SHARDS" --reporter=blob || {
    echo "⚠️ Shard $i completed with test failures. Continuing..."
  }
done

echo "----------------------------------------"
echo "=== 🔄 Step 3: Merging blob reports into HTML ==="
# ✅ FIX: Point the merge utility to the root directory containing all subfolders
NODE_ENV="PROD" npx playwright merge-reports "$MAIN_BLOB_DIR" --reporter=html

echo "=== 📊 Step 4: Opening unified test report ==="
npx playwright show-report "$HTML_DIR"
