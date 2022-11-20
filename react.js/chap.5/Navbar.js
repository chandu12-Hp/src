// hamesha file ka naam capital se chalu karna.
// just type rfc
import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    
      <>
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href={'/'}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/">a</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-a disabled">Disabled</a>
            </li>
          </ul>
          <div className={`custom-control custom-switch text-${props.mode==="light"?"#052d54":"liAht"}`}>
  <input type="checkbox" className="custom-control-input height-128px" onClick={props.enableMode} id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">${props.mode}</label>
</div>

        </div>
      </div>
    </nav>
    
    </>
  );
}

Navbar.propTypes ={
  title:PropTypes.string.isRequired
}

Navbar.defaultProps ={
  title: 'set title here'
}