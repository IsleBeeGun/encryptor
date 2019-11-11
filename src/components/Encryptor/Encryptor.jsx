import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key.jsx";
import RawText from "./RawText/RawText.jsx";
import EncryptedText from "./EncryptedText/EncryptedText.jsx";
import {connect} from "react-redux";

class Encryptor extends React.Component {
  render() {
    console.log(this.props.testStore);
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
// export default Encryptor;
export default connect (
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Encryptor);
