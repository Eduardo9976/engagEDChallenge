import type { MODES } from '#constants'

export type Mode = typeof MODES[keyof typeof MODES]
