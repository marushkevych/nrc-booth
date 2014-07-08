# nrc-booth
### a Sails application

# Mongo DB

To configure your Mongodb connection add the following to `local.js`:

```js
module.exports = {

  adapters: {
      'default': 'mongo',
      
      nongo: {
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

