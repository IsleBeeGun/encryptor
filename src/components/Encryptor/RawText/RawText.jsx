import React from "react";
import "./RawText.scss";
import {store, provideRawText} from '../../../store/store';
import Algorithm from '../Algorithm';

class RawText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawText: ""
    };
    this.handleRawTextChange = this.handleRawTextChange.bind(this);
  }
  async handleRawTextChange(event) {
    await this.setState({ rawText: event.target.value });
    await store.dispatch(provideRawText(this.state.rawText));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="RawText col bg-success text-white">
        <textarea placeholder="Place your text here" onChange={this.handleRawTextChange} rows="10" cols="36" />
      </div>
    );
  }
}

export default RawText;
