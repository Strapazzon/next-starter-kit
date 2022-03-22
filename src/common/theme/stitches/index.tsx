/*
 This is a Next.js project bootstrapped with Strapazzon/next-starter
 You can change this header message in .eslint.json.
 And run yarn lint --fix to change all files
 Ex: Your Company 2022
*/








import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Base
      black: '#000000',
      white: '#ffffff',
      // Slate
      slate50: '#F8FAFC',
      slate100: '#F1F5F9',
      slate200: '#E2E8F0',
      slate300: '#CBD5E1',
      slate400: '#94A3B8',
      slate500: '#64748B',
      slate600: '#475569',
      slate700: '#334155',
      slate800: '#1E293B',
      slate900: '#0F172A',
      // Gray
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      // Stone
      stone50: '#FAFAF9',
      stone100: '#F5F5F4',
      stone200: '#E7E5E4',
      stone300: '#D6D3D1',
      stone400: '#A8A29E',
      stone500: '#78716C',
      stone600: '#57534E',
      stone700: '#44403C',
      stone800: '#292524',
      stone900: '#1C1917',
      // Red
      red50: '#FEF2F2',
      red100: '#FEE2E2',
      red200: '#FECACA',
      red300: '#FCA5A5',
      red400: '#F87171',
      red500: '#EF4444',
      red600: '#DC2626',
      red700: '#B91C1C',
      red800: '#991B1B',
      red900: '#7F1D1D',
      // Blue
      blue50: '#EFF6FF',
      blue100: '#DBEAFE',
      blue200: '#BFDBFE',
      blue300: '#93C5FD',
      blue400: '#60A5FA',
      blue500: '#3B82F6',
      blue600: '#2563EB',
      blue700: '#1D4ED8',
      blue800: '#1E40AF',
      blue900: '#1E3A8A',
      // Violet
      violet50: '#F5F3FF',
      violet100: '#EDE9FE',
      violet200: '#DDD6FE',
      violet300: '#C4B5FD',
      violet400: '#A78BFA',
      violet500: '#8B5CF6',
      violet600: '#7C3AED',
      violet700: '#6D28D9',
      violet800: '#5B21B6',
      violet900: '#4C1D95',
    },
    space: {
      sp0: '0rem',
      sp50: '0.5rem',
      sp75: '0.75rem',
      sp100: '1rem',
      sp125: '1.25rem',
      sp150: '1.5rem',
      sp200: '2rem',
      sp250: '2.5rem',
      sp300: '3rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      nr: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xl2: '1.5rem',
      xl3: '1.857rem',
      xl4: '2.25rem',
      xl5: '3rem',
      xl6: '3.75rem',
      xl7: '4.5rem',
      xl8: '6rem',
    },
    shadows: {
      sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      base: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
      xxl: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
    },
    radii: {
      sm: '4px',
      md: '8px',
    },
  },
  media: {
    sm: '(min-width: 40rem)',
    md: '(min-width: 52rem)',
    lg: '(min-width: 64rem)',
    xlg: '(min-width: 75rem)',
  },
})

export const globalStyles = globalCss({
  '*': {
    fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu;`,
  },
})
