import React, { PropTypes } from 'react'
import classnames from 'classnames'
import ActivableRenderer from '../ActivableRenderer/ActivableRenderer'
import styles from './Modal.css'
import InjectOverlay from '../Overlay/Overlay'

const factory = (Overlay) => {
  const Modal = (props) => {
    const className = classnames([styles.dialog, styles[props.type]], {
      [styles.active]: props.active
    }, props.className)

    return (
      <Overlay
        active={props.active}
        onClick={props.onOverlayClick}
        onEscKeyDown={props.onEscKeyDown}
        onMouseDown={props.onOverlayMouseDown}
        onMouseMove={props.onOverlayMouseMove}
        onMouseUp={props.onOverlayMouseUp}
      >
        <div className={className}>
          <section role='dialog' className={styles.body}>
            {props.title ? <h6 className={styles.title}>{props.title}</h6> : null}
            {props.children}
          </section>
        </div>
      </Overlay>
    )
  }

  Modal.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onEscKeyDown: PropTypes.func,
    onOverlayClick: PropTypes.func,
    onOverlayMouseDown: PropTypes.func,
    onOverlayMouseMove: PropTypes.func,
    onOverlayMouseUp: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.string
  }

  Modal.defaultProps = {
    active: false,
    type: 'normal'
  }

  return ActivableRenderer()(Modal)
}

const Modal = factory(InjectOverlay)

export default Modal
