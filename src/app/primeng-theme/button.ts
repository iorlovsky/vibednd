import { ButtonDesignTokens } from '@primeng/themes/aura/button'

export const primengThemeButton: ButtonDesignTokens = {
  colorScheme: {
    light: {
      text: {
        secondary: {
          color: 'var(--dnd-color-text-primary)',
          hoverBackground: 'var(--dnd-color-background-backdrop)',
          activeBackground: 'var(--dnd-color-background-backdrop-active)',
        },
      },
    },
    dark: {
      root: {
        secondary: {
          color: 'var(--dnd-color-text-primary)',
        },
      },
      text: {
        secondary: {
          color: 'var(--dnd-color-text-primary)',
          hoverBackground: 'var(--dnd-color-background-backdrop)',
          activeBackground: 'var(--dnd-color-background-backdrop-active)',
        },
      },
    },
  },
}
