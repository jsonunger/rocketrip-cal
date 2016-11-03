require('es6-promise');
require('isomorphic-fetch');

const context = require.context('./app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
