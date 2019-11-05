import React from "react";
import './MainFooter.scss';

class MainFooter extends React.Component {
  render() {
    return (
      <div className="MainFooter row">
        <div className="col bg-success"></div>
        <div className="col-8">
          <h1>Goodbye!</h1>
        </div> 
        <div className="col bg-success"></div>  
      </div>
    );
  }
}

export default MainFooter;
