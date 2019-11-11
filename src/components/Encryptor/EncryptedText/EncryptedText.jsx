import React from "react";
import "./EncryptedText.scss";
import {store, provideEncryptedText} from '../../../store/store';
import Algorithm from "../Algorithm";

class EncryptedText extends React.Component {
  constructor(props) {
    super(props);
    this.handleEncryptedTextChange = this.handleEncryptedTextChange.bind(this);
  }
  async handleEncryptedTextChange(event) {
    await store.dispatch(provideEncryptedText(event.target.value ));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="EncryptedText col bg-danger text-white">
        <textarea defaultValue={this.props.encryptedText} onChange={this.handleEncryptedTextChange} rows="10" cols="36" >
        </textarea>
      </div>
    );
  }
}
export default EncryptedText;
