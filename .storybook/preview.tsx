import type { Preview, StoryFn } from '@storybook/nextjs-vite'
import React from 'react';
import '../app/globals.css'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light-blue',
    toolbar: {
      icon: 'circlehollow',
      items: ['light-blue', 'light-purple', 'light-red', 'dark-blue', 'dark-purple', 'dark-red'],
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  },
  decorators: [
      (Story, context) => {
        const { theme: themeName } = context.globals
        React.useEffect(() => {
          document.documentElement.className = themeName.replace('-', ' ');
        }, [themeName]);

        return <Story />;
      }
    ],
};

export default preview;
