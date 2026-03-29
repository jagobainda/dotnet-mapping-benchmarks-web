export interface BenchmarkCase {
  name: string;
  mean_us: number;
  median_us: number;
  p95_us: number;
  p99_us: number;
  stddev_us: number;
  alloc_bytes: number;
}

export interface Library {
  name: string;
  version: string;
  cases: BenchmarkCase[];
}

export interface BenchmarkData {
  run_at: string;
  libraries: Library[];
}

