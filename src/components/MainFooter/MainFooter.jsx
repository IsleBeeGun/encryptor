import React from "react";
import './MainFooter.scss';

class MainFooter extends React.Component {
  render() {
    return (
      <footer className="MainFooter row">
        <div className="col bg-dark text-white-50">
          <p className="text-right h1">© 2019 IsleBeeGun</p>
        </div>  
      </footer>
    );
  }
}

export default MainFooter;
