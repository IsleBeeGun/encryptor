import React from "react";
import "./RawText.scss";
import store from '../../../store/store';

class RawText extends React.Component {
  render() {
    return (
      <div className="RawText col bg-success text-white">
        <p>Raw text is here</p>
      </div>
    )
  }
}

export default RawText;
