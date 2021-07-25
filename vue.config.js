module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Kindle Notes Viewer',
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/kindle-notes-viewer/' : '/',
  outputDir: 'docs',

  transpileDependencies: ['vuetify'],
};
