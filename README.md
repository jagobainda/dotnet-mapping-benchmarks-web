# .NET Mapper Benchmarks — Web

> A clean, minimal frontend to visualize performance benchmarks of popular .NET object mapping libraries.

Live at **[benchmarks.jagoba.dev/dotnet-mappers](https://benchmarks.jagoba.dev/dotnet-mappers)**

![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A522-5FA04E?logo=nodedotjs&logoColor=white)

---

## What is this?

Benchmarks for .NET mappers (AutoMapper, Mapperly, Mapster, TinyMapper, AgileMapper, and manual approaches) run automatically every hour on a dedicated VPS using [BenchmarkDotNet](https://github.com/dotnet/BenchmarkDotNet). This site makes those results easy to read — no raw JSON, no markdown tables, just interactive charts and clean data.

Results are averaged over the last 3 months to reduce noise and reflect long-term trends. Library versions are kept up to date automatically so the data always reflects the latest releases.

The site also exposes a [`/llms.txt`](https://benchmarks.jagoba.dev/dotnet-mappers/llms.txt) file following the [llms.txt standard](https://llmstxt.org), so LLMs and AI assistants can easily discover and consume the benchmark data in plain text.

**Measured scenarios:** `SimpleFlat` · `NestedObject` · `Collection` · `NameDifference`  
**Metrics:** mean execution time (μs) and memory allocation (bytes) per operation.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro 6](https://astro.build) (SSR) | Islands architecture, near-zero JS by default, excellent DX |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | Utility-first, no runtime overhead, v4 Vite plugin is fast |
| Charts | [Chart.js 4](https://www.chartjs.org) | Lightweight, good canvas performance, easy to drive from vanilla JS |
| Runtime | Node.js ≥ 22 (standalone adapter) | Simple deployment, single Node process |
| Language | TypeScript | Type safety for benchmark data shapes |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build
npm run preview   # preview production build
```

Benchmark data is read from `docs/benchmark_avg_example.json` (average) and `docs/benchmark_last_example.json` (last run).

---

## Related

- [DotnetMappingBenchmarks](https://github.com/jagobainda/DotnetMappingBenchmarks) — the benchmark runner that generates the data consumed by this site.


