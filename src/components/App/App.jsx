import React from "react";
import "./App.scss";
import MainHeader from "../MainHeader/MainHeader.jsx";
import Encryptor from "../Encryptor/Encryptor.jsx";
import MainFooter from "../MainFooter/MainFooter.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App container shadow-lg">
          <MainHeader />
          <Encryptor />
          <MainFooter />
        </div>
      </div>
    );
  }
}
export default App;
