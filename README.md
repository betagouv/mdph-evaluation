# mdph-evaluation
projet de l'outil d'evaluation pour les MDPH
================================================

## Guide de demarrage

### Près-requis

- [Node.js and npm](https://nodejs.org/) Node ^6.5.9, npm ^3.*
- [yarn](https://yarnpkg.com/) ^0.24
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod` ^3.0

## Demarrage

### Demarrage en mode developpement

1. Lancer `yarn install` pour installer les dependances

2. Lancer `mongod` dans un invite un shell separe pour lancer mongoDB

3. Lancer `yarn dev` pour lancer le serveur nodeJS avec l'application. l'application sera directement presente dans votre navigateur par defaut.

### Demarrage en mode production

1. Lancer `yarn build` pour installer les dependances

2. Lancer `yarn start` pour lancer le serveur en mode production

## Utilisation

Apres avoir lancé le serveur, ajouter manuellement les données ci-dessous dans mongoDB.

### User

```json
{
    "_id" : ObjectId("589adfdf4dcb8920e88eb377"),
    "name" : "evaluateur",
    "email" : "evaluateur@evaluation.cnsa.fr",
    "hashedPassword" : "Vg0+y7TKEOn4ul4MDBJtccet5lZpFAN3io2w7fCDu5v6I2/FpJwGsrHDjYv4dmoJMOuAIgwQpmeWWMzfbsGdHA==", // mot de passe (encrypté avec SHA1)
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
