import { TestInfo } from '@playwright/test';
import { ShardAndParallelInfo } from '../types/executionMetaData.types';

export function getExecutionMetaData(testInfo: TestInfo): ShardAndParallelInfo {
  const shardConfig = testInfo.config.shard; 

  return {
    currentShard: shardConfig ? shardConfig.current : 1,
    totalShards: shardConfig ? shardConfig.total : 1,
    parallelWorkerIndex: testInfo.workerIndex, // 0-based internal index
    parallelWorkerId: testInfo.workerIndex + 1 // 1-based user-friendly index
  };
}




