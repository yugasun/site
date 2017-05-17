import axios from 'axios'

const hubspotEndpoint = process.env.API.ADD_CONTACT

export default function addContact(data) {
  return axios({
    method: 'post',
    url: hubspotEndpoint,
    data: JSON.stringify(data),
  }).catch((error) => {
    console.warn(error)
    throw error
  })
}
