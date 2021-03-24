import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by Ruslan Androsjuk.
        </span>
      </div>
    </footer>
  </div>
)
