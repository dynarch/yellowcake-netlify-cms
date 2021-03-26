import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'
import InfoCard from './InfoCard'
import './Popup.css'

class InfoCardPopup extends Component {
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
      description,
      excerpt,
      button, 
      // children
     } = this.props
    return (
      <Fragment>
        <div className="taCenter">
          <div
            className="PopupContent"
            onClick={this.togglePopup.bind(this)}
            onKeyDown={this.handleKeyDown}
            tabIndex={0}
            aria-label="Toggle Popup"
            role="button"
          >
            <InfoCard title={title} featuredImage={featuredImage} excerpt={excerpt}></InfoCard>
          </div>
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
              <InfoCard title={title} featuredImage={featuredImage} description={description} button={button}></InfoCard>
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}

export default InfoCardPopup