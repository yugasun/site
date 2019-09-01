import axios from 'axios'

const hubspotEndpoint = process.env.GATSBY_ADD_FORMS_EVENT_API

export default function addContact(data, formOrigin) {
  data.form_origin = formOrigin
  delete data.lead_source
  if (!formOrigin) return

  return axios({
    method: 'post',
    url: hubspotEndpoint,
    data: JSON.stringify(data),
  }).catch(error => {
    console.warn(error)
    throw error
  })
}
