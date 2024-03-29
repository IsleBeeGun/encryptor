import React from "react";
import "./EncryptedText.scss";
import { store, provideEncryptedText } from "../../../store/store";
import Algorithm from "../Algorithm";
import { connect } from "react-redux";

class EncryptedText extends React.Component {
  constructor(props) {
    super(props);
    this.handleEncryptedTextChange = this.handleEncryptedTextChange.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }
  async handleEncryptedTextChange(event) {
    await store.dispatch(provideEncryptedText(event.target.value));
    await Algorithm.perform();
  }
  isDisabled() {
    let state = store.getState();
    if (state.key[state.key.length - 1].key === '') {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div className="EncryptedText col text-white">
        <label htmlFor="encrypted-text" className="font-weight-bold">Encrypted text</label>
        <textarea
          value={
            this.props.storeState.encryptedText[
              this.props.storeState.encryptedText.length - 1
            ].encryptedText
          }
          placeholder="Here comes the encrypted text.."
          onChange={this.handleEncryptedTextChange}
          rows="10"
          cols="36"
          className="form-control"
          id="encrypted-text"
          disabled={this.isDisabled()}
        ></textarea>
      </div>
    );
  }
}
export default connect(
  state => ({
    storeState: state
  }),
  dispatch => ({})
)(EncryptedText);
