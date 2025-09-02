import React from 'react'
import logo_ahbss_bdr from "../assets/image/logo_ahbss_bdr.png";

export const NavBarr = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-#009FFF">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo_ahbss_bdr}
            alt="Logo"
            width="50"
            height="50"
            className="c-logo d-inline-block align-text-center"
          />
          <span className="p-2 text-white">
            AhoraBoss
          </span>
        </a>
      </div>
    </nav>
  );
}

