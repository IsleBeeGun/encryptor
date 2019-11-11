import React from "react";
import "./RawText.scss";
import {store, provideRawText} from '../../../store/store';
import Algorithm from '../Algorithm';

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
        <textarea defaultValue={this.props.rawText} onChange={this.handleRawTextChange} rows="10" cols="36" />
      </div>
    );
  }
}

export default RawText;
