import React from "react";
import "./MainHeader.scss";

class MainHeader extends React.Component {
  render() {
    return (
      <div className="MainHeader row sticky-top">
        <div className="col bg-primary text-white">
          <h1>encryptor</h1>
        </div>
      </div>
    );
  }
}

export default MainHeader;
