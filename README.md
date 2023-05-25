## Description

BACKEND GITHUB JOB 
framework TypeScript starter repository.

## Installation


```bash
1. $ npm install
```
2. setup migrations/config/config.json  database
3. setup .env database
```bash
4. $ npx sequelize-cli db:migrate
5. $ npx sequelize-cli db:seed:all
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# running migration 
$ npx sequelize-cli db:migrate

# create data migration 
$ npx sequelize-cli model:generate --name UpdateTotalView --attributes firstName:string

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

```

- [Ahmad Muhyidin](https://github.com/muhyidin3222)