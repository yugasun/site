import md5 from '../utils/md5'
import { setItem, getItem } from '../../storage'
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
  setItem(VISITOR_ID, VisitorID)
}

export const getVisitorID = () => {
  return getItem(VISITOR_ID)
}

export const initializeVisitorID = () => {
  if (!getVisitorID()) {
    setVisitorID()
  }
}

// import getIPs from './ipData'
// var test = getIPs().then(function (rs) {
//   console.log('yay', rs)
//   return rs
// 	/* do something with the result */
// }).catch(function () {
// 	/* error :( */
// })
