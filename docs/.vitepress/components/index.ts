import type { App } from 'vue';
import Demo from './Demo.vue';

import Feature1 from './Feature1.vue';
import Feature2 from './Feature2.vue';

export const install = (app: App) => {
  app.component('Demo', Demo);
  app.component('Feature1', Feature1);
  app.component('Feature2', Feature2);
};
