import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'
export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()
  // keyboard events
  handleLinkKeyDown = ev => {
    if (ev.keyCode === 13) {
      this.state.active && this.handleMenuToggle()
    }
  }

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })
  keyToggleSubNav = (e, subNav) => {
    // key o is for open so you can enter key to open
    if (e.keyCode === 79 || e.keyCode === 27) {
      this.toggleSubNav(subNav)
    }
  }
  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          onKeyDown={this.handleLinkKeyDown}
          tabIndex={0}
          aria-label="Navigation"
          role="button"
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link
            to="/"
            onClick={this.handleLinkClick}
            onKeyDown={this.handleLinkKeyDown}
            tabIndex={0}
            aria-label="Navigation"
            role="button"
          >
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/">Home</NavLink>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
                onMouseEnter={() => this.toggleSubNav('posts')}
                onMouseLeave={() => this.toggleSubNav('posts')}
                onKeyDown={e => this.keyToggleSubNav(e, 'posts')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                Blog
                <div className="Nav--GroupLinks">
                  <NavLink to="/blog/" className="Nav--GroupLink">
                    Alle Beiträge
                  </NavLink>
                  {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'ExperiencePages' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('projects') ||
                  this.props.location.pathname.includes('experience')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('ExperiencePages')}
                onMouseEnter={() => this.toggleSubNav('ExperiencePages')}
                onMouseLeave={() => this.toggleSubNav('ExperiencePages')}
                onKeyDown={e => this.keyToggleSubNav(e, 'ExperiencePages')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                Berufserfahrung
                <div className="Nav--GroupLinks">
                  <NavLink to="/highlights/" className="Nav--GroupLink">
                    Qualifikationshöhepunkte
                  </NavLink>
                  <NavLink to="/projects/" className="Nav--GroupLink">
                    Projekte
                  </NavLink>
                  <NavLink to="/employment/" className="Nav--GroupLink">
                    Werdegang
                  </NavLink>
                  <NavLink to="/certificates/" className="Nav--GroupLink">
                    Zertifikate
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'services' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('service') ||
                  this.props.location.pathname.includes('prices')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('services')}
                onMouseEnter={() => this.toggleSubNav('services')}
                onMouseLeave={() => this.toggleSubNav('services')}
                onKeyDown={e => this.keyToggleSubNav(e, 'services')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                Leistungen
                <div className="Nav--GroupLinks">
                  <NavLink to="/service/" className="Nav--GroupLink">
                    Bereiche
                  </NavLink>
                  <NavLink to="/prices/" className="Nav--GroupLink">
                    Preise und Verfügbarkeit
                  </NavLink>
                </div>
              </span>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'infoPages' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('dataprotection') ||
                  this.props.location.pathname.includes('about')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('infoPages')}
                onMouseEnter={() => this.toggleSubNav('infoPages')}
                onMouseLeave={() => this.toggleSubNav('infoPages')}
                onKeyDown={e => this.keyToggleSubNav(e, 'infoPages')}
                tabIndex={0}
                aria-label="Navigation"
                role="button"
              >
                Info
                <div className="Nav--GroupLinks">
                  <NavLink to="/dataprotection/" className="Nav--GroupLink">
                    Datenschutz
                  </NavLink>
                  <NavLink to="/about/" className="Nav--GroupLink">
                    Über mich
                  </NavLink>
                </div>
              </span>
            </div>
            <NavLink to="/contact/">Kontakt</NavLink>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            tabIndex={0}
            aria-label="Navigation"
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
