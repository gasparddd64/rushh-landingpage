# Graph Report - rushh-landing  (2026-09-09)

## Corpus Check
- 58 files · ~473,155 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 30 nodes · 34 edges · 5 communities (3 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cd036f44`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- HeroSection.tsx
- CallTimeline
- page.tsx
- Nav.tsx
- FAQSection.tsx

## God Nodes (most connected - your core abstractions)
1. `FAQSection()` - 2 edges
2. `HeroSection()` - 2 edges
3. `CallTimeline()` - 2 edges
4. `run()` - 2 edges
5. `delay()` - 2 edges
6. `ProblemSection()` - 2 edges
7. `Nav()` - 2 edges
8. `organizationSchema` - 1 edges
9. `localBusinessSchema` - 1 edges
10. `serviceSchema` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (5 total, 2 thin omitted)

### Community 0 - "HeroSection.tsx"
Cohesion: 0.17
Nodes (4): cityRow1, Phase, QUAL_FIELDS, StepState

### Community 1 - "CallTimeline"
Cohesion: 0.67
Nodes (3): CallTimeline(), run(), delay()

### Community 2 - "page.tsx"
Cohesion: 0.25
Nodes (6): faqSchema, localBusinessSchema, organizationSchema, serviceSchema, HeroSection(), ProblemSection()

## Knowledge Gaps
- **10 isolated node(s):** `organizationSchema`, `localBusinessSchema`, `serviceSchema`, `faqSchema`, `FAQ` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 18 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CallTimeline()` connect `CallTimeline` to `HeroSection.tsx`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `delay()` connect `CallTimeline` to `HeroSection.tsx`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `organizationSchema`, `localBusinessSchema`, `serviceSchema` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._