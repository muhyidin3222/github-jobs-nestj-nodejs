'use strict';

const jobsData = require('../local/jobs.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', jobsData, {});
  },
  down: (queryInterface, Sequelize) => {
  }
};
