# nrc-booth
### a Sails application

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

