import { AccordionDesignTokens } from '@primeng/themes/aura/accordion'

export const primengThemeAccordion: AccordionDesignTokens = {
  colorScheme: {
    light: {
      header: {
        background: 'var(--dnd-color-primary)',
        hoverBackground: 'var(--dnd-color-primary-hover)',
        activeBackground: 'var(--dnd-color-primary)',
        activeHoverBackground: 'var(--dnd-color-primary)',
        color: 'var(--dnd-color-text-secondary)',
        hoverColor: 'var(--dnd-color-text-secondary)',
        activeColor: 'var(--dnd-color-text-secondary)',
        activeHoverColor: 'var(--dnd-color-text-secondary)',
      },
      panel: {
        borderWidth: '16px',
        borderColor: 'transparent',
      },
      content: {
        background: 'transparent',
        padding: '0',
      },
    },
    dark: {
      header: {
        background: 'var(--dnd-color-background-backdrop)',
        hoverBackground: 'var(--dnd-color-background-backdrop-active)',
        activeBackground: 'var(--dnd-color-background-backdrop)',
        activeHoverBackground: 'var(--dnd-color-background-backdrop)',
        color: 'var(--dnd-color-text-additional)',
        hoverColor: 'var(--dnd-color-text-additional)',
        activeColor: 'var(--dnd-color-text-additional)',
        activeHoverColor: 'var(--dnd-color-text-additional)',
      },
      panel: {
        borderWidth: '16px',
        borderColor: 'transparent',
      },
      content: {
        background: 'transparent',
        padding: '0',
      },
    },
  },
}
