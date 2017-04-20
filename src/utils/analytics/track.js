/*
Naming conventions: https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/

Product => Object => Action ---->
- registry_function_downloaded, registry_function_uploaded, registry_function_deleted
- platform_account_created, platform_account_deleted, platform_account_updated
- site_documentation_viewed, site_searced, site_account_created
- platform_stripe_integration_enabled, platform_stripe_integration_disabled

Conventions

1. prefix with product name
1. Use lowercase letters
3. Separate_words_with_underscores
4. Don’t abbreviate unnecessarilly
5. Don’t programmatically create event names;
6. For page loads, use “view”, not “visit”, “load”, etc.

*/
const isProduction = process.env.NODE_ENV === 'production'

export default function track(eventName, payload) {
  // Handle Google Analytics
  googleAnalytics(eventName, payload)
  // Handle Customer.io
  customerIO(eventName, payload)
}

function customerIO(eventName, payload) {
  if (typeof _cio !== 'undefined') {
    console.log('Customer.io Event triggered') // eslint-disable-line
    const debugCustomerIO = `Customer.io Event > [${eventName}] [payload: ${JSON.stringify(payload, null, 2)}]`
    if (isProduction) {
      console.log(debugCustomerIO) // eslint-disable-line
      _cio.track(eventName, payload) // eslint-disable-line
    }
  }
}

function googleAnalytics(eventName, payload) {
  if (typeof ga !== 'undefined') {
    const category = (payload && payload.category) ? payload.category : eventName.split('_')[0]
    const label = (payload && payload.label) ? payload.label : undefined
    const value = (payload && payload.value) ? payload.value : undefined
    const nonInteraction = (payload && payload.nonInteraction) ? payload.nonInteraction : undefined
    let debugGA = `GA Event > [Category: ${category}] [Action: ${eventName}]`

    if (typeof label !== 'undefined') {
      debugGA += ` [Label: ${label}]`
    }

    if (typeof value !== 'undefined') {
      debugGA += ` [Value: ${value}]`
    }

    if (typeof nonInteraction !== 'undefined') {
      debugGA += ` [nonInteraction: ${nonInteraction}]`
    }

    if (isProduction) {
      console.log(debugGA) // eslint-disable-line
      ga('send', { // eslint-disable-line
        // 'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'
        hitType: 'event',
        eventCategory: category,
        eventAction: eventName,
        eventLabel: label,
        eventValue: value
      }, nonInteraction)
    } else {
      console.log(debugGA) // eslint-disable-line
    }
  }
}
