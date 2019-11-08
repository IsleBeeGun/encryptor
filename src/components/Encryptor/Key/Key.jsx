import React from "react";
import "./Key.scss";
import store from '../../../store/store';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleEncryption = this.handleEncryption.bind(this);
    this.handleKeyChange = this.handleKeyChange.bind(this);
  }
  handleEncryption() {
    // this.props.searchGoogle(this.state.keyword, this.state.type, this.state.sortBy);
  }
  async handleKeyChange(event) {
    await this.setState({ key: event.target.value });
    this.handleEncryption();
  }
  render() {
    return (
      <div className="Key row">
        <div className="col bg-warning">
          <input placeholder="Type your password here.." onChange={this.handleKeyChange} />
        </div>
      </div>
    );
  }
}

export default Key;
