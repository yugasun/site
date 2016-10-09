import axios from 'axios'

export default function submitFeatureData (data, callback) {
  if (!data && !data.userData) {
    callback && callback('Error no user data found')
    return false
  }
  var array = Object.keys(data.formData)
  var userData = JSON.parse(data.userData)
  const airTableData = {
    'fields': {
      'Name': userData.name,
      'interested in': array,
      'Custom input': data.other,
      'Email': userData.email,
      'userdata': JSON.stringify(data.userData),
      'Date Added': new Date()
    }
  }
  axios({
    method: 'post',
    url: 'https://api.airtable.com/v0/appBcficW4TvH4ViH/Beta%20Usecase',
    data: airTableData,
    headers: {
      'Authorization': 'Bearer keyWrghCH61ag6tA3',
    },
  })
  .then(function (response) {
    callback && callback(null, response)
  })
  .catch(function (err) {
    callback && callback(err)
  })
}
