import React from "react";
import "./MainHeader.scss";
import logo from './logo.svg';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="MainHeader">
        <div className="row">
          <img src={logo} alt="Encryptor" className="col logo"/>
        </div>
        <header className="row justify-content-center sticky-top bg-info">
          <h1 className="col-fluid shadow-lg bg-dark rounded-pill text-white text-under-logo text-center">encryptor</h1>
        </header>
      </div>
    );
  }
}

export default MainHeader;
