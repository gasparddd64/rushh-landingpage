# Graph Report - rushh-landing  (2026-09-09)

## Corpus Check
- 58 files · ~473,064 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 58 nodes · 64 edges · 10 communities (4 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cef85f19`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- HeroSection.tsx
- CallTimeline
- page.tsx
- Nav.tsx
- FAQSection.tsx
- CompareSection.tsx
- SolutionSection.tsx
- WhySection.tsx
- IntegrationsSection.tsx
- ProblemSection.tsx

## God Nodes (most connected - your core abstractions)
1. `DemoCTA()` - 5 edges
2. `delay()` - 2 edges
3. `CallTimeline()` - 2 edges
4. `run()` - 2 edges
5. `HeroSection()` - 2 edges
6. `ProblemSection()` - 2 edges
7. `Nav()` - 2 edges
8. `FAQSection()` - 2 edges
9. `BAD_ITEMS` - 1 edges
10. `GOOD_ITEMS` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 6 thin omitted)

### Community 0 - "HeroSection.tsx"
Cohesion: 0.17
Nodes (4): cityRow1, Phase, QUAL_FIELDS, StepState

### Community 1 - "CallTimeline"
Cohesion: 0.67
Nodes (3): CallTimeline(), run(), delay()

### Community 2 - "page.tsx"
Cohesion: 0.29
Nodes (5): faqSchema, localBusinessSchema, organizationSchema, serviceSchema, HeroSection()

### Community 5 - "CompareSection.tsx"
Cohesion: 0.24
Nodes (3): BAD_ITEMS, GOOD_ITEMS, DemoCTA()

## Knowledge Gaps
- **16 isolated node(s):** `BAD_ITEMS`, `GOOD_ITEMS`, `cityRow1`, `StepState`, `QUAL_FIELDS` (+11 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 39 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DemoCTA()` connect `CompareSection.tsx` to `SolutionSection.tsx`, `WhySection.tsx`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Why does `delay()` connect `CallTimeline` to `HeroSection.tsx`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `CallTimeline()` connect `CallTimeline` to `HeroSection.tsx`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `BAD_ITEMS`, `GOOD_ITEMS`, `cityRow1` to the rest of the system?**
  _16 weakly-connected nodes found - possible documentation gaps or missing edges._