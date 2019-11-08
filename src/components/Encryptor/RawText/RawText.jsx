import React from "react";
import "./RawText.scss";
import store from "../../../store/store";
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
    await store.dispatch(store.provideRawText(this.state.rawText));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="RawText col bg-success text-white">
        <p>Raw text is here</p>
      </div>
    );
  }
}

export default RawText;
