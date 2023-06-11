import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import GlobalStyle from '../src/lib/GlobalStyle'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

export const decorators = [
  withThemeFromJSXProvider({ GlobalStyles: GlobalStyle }),
]
