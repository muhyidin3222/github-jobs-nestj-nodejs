'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          "id": 1,
          "email": "test@gmail.com",
          "password": "$2b$10$WKXbIAw3gA7Ekvz97EglYeiNzasC2P.GYnhyBtHXswDxt9aioQ8JG",
        }
      ]
      , {});
  }
};
