import { definePreset } from '@primeng/themes'
import Aura from '@primeng/themes/aura'
import { Preset } from '@primeuix/themes/types'
import { AuraBaseDesignTokens } from '@primeng/themes/aura/base'

export const dndPrimeNgTheme = definePreset(Aura, {
  semantic: {},
  components: {},
} satisfies Preset<AuraBaseDesignTokens>)
