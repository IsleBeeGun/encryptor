import React from "react";
import "./App.scss";
import MainHeader from "../MainHeader/MainHeader.jsx";
import Encryptor from "../Encryptor/Encryptor.jsx";
import MainFooter from "../MainFooter/MainFooter.jsx";
//import { Navbar } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid h-100">
        <MainHeader />
        <Encryptor />
        <MainFooter />
      </div>
    );
  }
}
export default App;
