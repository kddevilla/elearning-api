export const hello = {
  type: "object",
  properties: {
    name: { type: 'string' }
  },
  required: ['name']
} as const;