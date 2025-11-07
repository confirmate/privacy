# PEMM — Privacy Engineering Maturity Model

A single-page site that visualizes the Privacy Engineering Maturity Model - PEMM.  
It shows a hero explanation, a legend for maturity levels, and a card for each privacy engineering activity with Levels 1–3 plus their quality criteria.

## Project Structure

```
├── index.html      # Landing page markup + rendering script
├── styles.css      # Shared design tokens, layout, and animations
└── activities.js   # Structured data for all maturity activities (exposed on window.activities)
```

## Getting Started

1. **Clone / copy** this directory.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).  
   No build step or server is required because all assets are static.

## Maturity Activity Content

The page showcases 15 privacy engineering disciplines ranging from “Consider how to integrate Privacy Engineering in the Development Process” to “Decommissioning of Personal Data.”  
For each discipline, visitors can review three maturity levels:

- **Level 1 – Emerging:** ad-hoc practices that satisfy only the most critical risks.
- **Level 2 – Managed:** structured processes, dedicated roles, and repeatable reviews.
- **Level 3 – Integrated:** automation, continuous monitoring, and proactive evolution.

The complete dataset—including titles, summaries, and level-by-level quality criteria—is stored in `activities.js`. The script exposes the array on `window.activities`, which `index.html` reads to render the cards dynamically.
