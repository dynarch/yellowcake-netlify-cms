import React from 'react'
import './Logo.css'

export default (backgroundImage = `url(/images/logo.svg)`) => (
  <div
    className="Logo"
    style={{
      backgroundImage
    }}
  />
)
