import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key.jsx";
import Toggle from "./Toggle/Toggle.jsx";
import RawText from "./RawText/RawText.jsx";
import EncryptedText from "./EncryptedText/EncryptedText.jsx";
// import {store} from "../../store/store";

class Encryptor extends React.Component {
  render() {
    return (
      <div className="Encryptor row">
        <div className="col">
          <Key />
          <Toggle />
          <div className="row">
            <RawText />
            <EncryptedText />
          </div>
        </div>
      </div>
    );
  }
}
// store.subscribe( () => { EncryptedText.update() }) ;
export default Encryptor;
