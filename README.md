# mdph-evaluation
projet de l'outil d'evaluation pour les MDPH
================================================

## Getting Started

### Prerequisites

- [Node.js and npm](https://nodejs.org/) Node ^6.5.9, npm ^3.*
- [yarn](https://yarnpkg.com/) ^0.24
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod` ^3.0

## Running

### Running the app in development

1. Run `yarn install` to install server dependencies

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `yarn dev` to start the development server. It should automatically open the client in your browser when ready.

### Running the app in production

1. Run `yarn build` to install server dependencies

2. Run `yarn start` to run the app in production mode

## Use

After starting app, add manualy data below in MongoDB.

### User

```json
{
    "_id" : ObjectId("589adfdf4dcb8920e88eb377"),
    "name" : "evaluateur",
    "email" : "evaluateur@evaluation.cnsa.fr",
    "hashedPassword" : "Vg0+y7TKEOn4ul4MDBJtccet5lZpFAN3io2w7fCDu5v6I2/FpJwGsrHDjYv4dmoJMOuAIgwQpmeWWMzfbsGdHA==", // mot de passe (encrypted with SHA1)
    "salt" : "OnBOl0aN4uo7yFGZhTOhGQ==",
    "mdph" : ObjectId("560bdb46767f719e73c9fcbd"),
    "__v" : 0
}
```
### Mdph

```json
{
    "_id" : ObjectId("560bdb46767f719e73c9fcbd"),
    "name" : "test",
    "zipcode" : "test",
    "__v" : 0
}
```
