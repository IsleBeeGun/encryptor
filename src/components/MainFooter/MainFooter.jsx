import React from "react";
import './MainFooter.scss';

class MainFooter extends React.Component {
  render() {
    return (
      <footer className="MainFooter row">
        <div className="col bg-dark text-white-50">
          <h1 className="text-right">..byIBG</h1>
        </div>  
      </footer>
    );
  }
}

export default MainFooter;
