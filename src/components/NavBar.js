import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function NavBar(props) {

    return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a href="/" className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/about">{props.about}</a>
        </li>

      </ul>

        <div className="form-check form-switch">
        {/* <input onClick={props.changemode2} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"   /> */}
        {/* <label className={`form-check-label text-${props.mode === 'light' ? 'blue' : props.mode === 'blue' ?'blue':'dark'}`} htmlFor="flexSwitchCheckCheckedDisabled">BlueMode</label> */}
        </div>

        <div className="form-check form-switch">
        <input onClick={props.changemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"   />
        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckCheckedDisabled">DarkMode</label>
        </div>

    </div>
   
  </div>

</nav>
    </div>
  )
}

NavBar.defaultProps={
    title:'set title here',
    about:'set about here'
}

NavBar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string
}