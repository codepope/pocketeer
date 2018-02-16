# Pocketeer

A simple app to clear out pockets older than a month into your archive.

Just set up your Pocket API tokens in config.json (see config.example.json) and run.

## Pocket API tokens

Go to the API pages to setup an app and get a consumer key. Then run

```
npm install node-getpocket express stdio

node node_modules/node-getpocket/authorise.js --consumerkey "yourconsumerkey"
```

And browse to localhost:8080 to authorise the app. This will return an access_token. Put this 
token into config.json.

## Caveat usor

Currently quite noisy but really designed only for occasional clearouts.

