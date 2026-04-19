import questionnaire from "./questionnaire.js"

const dimensions = [
  "introverted",
  "observant",
  "feeling",
  "prospecting",
] as const

const positive: Record<(typeof dimensions)[number], number> = {
  introverted: 0,
  observant: 0,
  feeling: 0,
  prospecting: 0,
}
const negative: Record<(typeof dimensions)[number], number> = {
  introverted: 0,
  observant: 0,
  feeling: 0,
  prospecting: 0,
}

for (const q of Object.values(questionnaire)) {
  for (const d of dimensions) {
    const w = q.weight[d]
    if (w > 0) positive[d] += w
    else if (w < 0) negative[d] += w
  }
}

for (const d of dimensions) {
  console.log(`${d}: +${positive[d]} / ${negative[d]}`)
}
