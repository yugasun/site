export default function identify(id, profile) {
  // Customer.io
  if (typeof _cio !== 'undefined' && process.env.NODE_ENV === 'production') {
    let data = { // eslint-disable-line
      id: id,
      email: profile.email, // Email of the currently signed in user.
      created_at: Math.round(+new Date(profile.created_at) / 1000),
      // set name
      ...getNameData(profile),
    }
    // limits https://learn.customer.io/api/#api-documentationlimits
    if (profile) {
      // set picture
      if (profile.picture) {
        data.picture = profile.picture
      }
      // set company
      const companyName = getCompanyName(profile)
      if (companyName) {
        data.company = companyName
      }
      // set location
      if (profile.location) {
        data.location = profile.location
      }
      // set login_count
      if (profile.login_count) {
        data.login_count = profile.login_count
      }
    }
    console.log('identify', data) // eslint-disable-line
     _cio.identify(data) // eslint-disable-line
  }
}

function getNameData(profile) {
  if (!profile) {
    return null
  }
  const nameData = {}

  if (profile.name && typeof profile.name === 'string' && !profile.name.match(/@/)) {
    const name = profile.name.split(' ')
    if (name[0]) {
      nameData.first_name = name[0]
    }
    if (name[1]) {
      nameData.last_name = name[1]
    }
    if (name[0] && name[1]) {
      nameData.full_name = `${name[0]} ${name[1]}`
    }
  }

  const meta = profile.user_metadata
  if (meta && meta.fullcontact && meta.fullcontact.contactInfo) {
    if (meta.fullcontact.contactInfo.givenName) {
      nameData.first_name = meta.fullcontact.contactInfo.givenName
    }
    if (meta.fullcontact.contactInfo.familyName) {
      nameData.last_name = meta.fullcontact.contactInfo.familyName
    }
    if (meta.fullcontact.contactInfo.fullName) {
      nameData.full_name = meta.fullcontact.contactInfo.fullName
    }
  }
  return nameData
}


function getCompanyName(profile) {
  if (!profile) {
    return null
  }
  if (profile.company && typeof profile.company === 'string') {
    const company = profile.company.trim().replace(/^@/, '')
    return company
  }
  const meta = profile.user_metadata
  if (meta && meta.fullcontact && meta.fullcontact.organizations) {
    const companyInfo = meta.fullcontact.organizations.filter((org) => { // eslint-disable-line
      if (org.isPrimary) {
        return org
      }
    })

    if (companyInfo && companyInfo[0] && companyInfo[0].name) {
      return companyInfo[0].name.trim()
    }
  }
}
