// ./src/export-app.ts
import App from './App.vue';
import { createBridgeComponent } from '@module-federation/bridge-vue3';

export default createBridgeComponent({
  rootComponent: App,
  appOptions: ({}) => {
    // Optional: adding a plugin to the new Vue instance on the host application side
    return {};
  },
});
