'use strict';

const fs = require('fs')
const axios = require('axios')
const auth0 = require('auth0')

module.exports.authenticate = (event, context, callback) => {
  if (event.authorizationToken) {
    // remove "bearer " from token
    const token = event.authorizationToken.substring(7);

    // authResponse.principalId = principalId;
    if (token !== process.env.SECRET_ACCESS_KEY) {
      return callback('Unauthorized')
    }

    const policyDocument = {
      Version: '2012-10-17',
      Statement: [],
    }
    const statementOne = {
      Action: 'execute-api:Invoke',
      Effect: 'Allow',
      Resource: event.methodArn
    }
    // add statement to policy
    policyDocument.Statement[0] = statementOne;
    const authResponse = {
      principalId: 'lololoz',
      context: {
        arbitrary: 'data'
      },
      policyDocument: policyDocument,
    }
    return callback(null, authResponse)
  }
}

// Then connect to Auth client
module.exports.getUserByEmail = (event, context, callback) => {
  console.log(event)
  console.log(context)
  const credsFile = '/tmp/creds-token.json'
  const body = JSON.parse(event.body)
  const email = body.email

  getAuth0Token().then((token) => {
    findUserByEmail(email, token).then((users) => {
      if (Array.isArray(users) && users.length) {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(users[0]),
        })
      }
      return callback(null, {
        statusCode: 204,
        body: JSON.stringify({
          message: 'No user found'
        }),
      })
    }).catch((e) => {
      return callback(new Error('[500] Server error'))
    })
  })
}

/* Get auth0 client token */
function getAuth0Token() {
  const credsFile = '/tmp/creds-token.json'
  if (fs.existsSync(credsFile)) {
    const token = fs.readFileSync(credsFile)
    return Promise.resolve(token)
  }
  // else make remote request
  console.log('make auth token request')
  return axios({
    url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      "grant_type": "client_credentials",
      "client_id": process.env.AUTH0_CLIENT_ID,
      "client_secret": process.env.AUTH0_CLIENT_SECRET,
      "audience": "https://serverlessinc.auth0.com/api/v2/"
    },
  }).then((response) => {
    // console.log(response.data) // auth0 response
    // TODO save expires_in info but tokens last a day so ¯\_(ツ)_/¯
    fs.writeFile(credsFile, response.data.access_token, (err) => {
      if (err) throw err
    })
    return response.data.access_token
  }).catch((error) => {
    console.log(error)
  })
}

function findUserByEmail(email, token) {
  const auth0Management = new auth0.ManagementClient({
    token: token,
    domain: process.env.AUTH0_DOMAIN
  })
  const params = {
    q: `email:"${email}"`
  }
  return auth0Management.getUsers(params)
}
