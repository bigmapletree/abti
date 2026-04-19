import type { Question } from "./type.js"

export default {
  A1: {
    key: "A1",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "When I'm planning with peers, I'd rather give a one-sentence summary when it's my turn to talk than lay out every detail at once.",
    weight: { introverted: 1, observant: -2, feeling: 0, prospecting: 1 },
  },
  A2: {
    key: "A2",
    majorGroup: "team-planning",
    minorGroup: "talk-owner",
    question:
      "When I'm planning with the owner, I'd rather give a one-sentence summary when it's my turn to talk than lay out every detail at once.",
    weight: { introverted: 1, observant: -2, feeling: -1, prospecting: 1 },
  },
  A3: {
    key: "A3",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "When I'm planning with a direct report, I'd rather give a one-sentence summary when it's my turn to talk than lay out every detail at once.",
    weight: { introverted: 1, observant: -2, feeling: -1, prospecting: 1 },
  },
  A4: {
    key: "A4",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "When I'm planning with a project manager, I'd rather give a one-sentence summary when it's my turn to talk than lay out every detail at once.",
    weight: { introverted: 1, observant: -2, feeling: 0, prospecting: 1 },
  },
  A5: {
    key: "A5",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "When I'm reviewing a peer's code, I'd rather leave a one-sentence summary than walk through every detail.",
    weight: { introverted: 1, observant: -2, feeling: 0, prospecting: 1 },
  },
  A6: {
    key: "A6",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "When I'm reviewing the owner's code, I'd rather leave a one-sentence summary than walk through every detail.",
    weight: { introverted: 1, observant: -2, feeling: -1, prospecting: 1 },
  },
  A7: {
    key: "A7",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "When I'm reviewing a direct report's code, I'd rather leave a one-sentence summary than walk through every detail.",
    weight: { introverted: 1, observant: -2, feeling: -1, prospecting: 1 },
  },
  B: {
    key: "B",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "Praise in a report's review matters more than in a peer's — it calibrates what they think is good.",
    weight: { introverted: -1, observant: -1, feeling: 2, prospecting: -1 },
  },
  BP: {
    key: "BP",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "I'd rather ship a feature and patch a vulnerability later than hold it up for theoretical risks.",
    weight: { introverted: 0, observant: -2, feeling: -2, prospecting: 2 },
  },
  C: {
    key: "C",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "I work out my plan first, then share it — discussing too early wastes everyone's time.",
    weight: { introverted: 2, observant: -1, feeling: -2, prospecting: -1 },
  },
  C2: {
    key: "C2",
    majorGroup: "personal-planning",
    minorGroup: "break-project",
    question:
      "Breaking a task into pieces before starting feels like over-planning for most work I get.",
    weight: { introverted: -1, observant: -1, feeling: 0, prospecting: 2 },
  },
  C4: {
    key: "C4",
    majorGroup: "personal-writing-code",
    minorGroup: "structure-code",
    question:
      "I'd rather refactor a working prototype than design abstractions before I've seen the real code.",
    weight: { introverted: 0, observant: -1, feeling: 0, prospecting: 3 },
  },
  CF: {
    key: "CF",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "Security checks add real cost, so I apply them where the risk is real — not everywhere.",
    weight: { introverted: 0, observant: 1, feeling: -1, prospecting: 1 },
  },
  Cd: {
    key: "Cd",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "PMs juggle people and priorities I don't see — I trust their prioritization more than I question it.",
    weight: { introverted: 0, observant: 1, feeling: 0, prospecting: 0 },
  },
  Ce: {
    key: "Ce",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "I hold a direct report's code to the same bar as my own — maybe higher, for their benefit.",
    weight: { introverted: -1, observant: 1, feeling: -1, prospecting: -1 },
  },
  D: {
    key: "D",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "I'll push back on the code owner just as firmly as on a peer when I think they're wrong.",
    weight: { introverted: -2, observant: -1, feeling: -2, prospecting: 0 },
  },
  Dc: {
    key: "Dc",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "I avoid the code owner for a while after a harsh exchange, just to let things cool.",
    weight: { introverted: 3, observant: -1, feeling: 2, prospecting: 0 },
  },
  Dq: {
    key: "Dq",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "I address harsh code owner comments in a 1:1, not in the thread where they happened.",
    weight: { introverted: 1, observant: 1, feeling: 2, prospecting: 0 },
  },
  E: {
    key: "E",
    majorGroup: "personal-writing-code",
    minorGroup: "polish-code",
    question:
      "Clean code is partly about respect — for the next reader and for myself in six months.",
    weight: { introverted: 0, observant: -1, feeling: 1, prospecting: 0 },
  },
  E8: {
    key: "E8",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "Threat modeling a new design is something I enjoy more than the rest of the team probably does.",
    weight: { introverted: 2, observant: 0, feeling: -1, prospecting: -1 },
  },
  EI: {
    key: "EI",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "A good PM brings me problems, not solutions — if the spec reads like a design doc, I question it.",
    weight: { introverted: -2, observant: -2, feeling: -2, prospecting: 1 },
  },
  EO: {
    key: "EO",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "Getting through a code owner's review without many comments feels like a personal win.",
    weight: { introverted: 1, observant: 1, feeling: 2, prospecting: -1 },
  },
  F: {
    key: "F",
    majorGroup: "personal-writing-code",
    minorGroup: "shape-commits",
    question:
      "I write commit messages with the reviewer (or future me) in mind, not just the automated tools.",
    weight: { introverted: 0, observant: 0, feeling: 1, prospecting: -1 },
  },
  F0: {
    key: "F0",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "I treat code-owner review comments the same as any other — I take the ones that hold up.",
    weight: { introverted: -1, observant: 1, feeling: -2, prospecting: 0 },
  },
  FG: {
    key: "FG",
    majorGroup: "team-planning",
    minorGroup: "talk-owner",
    question:
      "If I'm confident in my approach, I'll write the PR first and let the code owner react to real code.",
    weight: { introverted: 1, observant: -2, feeling: -2, prospecting: 2 },
  },
  Fd: {
    key: "Fd",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "Harsh words from the code owner are just signal — I don't read anything personal into them.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 1 },
  },
  Fr: {
    key: "Fr",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "Reviewing the code owner's code, I'm more careful with my wording than I'd be with a peer's.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: -1 },
  },
  H: {
    key: "H",
    majorGroup: "personal-firming-up",
    minorGroup: "explore-code",
    question:
      "I dig through git blame before I change a non-trivial line — context lives in history.",
    weight: { introverted: 1, observant: 0, feeling: 0, prospecting: -1 },
  },
  H0: {
    key: "H0",
    majorGroup: "personal-writing-code",
    minorGroup: "shape-commits",
    question:
      "A commit is a save point — I don't worry about what it looks like afterward.",
    weight: { introverted: -1, observant: -1, feeling: -1, prospecting: 2 },
  },
  HU: {
    key: "HU",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "When I hand a task off, I include the exact constraints I'd want someone to give me.",
    weight: { introverted: 2, observant: 2, feeling: 1, prospecting: -2 },
  },
  HX: {
    key: "HX",
    majorGroup: "personal-writing-code",
    minorGroup: "scope-task",
    question:
      "I feel a pull to rewrite surrounding code whenever I touch a file.",
    weight: { introverted: 0, observant: -1, feeling: 1, prospecting: 2 },
  },
  Hz: {
    key: "Hz",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "A harsh word from the code owner can throw off the rest of my week.",
    weight: { introverted: 3, observant: -1, feeling: 3, prospecting: 0 },
  },
  I: {
    key: "I",
    majorGroup: "personal-writing-code",
    minorGroup: "shape-commits",
    question:
      "Each commit should ideally do one thing, even if that means breaking up a working change.",
    weight: { introverted: 0, observant: 0, feeling: 0, prospecting: -1 },
  },
  I1: {
    key: "I1",
    majorGroup: "personal-firming-up",
    minorGroup: "handle-debt",
    question:
      "I keep a running list of tech debt I notice so I can propose a cleanup sprint later.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -3 },
  },
  K: {
    key: "K",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "I let a direct report stumble on a problem for a bit before I step in — they learn more that way.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: 2 },
  },
  KA: {
    key: "KA",
    majorGroup: "personal-writing-code",
    minorGroup: "structure-code",
    question:
      "I build from the top down — sketch the control flow first, fill in the details later.",
    weight: { introverted: 0, observant: -2, feeling: 0, prospecting: -1 },
  },
  KT: {
    key: "KT",
    majorGroup: "personal-writing-code",
    minorGroup: "write-todos",
    question:
      "When I leave a TODO, I tag it with an owner and a reason so it's easy to pick up later.",
    weight: { introverted: -1, observant: 2, feeling: 0, prospecting: -1 },
  },
  KTf: {
    key: "KTf",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "If I'd solve it differently, I'll say so in the review — the peer can push back.",
    weight: { introverted: -2, observant: -2, feeling: -2, prospecting: 0 },
  },
  Kj: {
    key: "Kj",
    majorGroup: "personal-planning",
    minorGroup: "pick-dependency",
    question:
      "Every new dependency is a long-term liability, so I default to writing the minimum I need myself.",
    weight: { introverted: 2, observant: -2, feeling: -2, prospecting: -1 },
  },
  L: {
    key: "L",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "It's fine to brush past a report's review comment that's clearly off-base — I don't owe every comment engagement.",
    weight: { introverted: -1, observant: -1, feeling: -3, prospecting: 1 },
  },
  Li: {
    key: "Li",
    majorGroup: "personal-planning",
    minorGroup: "read-docs",
    question:
      "When something surprises me about a library's behavior, my first move is to open its source.",
    weight: { introverted: 1, observant: -2, feeling: -1, prospecting: 2 },
  },
  M: {
    key: "M",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "Long async back-and-forths are usually worse than a 10-minute sync with a peer.",
    weight: { introverted: -3, observant: -1, feeling: 1, prospecting: 1 },
  },
  N: {
    key: "N",
    majorGroup: "personal-writing-code",
    minorGroup: "structure-code",
    question:
      "I build from the bottom up — small pieces first, composition later.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -1 },
  },
  N3: {
    key: "N3",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "I'd rather write three extra lines than a clever one-liner that reads like a puzzle.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -1 },
  },
  Nu: {
    key: "Nu",
    majorGroup: "personal-firming-up",
    minorGroup: "handle-debt",
    question:
      "If I touch a file with tech debt, I usually leave it a little cleaner than I found it.",
    weight: { introverted: 0, observant: 0, feeling: 1, prospecting: -2 },
  },
  O: {
    key: "O",
    majorGroup: "personal-writing-code",
    minorGroup: "scope-task",
    question:
      "I try hard to keep the first pass at a task tightly scoped, even if I see nearby improvements I could make.",
    weight: { introverted: 0, observant: 0, feeling: 0, prospecting: -2 },
  },
  OG: {
    key: "OG",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "I'll call out harsh language from the code owner directly — seniority doesn't excuse tone.",
    weight: { introverted: -3, observant: -1, feeling: -2, prospecting: 0 },
  },
  OZ: {
    key: "OZ",
    majorGroup: "personal-writing-code",
    minorGroup: "polish-code",
    question:
      "The aesthetics of code matter less than whether I could rewrite it in five minutes if wrong.",
    weight: { introverted: 0, observant: 1, feeling: -2, prospecting: 3 },
  },
  Ow: {
    key: "Ow",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "I sometimes learn more from a direct report's review than from a senior's, because they see things fresh.",
    weight: { introverted: -3, observant: 0, feeling: 1, prospecting: 1 },
  },
  P: {
    key: "P",
    majorGroup: "personal-writing-code",
    minorGroup: "shape-commits",
    question:
      "A bisect-friendly history is worth the extra work of shaping commits carefully.",
    weight: { introverted: 1, observant: 2, feeling: 0, prospecting: -2 },
  },
  PJ: {
    key: "PJ",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "I set clear expectations about tone with direct reports — harshness in either direction isn't acceptable.",
    weight: { introverted: -2, observant: 1, feeling: -1, prospecting: -1 },
  },
  PK: {
    key: "PK",
    majorGroup: "team-emotional",
    minorGroup: "sit-peer",
    question:
      "After a tough exchange with a peer, I'll step away from the keyboard before I respond.",
    weight: { introverted: 2, observant: -1, feeling: 2, prospecting: 0 },
  },
  Pk: {
    key: "Pk",
    majorGroup: "personal-planning",
    minorGroup: "pick-dependency",
    question:
      "External dependencies are usually tested by more people than my own code, which is a reason to prefer them.",
    weight: { introverted: -1, observant: 1, feeling: -1, prospecting: 0 },
  },
  Pm: {
    key: "Pm",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "I'll skip tests on code I expect to throw away — writing them is only worth it once the shape is stable.",
    weight: { introverted: 0, observant: -1, feeling: -1, prospecting: 2 },
  },
  Q: {
    key: "Q",
    majorGroup: "personal-planning",
    minorGroup: "plan-work",
    question:
      "I often start coding before I have a clear plan, and let the plan emerge from the code.",
    weight: { introverted: -1, observant: -1, feeling: 0, prospecting: 3 },
  },
  Q0: {
    key: "Q0",
    majorGroup: "personal-planning",
    minorGroup: "read-docs",
    question:
      "I'd rather spend an hour reading a library's source than risk misunderstanding its docs.",
    weight: { introverted: 2, observant: -2, feeling: -1, prospecting: 2 },
  },
  Q0r: {
    key: "Q0r",
    majorGroup: "personal-firming-up",
    minorGroup: "explore-code",
    question:
      "Scoping my attention to the immediate change keeps me shipping — I can't afford to explore on the clock.",
    weight: { introverted: 1, observant: 2, feeling: 0, prospecting: 1 },
  },
  QQ: {
    key: "QQ",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "A vague PM task is a red flag — I'd rather delay kickoff than build on unclear requirements.",
    weight: { introverted: 0, observant: -1, feeling: -2, prospecting: -1 },
  },
  Qm: {
    key: "Qm",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "Even when I'm confident in my plan, talking it through with a peer usually sharpens it.",
    weight: { introverted: -2, observant: -1, feeling: 1, prospecting: 1 },
  },
  Qs: {
    key: "Qs",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "When the code owner asks me to change something, I usually do it even if I disagree.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: 0 },
  },
  R: {
    key: "R",
    majorGroup: "personal-firming-up",
    minorGroup: "explore-code",
    question:
      "Before I write a new helper, I grep the codebase to check whether something similar already exists.",
    weight: { introverted: 1, observant: 0, feeling: 0, prospecting: -2 },
  },
  RP: {
    key: "RP",
    majorGroup: "personal-writing-code",
    minorGroup: "structure-code",
    question:
      "A diagram or sketch of the module layout saves me hours once I start typing.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -1 },
  },
  RP0: {
    key: "RP0",
    majorGroup: "personal-writing-code",
    minorGroup: "write-comments",
    question:
      "I write comments sparingly — most of what I'd say is already in the code.",
    weight: { introverted: 0, observant: 1, feeling: -3, prospecting: 0 },
  },
  S: {
    key: "S",
    majorGroup: "team-emotional",
    minorGroup: "sit-peer",
    question:
      "If a peer is harsh with me, I'd rather talk it out directly than sit with the feeling.",
    weight: { introverted: -3, observant: -1, feeling: 1, prospecting: 0 },
  },
  S6: {
    key: "S6",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "When a direct report is harsh with me, it's especially hard because I feel responsible for their experience too.",
    weight: { introverted: 1, observant: -1, feeling: 3, prospecting: 0 },
  },
  Sp: {
    key: "Sp",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "I ask the code owner follow-up questions when their review comments aren't clear — I'd rather not guess.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: -1 },
  },
  T: {
    key: "T",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "Reviewing a direct report's code is partly teaching — I explain *why*, not just *what*.",
    weight: { introverted: -2, observant: 0, feeling: 2, prospecting: -1 },
  },
  Tp: {
    key: "Tp",
    majorGroup: "personal-planning",
    minorGroup: "read-docs",
    question:
      "The best way to learn a library is to spend time in its tests and examples, not its README.",
    weight: { introverted: 1, observant: -1, feeling: 0, prospecting: 2 },
  },
  U: {
    key: "U",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "I'd rather send a peer a written doc than schedule a call — they can respond when they're free.",
    weight: { introverted: 3, observant: 1, feeling: -2, prospecting: -1 },
  },
  V: {
    key: "V",
    majorGroup: "personal-writing-code",
    minorGroup: "name-variables",
    question:
      "A variable name should encode enough context that I don't need to scroll to understand it.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -1 },
  },
  Ve: {
    key: "Ve",
    majorGroup: "personal-planning",
    minorGroup: "plan-work",
    question:
      "Once I commit to a plan, I stick to it unless there's a strong reason to deviate.",
    weight: { introverted: 0, observant: 1, feeling: -1, prospecting: -3 },
  },
  Vs: {
    key: "Vs",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      'I explain my reasoning when I push back on a report\'s review, not just "no" — they need the context.',
    weight: { introverted: -2, observant: 1, feeling: 1, prospecting: -1 },
  },
  Vv: {
    key: "Vv",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "I ship as soon as the happy path works — edge cases can be fixed in follow-ups.",
    weight: { introverted: 0, observant: -1, feeling: -1, prospecting: 3 },
  },
  W: {
    key: "W",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "It takes effort for me not to be subtly dismissive when a direct report reviews my code.",
    weight: { introverted: -1, observant: -1, feeling: 1, prospecting: 0 },
  },
  X: {
    key: "X",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "If a block of code has more than a few ideas in it, I pull helpers out until each reads like prose.",
    weight: { introverted: 0, observant: 1, feeling: 0, prospecting: -1 },
  },
  Xv: {
    key: "Xv",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "If a peer's review comment is clearly wrong, I'll skip it and move on.",
    weight: { introverted: 1, observant: -2, feeling: -2, prospecting: 2 },
  },
  Y: {
    key: "Y",
    majorGroup: "personal-planning",
    minorGroup: "plan-work",
    question:
      "I estimate my tasks before starting, even if just roughly, so I know when I'm off track.",
    weight: { introverted: 1, observant: 1, feeling: -1, prospecting: -2 },
  },
  Y1: {
    key: "Y1",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "I argue back hard against the code owner when I'm confident — being junior isn't a reason to fold.",
    weight: { introverted: -3, observant: -2, feeling: -2, prospecting: 0 },
  },
  Z: {
    key: "Z",
    majorGroup: "personal-writing-code",
    minorGroup: "polish-code",
    question:
      "Fighting ugly code drains time I could be spending on real problems.",
    weight: { introverted: 0, observant: 1, feeling: -3, prospecting: 2 },
  },
  ZW: {
    key: "ZW",
    majorGroup: "personal-writing-code",
    minorGroup: "write-comments",
    question:
      "A comment citing a ticket, incident, or link gives a reader a way to recover context I can't include.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -1 },
  },
  b: {
    key: "b",
    majorGroup: "team-emotional",
    minorGroup: "sit-peer",
    question:
      "A peer's harsh words mostly don't land — I can separate the content from the tone.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 0 },
  },
  b6: {
    key: "b6",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "I remind myself that a direct report being harsh is probably a symptom of something else I should learn about.",
    weight: { introverted: 1, observant: -1, feeling: 3, prospecting: 0 },
  },
  b9: {
    key: "b9",
    majorGroup: "personal-planning",
    minorGroup: "plan-work",
    question:
      "I write down milestones for longer tasks so I can tell when I'm behind.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -2 },
  },
  bY: {
    key: "bY",
    majorGroup: "personal-writing-code",
    minorGroup: "write-todos",
    question:
      "A TODO that stays in the code for six months is a failure — I'd rather handle it or delete it.",
    weight: { introverted: 0, observant: 1, feeling: 0, prospecting: -3 },
  },
  bc: {
    key: "bc",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "I address every peer review comment, even the ones I disagree with — they deserve a response.",
    weight: { introverted: -2, observant: 1, feeling: 1, prospecting: -3 },
  },
  c: {
    key: "c",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "I time my feedback on a report's PR carefully — too much at once is overwhelming.",
    weight: { introverted: 1, observant: -1, feeling: 2, prospecting: 0 },
  },
  c3: {
    key: "c3",
    majorGroup: "personal-writing-code",
    minorGroup: "name-variables",
    question:
      "I rename variables repeatedly during review, trying to find the clearest phrasing.",
    weight: { introverted: 1, observant: 0, feeling: 0, prospecting: -1 },
  },
  cC: {
    key: "cC",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "I read my code back after writing it, pretending I've never seen it before.",
    weight: { introverted: 1, observant: 1, feeling: -1, prospecting: -1 },
  },
  cg: {
    key: "cg",
    majorGroup: "personal-writing-code",
    minorGroup: "shape-commits",
    question:
      "I rewrite my commits before opening a PR so the history reads cleanly from start to finish.",
    weight: { introverted: 2, observant: 1, feeling: 1, prospecting: -3 },
  },
  d: {
    key: "d",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "I ask the code owner for their rationale when something looks off — they often know something I don't.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: -1 },
  },
  d5: {
    key: "d5",
    majorGroup: "team-emotional",
    minorGroup: "sit-peer",
    question:
      "I assume peers are just having a rough day when they're sharp with me.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: 0 },
  },
  dC: {
    key: "dC",
    majorGroup: "personal-writing-code",
    minorGroup: "polish-code",
    question:
      "I notice the small aesthetic choices in other people's code and borrow what I like.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: 1 },
  },
  dE: {
    key: "dE",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "When a direct report finds a bug in my code, I make a point of thanking them visibly.",
    weight: { introverted: -2, observant: -1, feeling: 2, prospecting: 0 },
  },
  dQ: {
    key: "dQ",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "Readability is mostly about matching the reader's expectations for the language and framework.",
    weight: { introverted: 1, observant: 2, feeling: -2, prospecting: 0 },
  },
  du: {
    key: "du",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "Dense, idiomatic code is more readable to me than verbose step-by-step code.",
    weight: { introverted: 0, observant: -2, feeling: -2, prospecting: 0 },
  },
  e: {
    key: "e",
    majorGroup: "personal-firming-up",
    minorGroup: "handle-debt",
    question:
      "Tech debt is just work that hasn't been prioritized yet — there's no moral weight to it.",
    weight: { introverted: 0, observant: 1, feeling: -3, prospecting: 1 },
  },
  ek: {
    key: "ek",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "I think through the worst-case misuse of every new endpoint before shipping it.",
    weight: { introverted: 1, observant: 1, feeling: -2, prospecting: -2 },
  },
  f: {
    key: "f",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "I catch myself shipping a little later than I should, trying to get one more thing right.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -2 },
  },
  fH: {
    key: "fH",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      'It helps a report more to hear "here\'s what I\'d do" than "figure it out yourself."',
    weight: { introverted: -2, observant: 1, feeling: 1, prospecting: -1 },
  },
  fO: {
    key: "fO",
    majorGroup: "team-planning",
    minorGroup: "talk-owner",
    question:
      "If the code owner's design is wrong, I'll say so — ownership doesn't make them right.",
    weight: { introverted: -2, observant: -1, feeling: -2, prospecting: 0 },
  },
  ft: {
    key: "ft",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "I'll DM a report with tougher feedback rather than put it in the public review thread.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: 0 },
  },
  fu: {
    key: "fu",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "The code owner's code deserves the same scrutiny as anyone else's — probably more.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: -1 },
  },
  g: {
    key: "g",
    majorGroup: "personal-planning",
    minorGroup: "break-project",
    question:
      "If a task won't fit in my head all at once, I stop and decompose it before writing any code.",
    weight: { introverted: 1, observant: 1, feeling: 0, prospecting: -2 },
  },
  gN: {
    key: "gN",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "A task is done when I've convinced myself, not when some checklist says so.",
    weight: { introverted: 1, observant: -2, feeling: 1, prospecting: 2 },
  },
  gl: {
    key: "gl",
    majorGroup: "personal-writing-code",
    minorGroup: "make-readable",
    question:
      "Code that reads the way I'd describe the problem out loud feels most right.",
    weight: { introverted: 0, observant: -1, feeling: 0, prospecting: 0 },
  },
  gs: {
    key: "gs",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "A direct report catching something I missed is a sign the review process is working.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: 0 },
  },
  h: {
    key: "h",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "I surface trade-offs and risks to the PM early, even when they're outside what I was asked about.",
    weight: { introverted: -2, observant: 1, feeling: 1, prospecting: -1 },
  },
  hW: {
    key: "hW",
    majorGroup: "personal-planning",
    minorGroup: "break-project",
    question:
      "I keep a written list of subtasks open while I work, and I cross them off as I go.",
    weight: { introverted: 1, observant: 2, feeling: 0, prospecting: -2 },
  },
  hw: {
    key: "hw",
    majorGroup: "personal-planning",
    minorGroup: "plan-work",
    question:
      "A rough written plan saves me from false starts I'd otherwise make.",
    weight: { introverted: 1, observant: -1, feeling: 0, prospecting: -1 },
  },
  i: {
    key: "i",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "Pairing with a peer for the first hour of a task makes the whole task smoother.",
    weight: { introverted: -3, observant: -1, feeling: 1, prospecting: 0 },
  },
  iD: {
    key: "iD",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "Shipping is the hardest part — once I'm close, I push to close the task rather than extend it.",
    weight: { introverted: -2, observant: 1, feeling: -1, prospecting: 1 },
  },
  iL: {
    key: "iL",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "A rough peer review leaves me a little deflated, even when I know the feedback is right.",
    weight: { introverted: 2, observant: -1, feeling: 2, prospecting: 0 },
  },
  j: {
    key: "j",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "Integration tests that hit real systems are worth more than fifty unit tests.",
    weight: { introverted: 0, observant: -1, feeling: 0, prospecting: 2 },
  },
  j9: {
    key: "j9",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "I pick my battles in peer reviews — pointing out every small thing strains the relationship.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: 1 },
  },
  jK: {
    key: "jK",
    majorGroup: "personal-writing-code",
    minorGroup: "scope-task",
    question:
      "If I can fix a small nearby bug in the same PR, I do — splitting it feels like pointless overhead.",
    weight: { introverted: 0, observant: -1, feeling: 1, prospecting: 3 },
  },
  jc: {
    key: "jc",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "I'd rather take a peer's review nit than argue about it — the code is rarely the hill to die on.",
    weight: { introverted: -1, observant: -1, feeling: 1, prospecting: 1 },
  },
  jv: {
    key: "jv",
    majorGroup: "personal-planning",
    minorGroup: "pick-dependency",
    question:
      "A dependency that hasn't had a release in a year worries me more than one that keeps shipping.",
    weight: { introverted: 1, observant: 2, feeling: -1, prospecting: -1 },
  },
  k: {
    key: "k",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "I have a clear \"done\" definition in mind, and I don't ship until I've hit it.",
    weight: { introverted: 1, observant: 2, feeling: 0, prospecting: -3 },
  },
  kP: {
    key: "kP",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "Harsh peer review comments are a gift — I'd rather get them now than in production.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 0 },
  },
  kt: {
    key: "kt",
    majorGroup: "personal-writing-code",
    minorGroup: "name-variables",
    question:
      "Names are always lossy compared to the code — I don't over-invest in them.",
    weight: { introverted: 0, observant: -2, feeling: -2, prospecting: 2 },
  },
  l: {
    key: "l",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "I push back hard on deadlines that seem arbitrary, even when it's awkward.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 0 },
  },
  l2: {
    key: "l2",
    majorGroup: "personal-writing-code",
    minorGroup: "write-comments",
    question:
      "Comments that explain a non-obvious invariant or assumption are essential — the code can't say it alone.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: 0 },
  },
  lY: {
    key: "lY",
    majorGroup: "personal-writing-code",
    minorGroup: "name-variables",
    question:
      "If a variable's name needs a comment to explain it, the name is too short.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: -1 },
  },
  m: {
    key: "m",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "When a report is harsh, I have to be careful not to use authority to shut down the conversation.",
    weight: { introverted: 2, observant: -1, feeling: 1, prospecting: 0 },
  },
  mD: {
    key: "mD",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "I usually write the code first and figure out how to test it afterward.",
    weight: { introverted: 0, observant: 1, feeling: 0, prospecting: 2 },
  },
  mN: {
    key: "mN",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question: "Reviewing a peer's code teaches me as much as writing my own.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: 1 },
  },
  me: {
    key: "me",
    majorGroup: "personal-writing-code",
    minorGroup: "write-todos",
    question:
      "If I can finish the edge case now, I'd rather do it than leave a TODO that might sit for months.",
    weight: { introverted: 0, observant: 0, feeling: 0, prospecting: -2 },
  },
  n: {
    key: "n",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "When a direct report reviews my code, I take their feedback seriously — no defensiveness.",
    weight: { introverted: -1, observant: 0, feeling: 2, prospecting: 0 },
  },
  nD: {
    key: "nD",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "Designing for testability can make the code worse when no one actually writes the tests.",
    weight: { introverted: 0, observant: 1, feeling: 1, prospecting: 2 },
  },
  nk: {
    key: "nk",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "I reread the code owner's change a second time before commenting — I want to be sure.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -1 },
  },
  np: {
    key: "np",
    majorGroup: "personal-writing-code",
    minorGroup: "write-todos",
    question:
      "I reach for TODOs freely — most of them earn their keep eventually.",
    weight: { introverted: -1, observant: -1, feeling: 0, prospecting: 2 },
  },
  o: {
    key: "o",
    majorGroup: "personal-firming-up",
    minorGroup: "explore-code",
    question:
      "I love wandering the codebase — there's always something useful I wasn't looking for.",
    weight: { introverted: 1, observant: -2, feeling: 0, prospecting: 3 },
  },
  oL: {
    key: "oL",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "I ship peer reviews quickly, even if that means missing things — blocking someone's work has a real cost.",
    weight: { introverted: -2, observant: -1, feeling: 1, prospecting: 2 },
  },
  od: {
    key: "od",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "When the PM's spec is underspecified, I make the call I think is right and flag it after.",
    weight: { introverted: 1, observant: -2, feeling: -2, prospecting: 3 },
  },
  p: {
    key: "p",
    majorGroup: "team-planning",
    minorGroup: "talk-peer",
    question:
      "I think best out loud — a whiteboard session with a peer unblocks me faster than any deep-work hour.",
    weight: { introverted: -3, observant: -1, feeling: 1, prospecting: 1 },
  },
  pF: {
    key: "pF",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "I tell peers when their review helped — review is lonely work without the signal.",
    weight: { introverted: -2, observant: -1, feeling: 2, prospecting: 0 },
  },
  pQ: {
    key: "pQ",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "My reports know they can bring me half-baked ideas — I treat early thinking as a feature, not a flaw.",
    weight: { introverted: -2, observant: -2, feeling: 1, prospecting: 3 },
  },
  pR: {
    key: "pR",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "Knowing when to stop is harder for me than knowing what to do next.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: 0 },
  },
  q: {
    key: "q",
    majorGroup: "personal-writing-code",
    minorGroup: "write-comments",
    question:
      "Every public function deserves a short docstring, no matter how obvious it looks.",
    weight: { introverted: 1, observant: 2, feeling: 1, prospecting: -2 },
  },
  qG: {
    key: "qG",
    majorGroup: "personal-writing-code",
    minorGroup: "name-variables",
    question:
      "For a short-lived local variable, a one-letter name is often clearer than a long one.",
    weight: { introverted: 0, observant: 1, feeling: -3, prospecting: 0 },
  },
  qy: {
    key: "qy",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "I consciously shape my code so that it's easy to test, even before I write any tests.",
    weight: { introverted: 1, observant: -1, feeling: -2, prospecting: -2 },
  },
  r: {
    key: "r",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "When the code owner reviews my code, I give their comments extra weight because of the context they hold.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: -1 },
  },
  rG: {
    key: "rG",
    majorGroup: "personal-writing-code",
    minorGroup: "structure-code",
    question:
      "Before I write a feature, I usually know which files and modules it will live in.",
    weight: { introverted: 1, observant: 0, feeling: 0, prospecting: -2 },
  },
  rT: {
    key: "rT",
    majorGroup: "team-code-review",
    minorGroup: "take-peer",
    question:
      "I reread my own PR after a peer review, trying to see it through their eyes.",
    weight: { introverted: 2, observant: 1, feeling: 1, prospecting: -1 },
  },
  rTD: {
    key: "rTD",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "I try to lead my peer reviews with what's working before pointing out what isn't.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: 0 },
  },
  rt: {
    key: "rt",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "If a direct report has thought something through, I lean toward approving unless it's clearly wrong.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: 2 },
  },
  s: {
    key: "s",
    majorGroup: "team-planning",
    minorGroup: "talk-owner",
    question:
      "The code owner has context I don't, so I lean toward their preferences when we disagree.",
    weight: { introverted: -1, observant: 1, feeling: 1, prospecting: -1 },
  },
  sj: {
    key: "sj",
    majorGroup: "personal-planning",
    minorGroup: "read-docs",
    question:
      "I trust a library's public docs enough that I rarely dig into its source before using it.",
    weight: { introverted: 0, observant: 3, feeling: -1, prospecting: 0 },
  },
  t: {
    key: "t",
    majorGroup: "personal-firming-up",
    minorGroup: "handle-debt",
    question:
      "Some debt is strategic — I leave it in place when replacing it would be premature.",
    weight: { introverted: 1, observant: 1, feeling: -1, prospecting: 1 },
  },
  t2: {
    key: "t2",
    majorGroup: "team-planning",
    minorGroup: "talk-owner",
    question:
      "I ask the code owner for their preferred shape of the change before writing a line.",
    weight: { introverted: -1, observant: 2, feeling: 1, prospecting: -3 },
  },
  tY: {
    key: "tY",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "A small security oversight is the kind of mistake I'd lose sleep over.",
    weight: { introverted: 1, observant: 0, feeling: -1, prospecting: 0 },
  },
  tb: {
    key: "tb",
    majorGroup: "personal-writing-code",
    minorGroup: "scope-task",
    question:
      "A task grows as I learn about it — pretending the scope is fixed is self-deception.",
    weight: { introverted: -1, observant: -2, feeling: 0, prospecting: 3 },
  },
  u: {
    key: "u",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "Nitpicks matter — a review that catches only the big issues misses half the point.",
    weight: { introverted: -1, observant: 2, feeling: -1, prospecting: -1 },
  },
  uO: {
    key: "uO",
    majorGroup: "team-code-review",
    minorGroup: "review-owner",
    question:
      "Reviewing the code owner is uncomfortable — I'd rather approve than risk getting it wrong.",
    weight: { introverted: 1, observant: 1, feeling: 2, prospecting: 1 },
  },
  v: {
    key: "v",
    majorGroup: "team-emotional",
    minorGroup: "sit-owner",
    question:
      "I tend to assume the code owner's harsh words reflect a real problem I should address.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -1 },
  },
  vO: {
    key: "vO",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "A report's harsh moment doesn't bother me much — the power differential softens its sting.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 1 },
  },
  vR: {
    key: "vR",
    majorGroup: "personal-writing-code",
    minorGroup: "polish-code",
    question:
      "I'll spend extra time getting the code to feel right, even when the reviewers wouldn't catch the difference.",
    weight: { introverted: 1, observant: -1, feeling: 2, prospecting: -1 },
  },
  vc: {
    key: "vc",
    majorGroup: "personal-planning",
    minorGroup: "break-project",
    question:
      "I think about a new task as a shape in my head, not as a checklist of steps.",
    weight: { introverted: 0, observant: -2, feeling: 0, prospecting: 2 },
  },
  vd: {
    key: "vd",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "I check in with my reports often — I'd rather over-communicate than let them feel lost.",
    weight: { introverted: -3, observant: 1, feeling: 3, prospecting: -1 },
  },
  vk: {
    key: "vk",
    majorGroup: "personal-planning",
    minorGroup: "pick-dependency",
    question:
      "When I pick between libraries, I lean on what's popular in the community over what looks best on paper.",
    weight: { introverted: -2, observant: 3, feeling: 1, prospecting: 1 },
  },
  vz: {
    key: "vz",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "I double-check input handling any time user data crosses a trust boundary.",
    weight: { introverted: 1, observant: 1, feeling: -2, prospecting: -1 },
  },
  w: {
    key: "w",
    majorGroup: "personal-firming-up",
    minorGroup: "explore-code",
    question:
      "I'll spend extra time reading related code just to make sure my change fits the existing patterns.",
    weight: { introverted: 1, observant: 0, feeling: 1, prospecting: -1 },
  },
  wU: {
    key: "wU",
    majorGroup: "team-code-review",
    minorGroup: "take-report",
    question:
      "Direct reports often miss context I have, so I weigh their review comments against that gap.",
    weight: { introverted: 1, observant: 1, feeling: -2, prospecting: 0 },
  },
  wX: {
    key: "wX",
    majorGroup: "team-code-review",
    minorGroup: "take-owner",
    question:
      "A code owner's comment sits with me longer than the same comment from a peer.",
    weight: { introverted: 2, observant: -1, feeling: 2, prospecting: 0 },
  },
  x: {
    key: "x",
    majorGroup: "team-emotional",
    minorGroup: "sit-report",
    question:
      "I can address harsh words from a direct report as a work issue, without letting it sit with me.",
    weight: { introverted: -2, observant: 1, feeling: -2, prospecting: 0 },
  },
  xG: {
    key: "xG",
    majorGroup: "personal-firming-up",
    minorGroup: "think-security",
    question:
      "Security is mostly a specialist's concern — I rely on the framework and our infra to handle it.",
    weight: { introverted: 0, observant: 2, feeling: -1, prospecting: 2 },
  },
  xX: {
    key: "xX",
    majorGroup: "team-emotional",
    minorGroup: "sit-peer",
    question:
      "When a peer says something harsh, I replay it in my head for a while afterward.",
    weight: { introverted: 2, observant: -1, feeling: 3, prospecting: 0 },
  },
  xe: {
    key: "xe",
    majorGroup: "personal-firming-up",
    minorGroup: "design-testable",
    question:
      "Tests I write while designing catch bugs I wouldn't have spotted just by reading the code.",
    weight: { introverted: 1, observant: 2, feeling: 0, prospecting: -2 },
  },
  y: {
    key: "y",
    majorGroup: "team-planning",
    minorGroup: "talk-pm",
    question:
      "Giving the PM a ranged estimate instead of a point estimate helps us both.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -1 },
  },
  yG: {
    key: "yG",
    majorGroup: "team-planning",
    minorGroup: "talk-report",
    question:
      "Part of my job with reports is helping them grow, not just getting tasks done.",
    weight: { introverted: -2, observant: 0, feeling: 0, prospecting: 0 },
  },
  yh: {
    key: "yh",
    majorGroup: "personal-firming-up",
    minorGroup: "handle-debt",
    question:
      "Ignoring tech debt feels like ignoring a slow leak — eventually it ruins the whole room.",
    weight: { introverted: 1, observant: -1, feeling: 1, prospecting: -1 },
  },
  z: {
    key: "z",
    majorGroup: "personal-firming-up",
    minorGroup: "stop-task",
    question:
      "Once the code meets the requirement, I move on — further polish is usually invisible.",
    weight: { introverted: 0, observant: 1, feeling: -1, prospecting: 2 },
  },
  zW: {
    key: "zW",
    majorGroup: "team-code-review",
    minorGroup: "review-report",
    question:
      "I try to let a direct report's style choices stand, even when they're not what I'd do.",
    weight: { introverted: -1, observant: -1, feeling: 1, prospecting: 1 },
  },
  zg: {
    key: "zg",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "I take my time on peer reviews — a rushed review is worse than no review.",
    weight: { introverted: 1, observant: 1, feeling: 1, prospecting: -2 },
  },
  zw: {
    key: "zw",
    majorGroup: "team-code-review",
    minorGroup: "review-peer",
    question:
      "I write my review comments as questions, not demands, unless I'm certain.",
    weight: { introverted: 1, observant: 0, feeling: 2, prospecting: 0 },
  },
} satisfies { [key: string]: Question }
