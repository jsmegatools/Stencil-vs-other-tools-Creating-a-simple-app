exports.config = {
  bundles: [
    { components: ['my-app', 'app-home', 'app-popular'] },
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  copy: [
    { src: 'images' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
