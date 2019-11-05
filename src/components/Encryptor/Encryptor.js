import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key";
import RawText from "./RawText/RawText";
import EncryptedText from "./EncryptedText/EncryptedText";

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
