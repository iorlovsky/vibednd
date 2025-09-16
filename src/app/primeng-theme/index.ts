import { definePreset } from '@primeng/themes'
import Aura from '@primeng/themes/aura'
import { Preset } from '@primeuix/themes/types'
import { AuraBaseDesignTokens } from '@primeng/themes/aura/base'
import { primengThemeButton } from './button'
import { primengThemeMenu } from './menu'
import { primengThemeSemantic } from './semantic'
import { primengThemeInputText } from './input-text'
import { primengThemeFloatLabel } from './float-label'
import { primengThemeInputGroup } from './input-group'

export const dndPrimeNgTheme = definePreset(Aura, {
  semantic: primengThemeSemantic,
  components: {
    button: primengThemeButton,
    menu: primengThemeMenu,
    inputgroup: primengThemeInputGroup,
    inputtext: primengThemeInputText,
    floatlabel: primengThemeFloatLabel,
  },
} satisfies Preset<AuraBaseDesignTokens>)
