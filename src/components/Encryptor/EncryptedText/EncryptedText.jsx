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
    this.getEncryptedText = this.getEncryptedText.bind(this);
  }
  async handleEncryptedTextChange(event) {
    await this.setState({ encryptedText: event.target.value });
    await store.dispatch(provideEncryptedText(this.state.encryptedText));
    Algorithm.perform();
  }
  async getEncryptedText() {
    let state = store.getState();
    await this.setState({ encryptedText: state.encryptedText[state.encryptedText.length - 1].encryptedText });
  }
  render() {
    return (
      <div className="EncryptedText col bg-danger text-white">
        <textarea value={this.state.encryptedText} onChange={this.handleEncryptedTextChange} rows="10" cols="36" />
      </div>
    );
  }
}

export default EncryptedText;
