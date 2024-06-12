const { dependencies } = require('./package.json');

module.exports = {
  name: 'shaders',
  exposes: {
    './Button': './src/Button',
    './Header' : './src/components/Header.jsx',
    './Footer' : './src/components/Footer.jsx'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};


