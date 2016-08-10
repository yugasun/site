import React, {Component, PropTypes} from 'react'

const propTypes = {
  children: PropTypes.any
}
export default class Newsletter extends Component {
  render () {
    return (
      <div className='sl-email'>
        <div className='row'>
          <div className='col-sm-6 email-ask hidden-xs hidden-sm'>
            <span className='pull-right oswald'>We Move Fast. Stay Updated.</span>
          </div>
          <div className='col-sm-6 email-form hidden-xs hidden-sm'>
            <form className='form-inline validate' action='//github.us11.list-manage.com/subscribe/post?u=b4fad36768cab222f88338995&amp;id=a38927c74d' method='post' id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form' target='_blank' noValidate=''>
              <div className='form-group'>
                <input type='email' className='form-control email' id='mce-EMAIL' value=''
                  name='EMAIL' placeholder='Your Email' required=''
                />
              </div>
              <input type='submit' className='btn btn-action' name='subscribe' id='mc-embedded-subscribe' />
            </form>
          </div>
          <div style='position: absolute; left: -5000px;' aria-hidden='true'>
            <input type='text' name='b_b4fad36768cab222f88338995_a38927c74d' tabIndex='-1' value='' />
          </div>
        </div>
      </div>
    )
  }
}

Newsletter.propTypes = propTypes
