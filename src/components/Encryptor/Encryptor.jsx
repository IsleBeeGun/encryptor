import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key.jsx";
import RawText from "./RawText/RawText.jsx";
import EncryptedText from "./EncryptedText/EncryptedText.jsx";

class Encryptor extends React.Component {
  render() {
    return (
      <div className="Encryptor row">
        <div className="col">
          <Key />
          <div className="row">
            <RawText />
            <EncryptedText />
          </div>
        </div>
      </div>
    );
  }
}
export default Encryptor;
