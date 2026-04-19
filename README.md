# ABTI

Agent Bias Type Indicator - the personality type test for hard-working (agent)
coders.

## Compare to MBTI

People act differently in life and at work, and MBTI mostly picks up the
lifestyle side. Even on a work-framed test, it's tempting to answer the way you
_wish_ you worked rather than how you actually work. ABTI drops the lifestyle
questions and sticks to concrete day-to-day coding choices, which keeps the
profile honest about real behavior on a coding project. ABTI test will make it
easier to figure out how to collaborate with your coworkers better.

We keep the test result align with MBTI, which gives user a more directive
impression about the result without teaching a new criteria.

## Test objectives and matrix

The axes split into two halves. The **personal** groups cover the calls a coder
makes alone at the keyboard, before anyone else sees the work. The **team-work**
groups cover the calls that surface once the work meets other humans.

The questionnaire has xxx questions across different groups. Each bullet below
names one axis the test probes:

- personal: planning the project coding task
  - breaking down the project
  - reaching for an external dependency vs. rolling a homegrown helper
  - reading the docs vs. reading the implementation
  - planning the coding work
- personal: writing the code
  - scoping a task
  - structuring the code
  - shaping the commit history
  - writing TODOs vs. writing implementation
  - taste for clean code
  - sense of readability
  - short variable names vs. fully self-describing ones
  - stance on code comments
- personal: firming up the code
  - designing for testability
  - thinking about security
  - dealing with tech debt
  - digging around the codebase for related code
  - calling a task done enough to stop
- team-work: planning
  - talking with peers
  - talking with the code owner
  - talking with direct reports
  - talking with the PM handing off the tasks
- team-work: code review
  - reviewing a peer's code
  - reviewing the code owner's code
  - reviewing a direct report's code
  - taking a peer's review feedback
  - taking the code owner's review feedback
  - taking a direct report's review feedback
- team-work: emotional
  - sitting with a peer's harsh words
  - sitting with the code owner's harsh words
  - sitting with a direct report's harsh words

## Steps to generate the questionnaire

Here's the pipeline we ran to turn a blank page into a weighted question set:

1. Hand-pick 6 focus areas and 30 groups
2. Have the agent draft 10 questions per group, for 300 total
3. Shuffle the questions
4. Have the agent prune near-duplicates in 3 passes, trimming down to 168
5. Manually added some hand-made questions
6. Have the agent assign a weight to each question
7. Have the agent rebalance the weights so the positives add up to 100 and the
   negatives add up to -100
8. In the UI, manually rescale the score from [-300, +300] down to [-50, +50]
   (divide by 6)

## Build your own personality test

Want to spin up your own flavor of this test? Here's the short version:

1. Fork the repo
2. Follow the steps above to generate your questionnaire
3. Run `pnpm install && pnpm build` to produce the page and prompt
4. Serve the page from any static site server, e.g. `npx serve .`

## Acknowledgements

Majority of the work was done by Opus (4.7), including the Analytical Psychology
framing, the question wording, and the README prose.

Nagi at Mapletree Inc. did the initial scaffolding to get the project off the
ground.
