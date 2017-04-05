const querystring = require('querystring');
const request = require('request')
const mailChimpAPI = process.env.MAILCHIMP_API_KEY
const mailChimpListID = process.env.MAILCHIMP_LIST_ID
const mcRegion = process.env.MAILCHIMP_REGION
const DEFAULT_REDIRECT_URL = process.env.DEFAULT_REDIRECT_URL

module.exports.mailchimpService = function (event, context, callback) {
  // console.log(event)
  const formData = querystring.parse(event.body)
  const referringURL = (formData.RURL) ? formData.RURL : event.headers.Referer
  const listID = (formData.LIST_ID) ? formData.LIST_ID : mailChimpListID
  const message = (formData.MSG) ? `?msg=${formData.MSG}` : ''

  if (!formData) {
    console.log('No form data supplied')
    return callback('fail')
  }

  if (!formData.EMAIL) {
    console.log('No EMAIL supplied')
    return callback('fail')
  }

  if (!listID) {
    console.log('No LIST_ID supplied')
    return callback('fail')
  }

  var data = {
    'email_address': formData.EMAIL,
    'status': 'subscribed',
    'merge_fields': {}
  }

  if (formData.FNAME) {
    data.merge_fields.FNAME = formData.FNAME
  }

  if (formData.LNAME) {
    data.merge_fields.LNAME = formData.LNAME
  }

  var subscriber = JSON.stringify(data)
  console.log('start to mailchimp', subscriber)

  request({
    method: 'POST',
    url: `https://${mcRegion}.api.mailchimp.com/3.0/lists/${listID}/members`,
    body: subscriber,
    headers: {
      Authorization: `apikey ${mailChimpAPI}`,
      'Content-Type': 'application/json'
    }
  },
    function (error, response, body) {
      if (error) {
        callback(error, null)
      }
      const bodyObj = JSON.parse(body);

      if (response.statusCode < 300 || (bodyObj.status === 400 && bodyObj.title === "Member Exists")) {
        console.log('success added to list in mailchimp')
        const redirectURL = (formData.RURL) ? formData.RURL : DEFAULT_REDIRECT_URL
        return callback(null, {
          statusCode: 301,
          headers: {
            Location: `${referringURL}${message}`,
          },
          body: response.body,
        });
      } else {
        console.log('error from mailchimp', response.body.detail)
        return callback('fail')
      }
    })

}
