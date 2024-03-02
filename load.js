import * as components from './components/index.js';
import routes from './routes.js';
import store from './store';

const install = (app) => {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

// Exportações nomeadas
export { routes, store };

// Exportação padrão
export default { install };