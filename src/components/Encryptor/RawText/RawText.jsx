import React from "react";
import "./RawText.scss";
import {store, provideRawText} from '../../../store/store';
import Algorithm from '../Algorithm';
import {connect} from "react-redux";

class RawText extends React.Component {
  constructor(props) {
    super(props);
    this.handleRawTextChange = this.handleRawTextChange.bind(this);
  }
  async handleRawTextChange(event) {
    await store.dispatch(provideRawText(event.target.value));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="RawText col bg-success text-white">
        <textarea defaultValue={this.props.storeState.rawText[this.props.storeState.rawText.length - 1].rawText} onChange={this.handleRawTextChange} rows="10" cols="36" />
      </div>
    );
  }
}

export default connect (
  state => ({
    storeState: state
  }),
  dispatch => ({})
)(RawText);
