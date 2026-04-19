import { createHash } from "node:crypto"
import { writeFileSync } from "node:fs"
import questionnaire from "./questionnaire.js"

const FIRST = "BCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz"
const SECOND = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function hashKey(text: string): string {
  const bytes = createHash("sha256").update(text).digest()
  let num = BigInt("0x" + bytes.toString("hex"))
  let encoded = ""
  encoded += FIRST[Number(num % BigInt(FIRST.length))]
  num /= BigInt(FIRST.length)
  while (num > 0n) {
    encoded += SECOND[Number(num % BigInt(SECOND.length))]
    num /= BigInt(SECOND.length)
  }
  return encoded
}

const used = new Set<string>()
const keyed = Object.values(questionnaire).map((q) => {
  if (q.key.startsWith("A")) {
    // Skip hashing hand-made questions
    return q
  }
  const hash = hashKey(q.question)
  let len = 1
  while (used.has(hash.slice(0, len))) {
    len++
    if (len > hash.length) {
      throw new Error(`hash exhausted for question: ${q.question}`)
    }
  }
  const key = hash.slice(0, len)
  used.add(key)
  return { ...q, key }
})
const sorted = keyed
  .slice()
  .sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))

const lines: string[] = []
lines.push(`import type { Question } from "./type.js"`)
lines.push(``)
lines.push(`export default {`)
for (const q of sorted) {
  const kLit = JSON.stringify(q.key)
  const w = q.weight
  lines.push(`  ${kLit}: {`)
  lines.push(`    key: ${kLit},`)
  lines.push(`    majorGroup: ${JSON.stringify(q.majorGroup)},`)
  lines.push(`    minorGroup: ${JSON.stringify(q.minorGroup)},`)
  lines.push(`    question: ${JSON.stringify(q.question)},`)
  lines.push(
    `    weight: { introverted: ${w.introverted}, observant: ${w.observant}, feeling: ${w.feeling}, prospecting: ${w.prospecting} },`,
  )
  lines.push(`  },`)
}
lines.push(`} satisfies { [key: string]: Question }`)
lines.push(``)

const outUrl = new URL("./questionnaire.ts", import.meta.url)
writeFileSync(outUrl, lines.join("\n"))
console.log(`wrote ${outUrl.pathname}`)
