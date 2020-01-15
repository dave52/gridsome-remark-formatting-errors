/* eslint-disable */

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from 'vue'
import DefaultLayout from '~/layouts/Default.vue';
import 'prismjs/themes/prism.css'; // theming for markdown code blocks
import './stylesheets/index.scss'; // global scss files

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function upperFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelize(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

export default function(Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // appOptions.render = h => h(DefaultLayout, { attrs: { id: 'app' } });

  // Ignore specified custom elements
  Vue.config.ignoredElements = [/^zui-/];

  // Add external CSS to head
  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/@zywave/zui-bundle@next/dist/css/zui-bundle.fouc.css'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/@zywave/zui-bundle@next/dist/css/zui-bundle.app.css'
  });

  // Add an external JS file to head
  head.script.push({
    src: 'https://unpkg.com/@zywave/zui-bundle@next'
  });
  // Add external JS before closing </body> tag
  head.script.push({
    src: 'https://unpkg.com/@zywave/zui-bundle@next/dist/zui-loader.js',
    body: true
  });
}
