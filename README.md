<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Challenger with NestJS and Mongo 
Creating a Restful api with mongo and login authentication.

## Description🚀

_Creation of an application that allows creating, saving, deleting and updating user records. These are stored in a Mongo database. And for testing services Postman is used._

## Tools 🛠️

_Tools used for system development._

* [Visual Studio Code]() - Versión 1.74.2
* [Nodejs]() - Versión 18.12.1
* [MongoDB]() - Stable Versions
* [Git]() - Versión 2.38.1
* [Postman]() - Versión 10.5.8

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## CRUD - Using services with Postman 📋

### Get - All Users
```
Path: http://localhost:3000/user
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/PostmanGetAllUsers.PNG?raw=true "Title1")

### Get - One User By ID
```
Path: http://localhost:3000/user/{ID}
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/PostmanGetOneUser.PNG?raw=true "Title2")

### Post - Create Users
_Password encryption was used to create a user._
```
Path: http://localhost:3000/user/create
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/PostmanCreateUser.PNG?raw=true "Title3")

### Delete - Users
_Important: JWT Token must be used to be able to (delete) or (update) a user record. Otherwise, you don't have authorization._
```
Path: http://localhost:3000/user/delete?userID={ID}
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/PostmanDeleteUser.PNG?raw=true "Title4")

### Update - Users
_Important: JWT Token must be used to be able to (delete) or (update) a user record. Otherwise, you don't have authorization._
```
Path: http://localhost:3000/user/update?userID={ID}
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/PostmanUpdateUser.PNG?raw=true "Title5")

## LOGIN AUTHENTICATION 📋
_For the authentication of a user, a token was generated with JWT._

_Important: This token must be used to be able to (delete) or (update) a user record. Otherwise, you don't have authorization._

```
Path: http://localhost:3000/auth/login
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/Postmanlogin.PNG?raw=true "Title6")

## Path to the Swagger documentation 📋

```
Path: http://localhost:3000/api/docs
```
![Alt text](https://github.com/atandalla/challenger-nestjs-mongo/blob/main/testImages/SwaggerAPI.PNG?raw=true "Title7")


## Autor ✒️

* **Anthony Tandalla** - [atandalla](https://github.com/atandalla)
