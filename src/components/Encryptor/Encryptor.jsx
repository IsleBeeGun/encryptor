import React from "react";
import "./Encryptor.scss";
import Key from "./Key/Key.jsx";
import RawText from "./RawText/RawText.jsx";
import EncryptedText from "./EncryptedText/EncryptedText.jsx";
import {connect} from "react-redux";

class Encryptor extends React.Component {
  render() {
    console.log(this.props.storeState);
    return (
      <div className="Encryptor row">
        <div className="col">
          <Key />
          <div className="row">
            <RawText rawText={this.props.storeState.rawText[this.props.storeState.rawText.length - 1].rawText}/>
            <EncryptedText encryptedText={this.props.storeState.encryptedText[this.props.storeState.encryptedText.length - 1].encryptedText}/>
          </div>
        </div>
      </div>
    );
  }
}
// export default Encryptor;
export default connect (
  state => ({
    storeState: state
  }),
  dispatch => ({})
)(Encryptor);
