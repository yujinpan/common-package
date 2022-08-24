import DefaultTheme from 'vitepress/theme';
import type { App } from 'vue';
import { install as installComponents } from '../components';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    installComponents(app);
  },
};
