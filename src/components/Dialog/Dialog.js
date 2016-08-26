import React, { PropTypes } from 'react'
import classnames from 'classnames'
import ActivableRenderer from '../ActivableRenderer/ActivableRenderer'
import styles from './Dialog.css'
import InjectButton from '../Button/Button'
import InjectOverlay from '../Overlay/Overlay'

const factory = (Overlay, Button) => {
  const Dialog = (props) => {
    const actions = props.actions.map((action, idx) => {
      const className = classnames(styles.button, {[action.className]: action.className})
      return <Button key={idx} {...action} className={className} />
    })

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
          <section role='body' className={styles.body}>
            {props.title ? <h6 className={styles.title}>{props.title}</h6> : null}
            {props.children}
          </section>
          {actions.length
            ? <nav role='navigation' className={styles.navigation}>
                {actions}
              </nav>
            : null}
        </div>
      </Overlay>
    )
  }

  Dialog.propTypes = {
    actions: PropTypes.array,
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

  Dialog.defaultProps = {
    actions: [],
    active: false,
    type: 'normal'
  }

  return ActivableRenderer()(Dialog)
}

const Dialog = factory(InjectOverlay, InjectButton)

export default Dialog
