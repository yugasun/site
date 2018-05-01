import React from 'react'
import styles from './styles.css'

const Glitch = props => {

  const style = (() => {
    if(props.top || props.bottom)
      return { backgroundImage : "url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/glitch.png')" }
    else if(props.mid)
      return { backgroundImage : "url('https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/mid-glitch.png')" }
  })()

  const className = (() => {
    if(props.bottom) {
      return styles.verticallyFlipped
    } else {
      return styles.container
    }
  })()

  return (
    <div { ...{
      ...{
        style : { ...style, ...props.style }
      },
      className
    } } ></div>
  )
}

export default Glitch