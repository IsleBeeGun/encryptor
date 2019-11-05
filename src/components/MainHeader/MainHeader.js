import React from "react";
import "./MainHeader.scss";

class MainHeader extends React.Component {
  render() {
    return (
      <div className="MainHeader row">
        <div className="col bg-success"></div>
        <div className="col-8">
          <h1>Hello!</h1>
        </div>
        <div className="col bg-success"></div>
      </div>
    );
  }
}

export default MainHeader;
