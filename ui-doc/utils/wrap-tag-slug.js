const kebabCase = require('lodash/kebabCase');

module.exports = (tag) => `/tags/${kebabCase(tag)}/`;