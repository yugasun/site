import React, { PropTypes } from 'react' // eslint-disable-line
import ActivableRenderer from '../ActivableRenderer/ActivableRenderer'
import InjectHelloBar from './HelloBar'
/* DOESNT WORK Delete */
const factory = (HelloBar) => {
  const Bar = (props) => {
    return (
      <HelloBar
        active={props.active}
        position={props.position}
      >
        {props.children}
      </HelloBar>
    )
  }
  Bar.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
    position: PropTypes.string,
  }

  Bar.defaultProps = {
    active: false,
  }

  return ActivableRenderer()(Bar)
}

const HelloBar = factory(InjectHelloBar)

export default HelloBar

/*
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
            {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
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
            {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
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

*/
