import React, { Component } from 'react'
import ImgNav from './ImgNav/logo.png'

class NavBar extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav className="navbar-custom navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src={ImgNav} alt="logo" className="NavLogo" /></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            {/* <a className="nav-link active" href="/">Accueil
              <span className="visually-hidden">(current)</span>
            </a> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Emulators">Emulateurs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Roms">Roms</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">A propos</a>
          </li> 
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </li>  */}
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
        </div>
    );
}
}
export default NavBar; 
