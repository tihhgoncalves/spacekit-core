import * as components from './components/index.js';
import * as plugins from './plugins/index.js';
import routes from './routes.js';
import store from './store';

/** Instalador */
const install = (app) => {
  
  //Importa Plugins
  Object.entries(plugins).forEach(([pluginName, plugin]) => {
    plugin(app);
  });

  //Importa Componentes
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });

};

// Exportações nomeadas
export { routes, store };

// Exportação padrão
export default { install };