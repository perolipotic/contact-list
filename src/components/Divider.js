import React from 'react'

const Divider = ({ green }) => {
  return (
    <div
      className={
        `divider divider--${green ? 'green' : 'gray'}`
      }></div>
  )
}

export default Divider