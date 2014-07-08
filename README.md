# nrc-booth
### a Sails application

# Mongo DB

To enable environment specific Mongodb config, move the following from `adapters.js` to `local.js`:

```js
module.exports = {

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
}
```

