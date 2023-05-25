'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: Sequelize.STRING,
      description: Sequelize.STRING(10000),
      logo: Sequelize.STRING,
      position: Sequelize.STRING,
      role: Sequelize.STRING,
      level: Sequelize.STRING,
      postedAt: Sequelize.STRING,
      type: Sequelize.STRING,
      location: Sequelize.STRING,
      company_url: Sequelize.STRING,
      how_to_apply: Sequelize.STRING(1000),
    });
  },
};