import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key";
import RawText from "./RawText/RawText";
import EncryptedText from "./EncryptedText/EncryptedText";

class Encryptor extends React.Component {
  render() {
    return <div className="Encryptor">
      <p>test1</p>
      <Key />
      <RawText />
      <EncryptedText />
      <p>test2</p>
    </div>;
  }
}

export default Encryptor;
