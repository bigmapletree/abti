import type grouping from "./grouping.js"

/**
 * Represents a personality test question with scoring weights
 * for each MBTI dimension.
 */
export type Question = {
  [K in keyof typeof grouping]: {
    /**
     * The high-level phase of coding work this question probes.
     *
     * Keys come from `grouping.ts`, the single source of truth for the
     * group taxonomy.
     *
     * Used to sort the questions in the questionnaire.
     *
     * See the "Test objectives and matrix" section in README.md.
     */
    majorGroup: K
    /**
     * The specific axis within the major group that this question probes.
     * Keys come from the `minor` map of `grouping[majorGroup]`.
     *
     * Used to sort the questions in the questionnaire.
     */
    minorGroup: keyof (typeof grouping)[K]["minor"]
  }
}[keyof typeof grouping] & {
  /**
   * Unique identifier for the question.
   * Used to match questions with their corresponding answers.
   */
  key: string

  /**
   * The question text displayed to the user.
   * Should be a clear, concise statement that the user can agree or disagree with.
   */
  question: string

  /**
   * Scoring weights indicating how agreement shifts each MBTI dimension.
   * Each weight determines how strongly a positive answer
   * pushes the result toward one end of the dimension.
   */
  weight: {
    /**
     * Weight toward Introverted (positive) vs. Extraverted (negative).
     *
     * - positive — agreeing indicates introversion.
     * - negative — agreeing indicates extraversion.
     * - zero — this question does not move this dimension.
     */
    introverted: number

    /**
     * Weight toward Observant (positive) vs. Intuitive (negative).
     *
     * - positive — agreeing indicates observance.
     * - negative — agreeing indicates intuition.
     * - zero — this question does not move this dimension.
     */
    observant: number

    /**
     * Weight toward Feeling (positive) vs. Thinking (negative).
     *
     * - positive — agreeing indicates feeling.
     * - negative — agreeing indicates thinking.
     * - zero — this question does not move this dimension.
     */
    feeling: number

    /**
     * Weight toward Prospecting (positive) vs. Judging (negative).
     *
     * - positive — agreeing indicates prospecting.
     * - negative — agreeing indicates judging.
     * - zero — this question does not move this dimension.
     */
    prospecting: number
  }
}

/**
 * Represents a user's answer to a specific question.
 * Pairs a question key with a selected score on the Likert scale.
 */
export type Answer = {
  /**
   * The key of the question being answered.
   * Must correspond to a valid Question key.
   */
  key: string

  /**
   * The selected answer on a 7-point Likert scale.
   *
   * - `"+3"` — strongly agree.
   * - `"+2"` — agree.
   * - `"+1"` — slightly agree.
   * - `"0"` — neutral / no opinion.
   * - `"-1"` — slightly disagree.
   * - `"-2"` — disagree.
   * - `"-3"` — strongly disagree.
   */
  answer: "+3" | "+2" | "+1" | "0" | "-1" | "-2" | "-3"
}
