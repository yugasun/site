import md5 from '../utils/md5'
import getVisitorData from './getVisitorData'

const VISITOR_ID = 'sls_visitor_id'

const generateVisitorID = (data) => {
  return md5(data.canvas +
    ':' + md5(data.fonts.join(':')) +
    ':' + JSON.stringify(data.screen) +
    ':' + JSON.stringify(data.browser) +
    ':' + JSON.stringify(data.webgl) +
    ':' + JSON.stringify(data.plugins))
}

const setVisitorID = () => {
  const data = getVisitorData()
  const VisitorID = generateVisitorID(data)
  window.localStorage.setItem(VISITOR_ID, VisitorID)
}

export const getVisitorID = () => {
  return window.localStorage.getItem(VISITOR_ID)
}

export const initializeVisitorID = () => {
  if (!getVisitorID()) {
    setVisitorID()
  }
}
