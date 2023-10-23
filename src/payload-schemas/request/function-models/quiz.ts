export const getQuizItemsBySubject = {
  type: "object",
  properties: {
    subject: { type: 'string' }
  },
  required: ['subject']
} as const;

export const getScoreScaleEquivalent = {
  type: "object",
  properties: {
    score: { type: 'number' }
  },
  required: ['subject']
} as const;