import React from "react";
import "./Key.scss";
import { store, provideKey } from "../../../store/store";
import Algorithm from "../Algorithm";
import {connect} from "react-redux";

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyChange = this.handleKeyChange.bind(this);
  }
  async handleKeyChange(event) {
    await store.dispatch(provideKey(event.target.value));
    await Algorithm.perform();
  }
  render() {
    return (
      <div className="Key row">
        <div className="col bg-warning">
          <input
            type="password"
            placeholder="Password.. "
            onChange={this.handleKeyChange}
          />
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    storeState: state
  }),
  dispatch => ({})
)(Key);
