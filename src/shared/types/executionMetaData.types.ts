export type ShardAndParallelInfo = {
  currentShard: number;
  totalShards: number;
  parallelWorkerIndex: number;
  parallelWorkerId: number; // 1-based index
};