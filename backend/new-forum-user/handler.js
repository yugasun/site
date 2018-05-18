const sendGrid = require('sendgrid')
const isEmail = require('is-email')
const axios = require('axios')

module.exports.newForumUser = (event, context, callback) => {
  const callbackResponse = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    }
  }
  console.log('event.path', event.path)

  if (event.path !== '/new-user') {
    callbackResponse.body = JSON.stringify({
      message: 'Not a new user request',
    })
    return callback(null, callbackResponse)
  }

  const body = JSON.parse(event.body)
  if (!body || !body.user || !body.user.email || !isEmail(body.user.email)) {
    console.log('body contains no email', body)
    callbackResponse.body = JSON.stringify({
      message: 'No email in forum request',
    })
    return callback(null, callbackResponse)
  }

  const email = body.user.email
  console.log('Check for email in auth0 > ', email)
  axios({
    url: process.env.SERVERLESS_USER_API_ENDPOINT,
    method: 'post',
    headers: {
      'Authorization': `bearer ${process.env.SERVERLESS_USER_API_KEY}`
    },
    data: {
      email: email
    },
  }).then((response) => {
    //console.log('response.status', response.status)
    if (response.status === 204) {
      console.log(`No Auth0 user found with email ${email}`)
      console.log('Send user welcome email')
      // email not found in auth0
      sendEmail(email, function() {
        console.log(`email sent to ${email}`)
        callbackResponse.body = JSON.stringify({
          message: 'Email sent',
        })
        return callback(null, callbackResponse)
      })
    }
    if (response.status === 200) {
      // email is found in auth0
      console.log(`found user with email ${email}`)
      // console.log('response.data', response.data);
      callbackResponse.body = JSON.stringify({
        message: 'No Email sent',
      })
      // sent different email?
      return callback(null, callbackResponse)
    }
  }).catch((error) => {
    console.log('e', error)
    return callback(error)
  })
};


function sendEmail(to, callback) {
  const emailContent = `<html>
<body>
  <p>Hello there!</p>

  <p>Excited to have you on the serverless forums!</p>

  <p>We have a beta program open for Serverless Platform, and we’d love to see you join it.</p>

  <p>Here’s the access link: <a href="https://serverless.com/sign-up?utm_source=forum&utm_medium=email&utm_campaign=new_forum_users">serverless.com/sign-up</a>

  <p>Let me know if you have any trouble.</p>

  <p>Best,<br/>
  David</p>
</body>
</html>
`
  const helper = sendGrid.mail;
  const fromEmail = new helper.Email('contact@serverless.com');
  const toEmail = new helper.Email(to);
  const subject = 'Welcome to the Serverless Forums';
  const content = new helper.Content("text/html", emailContent)
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);

  const sg = sendGrid(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);

    return callback(error, response);
  });
}
