import React from "react";
import "./Key.scss";
import {store, provideKey} from '../../../store/store';
import Algorithm from '../Algorithm';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    };
    this.handleKeyChange = this.handleKeyChange.bind(this);
  }
  async handleKeyChange(event) {
    await this.setState({ key: event.target.value });
    await store.dispatch(provideKey(this.state.key));
    Algorithm.perform();
  }
  render() {
    return (
      <div className="Key row">
        <div className="col bg-warning">
          <input placeholder="Your password.." onChange={this.handleKeyChange} />
        </div>
      </div>
    );
  }
}

export default Key;
