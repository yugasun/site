import axios from 'axios'

export default function submitFeatureData(data, callback) {
  if (!data) {
    if (callback) {
      callback('Error no user data found')
    }
    return false
  }
  const airTableData = {
    fields: {
      Name: data.name,
      Email: data.email,
      Company: data.company,
      'Date Added': new Date()
    }
  }
  axios({
    method: 'post',
    url: 'https://api.airtable.com/v0/appyZzQmAS6nvzZ5r/Table%201',
    data: airTableData,
    headers: {
      Authorization: 'Bearer keynoipW7vgeiBMuZ',
    },
  })
  .then((response) => {
    if (callback) {
      callback(null, response)
    }
  })
  .catch((err) => {
    if (callback) {
      callback(err)
    }
  })
}
