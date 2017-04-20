export default function identify(id, profile) {
  const userData = profile || {}
  if (typeof _cio !== 'undefined' && process.env.NODE_ENV === 'production') {
    // limits https://learn.customer.io/api/#api-documentationlimits
    console.log('Customer.io Event triggered') // eslint-disable-line
    _cio.identify({ // eslint-disable-line
      id: id,
      email: profile.email, // Email of the currently signed in user.
      created_at: Math.round(+new Date(profile.created_at) / 1000),
     // Custom attributes
     // first_name: 'John',
     // last_name: 'Smith',
    })
  }
}
