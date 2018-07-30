import React, { PropTypes, Component } from 'react'
import { withRouter } from 'react-router';
import Default from '../../layouts/Default'
import styles from './styles.css'
import commonStyles from './../../fragments/common.css';

import Modal from '../../components/Modal/Modal'

class Overview extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true

  loadHome = () => { this.props.router.push('/') }

  render() {
    return (
      <Default
        {...this.props}
        fullWidth
        navbarInitialTransparency
        className={`${commonStyles.body} ${commonStyles.newSite}`}
      >
        <Modal
          active
          onEscKeyDown={this.loadHome}
          onOverlayClick={this.loadHome}
        >
          <div>
            <iframe className={styles.videoModal}
              src="https://player.vimeo.com/video/282028201?autoplay=1&color=f15953&title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </Modal>
      </Default>
    )
  }
}

export default withRouter(Overview);
