import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
    console.log(props.children)
  return (
    <div className={`${classes.Card} ${props.className}`}>{props.children}</div>
  )
}

export default Card