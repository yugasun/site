# Serverless 404 Tracker

This is a service to keep track of site 404s.

It stores 404 hits into a DynamoDB table

Used on serverless.com.

See the implementation of this in the [serverless site src](https://github.com/serverless/site/blob/master/src/pages/404/index.js)

# Usage

Install serverless CLI.

```bash
npm install serverless -g
```

Then run `serverless deploy`

# Frontend implementation

From your frontend make an ajax call to your API gateway endpoint

```js
// example using 'axios' npm package
var log404Endpoint = 'https://xxxxxxxxx.execute-api.us-west-2.amazonaws.com/dev/report'
axios({
  method: 'post',
  url: log404Endpoint,
  data: {
    url: window.location.href,
    referrer: document.referrer || window.localStorage.getItem('last_page_viewed')
  },
}).then(function (response) {
  console.log('404 recorded')
}).catch(function (error) {
  console.log(error)
})
```
