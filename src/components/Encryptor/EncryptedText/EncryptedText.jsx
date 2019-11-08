import React from "react";
import "./EncryptedText.scss";
import store from "../../../store/store";
import Algorithm from '../Algorithm';

class EncryptedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encryptedText: ""
    };
    this.handleEncryptedTextChange = this.handleEncryptedTextChange.bind(this);
  }
  async handleKeyChange(event) {
    await this.setState({ encryptedText: event.target.value });
    await store.dispatch(store.provideEncryptedText(this.state.encryptedText));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="EncryptedText col bg-danger text-white">
        <p>Encrypted Text is here</p>
      </div>
    );
  }
}

export default EncryptedText;
