import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'
// import ServiceCard from './ServiceCard'
import Content from './Content'
import { Link } from 'gatsby'
import './Popup.css'
import './ServiceCard.css'

class ServiceCard extends Component {
    constructor(props) {
    super(props)
    this.state = { showPopup: false }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  handleKeyDown = ev => {
    if (ev.keyCode === 13 && !this.state.showPopup) {
      // enter to open
      this.togglePopup()
    } else if (ev.keyCode === 27 && this.state.showPopup) {
      // escape to close
      this.togglePopup()
    }
  }

  render() {
    const {     
      title,
      featuredImage,
      html,
      excerpt,
      button, 
     } = this.props
    return (
      <Fragment>
        <div
          className="ServiceCard"
          onClick={this.togglePopup.bind(this)}
          onKeyDown={this.handleKeyDown}
          tabIndex={0}
          aria-label="Toggle Popup"
          role="button"
        >
          { featuredImage && (
              <div className="ServiceCard--Image--Container">
                  <img src={featuredImage} alt={title} className="ServiceCard--Image" />
              </div>
          )}
          <h2 className="ServiceCard--Title">{title}</h2>
          { excerpt && (
              <div className="ServiceCard--Content">
                {excerpt}
              </div>
            )
          }
        </div>
        {this.state.showPopup ? (
          <div className="Popup-Overlay">
            <div
              className="Popup-Background"
              onClick={this.togglePopup.bind(this)}
              onKeyDown={this.handleKeyDown}
              tabIndex={0}
              aria-label="Toggle Popup"
              role="button"
            ></div>
            <div className="Popup-Inner">
              <X
                className="Popup-Close"
                onClick={this.togglePopup.bind(this)}
                onKeyDown={this.handleKeyDown}
                tabIndex={0}
                aria-label="Toggle Popup"
                role="button"
              />
              <div
                className="ServiceCardPopup"
                onClick={this.togglePopup.bind(this)}
                onKeyDown={this.handleKeyDown}
                tabIndex={0}
                aria-label="Toggle Popup"
                role="button"
              >
                { featuredImage && (
                    <div className="ServiceCard--Image--Container">
                        <img src={featuredImage} alt={title} className="ServiceCard--Image" />
                    </div>
                )}
                <h1 className="ServiceCard--Title">{title}</h1>
                { html && (
                  <Content className='ServiceCard--Content' source={html} />
                  )
                }
                { button && (button.map((item, index) => (
                  <div key={item.text + index} className="ServiceCard--Footer">
                    <Link to={item.ref} className="Button">{item.text}</Link>
                  </div>
                  ))
                  )
                }
              </div>
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}

export default ServiceCard