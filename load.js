import * as components from './components/index.js';
import routes from './routes.js';

const install = (app) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};



export default { install, routes };