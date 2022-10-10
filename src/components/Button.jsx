import React from 'react'
import "../style/components/button.scss"

const Button = ({text, onCLick, className}) => {
  return <button className={className} onClick={onCLick}>{text}</button>
}

export default Button