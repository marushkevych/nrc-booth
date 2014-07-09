

# REST API

### provided restful resources:
The following resources can be accessed through REST api and have corresponding collections in mongoDB
- `loyaltycard`
- `ppcard`

### find card by card number
`POST http://localhost:1337/loyaltyCard/find`

```js
{
  "where":{
    "number":456987321
  }
}
```

### update card holder name and site code
`PUT http://localhost:1337/loyaltyCard/53bc724c3cc626fc38cc1f1a`

```js
{
    "name": "Dummy User",
    "site": "654654"
}
```

### add card (for testing)
`POST http://localhost:1337/loyaltyCard`

```js
{
    "number":456987321
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

