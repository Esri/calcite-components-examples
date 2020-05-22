import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

applyPolyfills().then(() => {
  defineCustomElements(window);
  loadInitializers(App, config.modulePrefix);
});
