import questionnaire from "./questionnaire.js"

const form = document.getElementById("abti-form") as HTMLFormElement
const result = document.getElementById("abti-result") as HTMLDivElement
const codeEl = document.getElementById("abti-code") as HTMLDivElement
const mbtiLink = document.getElementById("mbti-link") as HTMLAnchorElement
const promptShow = document.getElementById("prompt-show") as HTMLButtonElement
const promptHide = document.getElementById("prompt-hide") as HTMLButtonElement
const promptCopy = document.getElementById("prompt-copy") as HTMLButtonElement
const promptEl = document.getElementById("prompt") as HTMLPreElement
const nameInput = document.getElementById("name-input") as HTMLInputElement
const userName = document.getElementById("abti-user-name") as HTMLSpanElement

promptShow.addEventListener("click", () => {
  promptEl.classList.add("visible")
  promptShow.classList.remove("visible")
  promptHide.classList.add("visible")
})

promptHide.addEventListener("click", () => {
  promptEl.classList.remove("visible")
  promptShow.classList.add("visible")
  promptHide.classList.remove("visible")
})

promptCopy.addEventListener("click", () => {
  const text = promptEl.textContent ?? ""
  navigator.clipboard.writeText(text).then(() => {
    promptCopy.textContent = "copied!"
  })
})

type Dimension = "introverted" | "observant" | "feeling" | "prospecting"
type RawScores = Record<Dimension, number>
type DisplayScores = Record<Dimension, number>

const VALUE_TO_SCORE: Record<string, number> = {
  "3": 3,
  "2": 2,
  "1": 1,
  "0": 0,
  "9": -1,
  "8": -2,
  "7": -3,
}

function computeRaw(): RawScores {
  const raw: RawScores = {
    introverted: 0,
    observant: 0,
    feeling: 0,
    prospecting: 0,
  }
  const data = new FormData(form)
  for (const [key, value] of data.entries()) {
    if (typeof value !== "string") {
      continue
    }
    const q = questionnaire[key as keyof typeof questionnaire]
    if (!q) {
      continue
    }
    const answer = VALUE_TO_SCORE[value] ?? 0
    raw.introverted += answer * q.weight.introverted
    raw.observant += answer * q.weight.observant
    raw.feeling += answer * q.weight.feeling
    raw.prospecting += answer * q.weight.prospecting
  }
  return raw
}

function toDisplayScore(raw: number): number {
  return raw / 6 + 50
}

function rescale(raw: RawScores): DisplayScores {
  return {
    introverted: toDisplayScore(raw.introverted),
    observant: toDisplayScore(raw.observant),
    feeling: toDisplayScore(raw.feeling),
    prospecting: toDisplayScore(raw.prospecting),
  }
}

function letter(displayScore: number, pos: string, neg: string): string {
  if (displayScore >= 60) {
    return pos
  }
  if (displayScore >= 50) {
    return pos.toLowerCase()
  }
  if (displayScore <= 40) {
    return neg
  }
  return neg.toLowerCase()
}

function code(display: DisplayScores): {
  i: string
  s: string
  f: string
  p: string
} {
  return {
    i: letter(display.introverted, "I", "E"),
    s: letter(display.observant, "S", "N"),
    f: letter(display.feeling, "F", "T"),
    p: letter(display.prospecting, "P", "J"),
  }
}

function label(side: "P" | "N", displayScore: number, word: string): string {
  const score = Math.round(side === "P" ? displayScore : 100 - displayScore)
  if (score >= 60 && side === "P") {
    return `${word.toUpperCase()} (${score})`
  }
  if (score >= 60 && side === "N") {
    return `(${score}) ${word.toUpperCase()}`
  }
  if (side === "P") {
    return `${word.toLowerCase()} (${score})`
  }
  return `(${score}) ${word.toLowerCase()}`
}

function bar(side: "P" | "N", displayScore: number): string {
  const deviation = Math.round(
    side === "P" ? displayScore - 50 : 50 - displayScore,
  )
  if (deviation >= 0) {
    return (side === "P" ? ">" : "<").repeat(deviation + 1)
  }
  return side === "P" ? ">" : "<"
}

function setDimension(
  id: string,
  side: "P" | "N",
  displayScore: number,
  word: string,
): void {
  const labelEl = document.getElementById(id)
  const barEl = document.getElementById(`${id}-bar`)
  if (labelEl) {
    labelEl.textContent = label(side, displayScore, word)
  }
  if (barEl) {
    barEl.textContent = bar(side, displayScore)
  }
}

function render(): void {
  const name = nameInput.value.trim()
  userName.textContent = name ? `${name}'s` : "Your"
  const raw = computeRaw()
  const anyNonZero =
    raw.introverted !== 0 ||
    raw.observant !== 0 ||
    raw.feeling !== 0 ||
    raw.prospecting !== 0
  result.classList.toggle("visible", anyNonZero)
  if (!anyNonZero) {
    return
  }
  const display = rescale(raw)
  const c = code(display)
  const type = `${c.i}${c.s}${c.f}${c.p}`
  codeEl.textContent = type
  const link = `https://www.16personalities.com/${type.toLowerCase()}-personality`
  mbtiLink.href = link
  mbtiLink.textContent = link
  setDimension("abti-introverted", "P", display.introverted, "introverted")
  setDimension("abti-extraverted", "N", display.introverted, "extraverted")
  setDimension("abti-observant", "P", display.observant, "observant")
  setDimension("abti-intuitive", "N", display.observant, "intuitive")
  setDimension("abti-feeling", "P", display.feeling, "feeling")
  setDimension("abti-thinking", "N", display.feeling, "thinking")
  setDimension("abti-prospecting", "P", display.prospecting, "prospecting")
  setDimension("abti-judging", "N", display.prospecting, "judging")
}

form.addEventListener("change", render)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const params = new URLSearchParams()
  const name = (data.get("name") as string | null) ?? ""
  params.set("name", name)
  for (const [key, value] of data.entries()) {
    if (key === "name") continue
    params.append(key, String(value))
  }
  window.location.search = params.toString()
})

function applyQueryParams(): void {
  const params = new URLSearchParams(window.location.search)
  for (const [key, value] of params) {
    if (key === "name") {
      nameInput.value = value
      continue
    }
    const input = form.querySelector<HTMLInputElement>(
      `input[name="${CSS.escape(key)}"][value="${CSS.escape(value)}"]`,
    )
    if (input) {
      input.checked = true
    }
  }
}

applyQueryParams()
render()
