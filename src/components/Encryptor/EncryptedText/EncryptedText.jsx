import React from "react";
import "./EncryptedText.scss";
import {store, provideEncryptedText} from '../../../store/store';
import Algorithm from "../Algorithm";

class EncryptedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedText: ""
    };
    this.handleEncryptedTextChange = this.handleEncryptedTextChange.bind(this);
  }
  async handleEncryptedTextChange(event) {
    await this.setState({ encryptedText: event.target.value });
    await store.dispatch(provideEncryptedText(this.state.encryptedText));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="EncryptedText col bg-danger text-white">
        <textarea placeholder="Your encrypted text will appear here.." onChange={this.handleEncryptedTextChange} rows="5" cols="33" />
      </div>
    );
  }
}

export default EncryptedText;
