import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Future Action</a></li>
            <li><a className="dropdown-item" href="/">Future inclusion</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Future Enhancement</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex mx-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-4 text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
  <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes = {tile: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired}