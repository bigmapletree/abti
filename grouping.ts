const grouping = {
  "personal-planning": {
    label: "Personal: Planning",
    index: 1,
    minor: {
      "break-project": {
        minorIndex: 1,
        label: "Breaking down the project",
      },
      "pick-dependency": {
        minorIndex: 2,
        label:
          "Reaching for an external dependency vs. rolling a homegrown helper",
      },
      "read-docs": {
        minorIndex: 3,
        label: "Reading the docs vs. reading the implementation",
      },
      "plan-work": {
        minorIndex: 4,
        label: "Planning the coding work",
      },
    },
  },
  "personal-writing-code": {
    label: "Personal: Writing Code",
    index: 2,
    minor: {
      "scope-task": {
        minorIndex: 5,
        label: "Scoping a task",
      },
      "structure-code": {
        minorIndex: 6,
        label: "Structuring the code",
      },
      "shape-commits": {
        minorIndex: 7,
        label: "Shaping the commit history",
      },
      "write-todos": {
        minorIndex: 8,
        label: "Writing TODOs vs. writing implementation",
      },
      "polish-code": {
        minorIndex: 9,
        label: "Taste for clean code",
      },
      "make-readable": {
        minorIndex: 10,
        label: "Sense of readability",
      },
      "name-variables": {
        minorIndex: 11,
        label: "Short variable names vs. fully self-describing ones",
      },
      "write-comments": {
        minorIndex: 12,
        label: "Stance on code comments",
      },
    },
  },
  "personal-firming-up": {
    label: "Personal: Firming Up",
    index: 3,
    minor: {
      "design-testable": {
        minorIndex: 13,
        label: "Designing for testability",
      },
      "think-security": {
        minorIndex: 14,
        label: "Thinking about security",
      },
      "handle-debt": {
        minorIndex: 15,
        label: "Dealing with tech debt",
      },
      "explore-code": {
        minorIndex: 16,
        label: "Digging around the codebase for related code",
      },
      "stop-task": {
        minorIndex: 17,
        label: "Calling a task done enough to stop",
      },
    },
  },
  "team-planning": {
    label: "Team-work: Planning",
    index: 4,
    minor: {
      "talk-peer": {
        minorIndex: 18,
        label: "Talking with peers",
      },
      "talk-owner": {
        minorIndex: 19,
        label: "Talking with the code owner",
      },
      "talk-report": {
        minorIndex: 20,
        label: "Talking with direct reports",
      },
      "talk-pm": {
        minorIndex: 21,
        label: "Talking with the PM handing off the tasks",
      },
    },
  },
  "team-code-review": {
    label: "Team-work: Code Review",
    index: 5,
    minor: {
      "review-peer": {
        minorIndex: 22,
        label: "Reviewing a peer's code",
      },
      "review-owner": {
        minorIndex: 23,
        label: "Reviewing the code owner's code",
      },
      "review-report": {
        minorIndex: 24,
        label: "Reviewing a direct report's code",
      },
      "take-peer": {
        minorIndex: 25,
        label: "Taking a peer's review feedback",
      },
      "take-owner": {
        minorIndex: 26,
        label: "Taking the code owner's review feedback",
      },
      "take-report": {
        minorIndex: 27,
        label: "Taking a direct report's review feedback",
      },
    },
  },
  "team-emotional": {
    label: "Team-work: Emotional",
    index: 6,
    minor: {
      "sit-peer": {
        minorIndex: 28,
        label: "Sitting with a peer's harsh words",
      },
      "sit-owner": {
        minorIndex: 29,
        label: "Sitting with the code owner's harsh words",
      },
      "sit-report": {
        minorIndex: 30,
        label: "Sitting with a direct report's harsh words",
      },
    },
  },
}

export default grouping
