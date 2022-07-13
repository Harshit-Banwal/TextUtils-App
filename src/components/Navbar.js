import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.Title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <div className="form-check form-switch justify-content-end">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode ==='light'? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title: 'Set title',
    about: 'Set about'
}