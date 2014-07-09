# nrc-booth
### a Sails application

# REST API

## provided restful resources:
The following resources can be accessed through REST api and have corresponding collections in mongoDB
- `loyaltyCard`
- `ppcard`

## Find card by card number
`POST http://host/loyaltyCard/find`
with

```js
{
  "where":{
    "number":456987321
  }
}
```

## Update card holder name and site code
`PUT http://host/loyaltyCard/53bc724c3cc626fc38cc1f1a`
with

```js
{
    "name": "Dummy User",
    "site": "654654"
}
```


# Environment config

To configure environment and Mongodb, create `config/local.js` with following:

```js
module.exports = {

  port: process.env.PORT || 1337,
  environment: process.env.NODE_ENV || 'development',

  adapters: {
      'default': 'mongo',
      
      mongo: {
          module: 'sails-mongo',
          host: 'localhost',
          user: '',
          password: '',
          database: 'nrc',
          
          schema: false
      }
  }

};
```

