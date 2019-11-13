import React from "react";
import "./RawText.scss";
import { store, provideRawText } from "../../../store/store";
import Algorithm from "../Algorithm";
import { connect } from "react-redux";

class RawText extends React.Component {
  constructor(props) {
    super(props);
    this.handleRawTextChange = this.handleRawTextChange.bind(this);
  }
  async handleRawTextChange(event) {
    await store.dispatch(provideRawText(event.target.value));
    await Algorithm.perform();
  }
  render() {
    return (
      <div className="RawText col text-white">
        <label htmlFor="raw-text" className="font-weight-bold">Normal text</label>
        <textarea
          value={
            this.props.storeState.rawText[
              this.props.storeState.rawText.length - 1
            ].rawText
          }
          placeholder="Type here text you wish to encrypt.."
          onChange={this.handleRawTextChange}
          rows="10"
          cols="36"
          className="form-control"
          id = "raw-text"
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    storeState: state
  }),
  dispatch => ({})
)(RawText);
