'use strict';

/**
 * hot-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-sale.hot-sale');
