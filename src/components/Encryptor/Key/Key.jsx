import React from "react";
import "./Key.scss";
import { store, provideKey } from "../../../store/store";
import Algorithm from "../Algorithm";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: "password"
    };
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleEyeClick = this.handleEyeClick.bind(this);
  }
  async handleKeyChange(event) {
    await store.dispatch(provideKey(event.target.value));
    await Algorithm.perform();
  }
  async handleEyeClick() {
    if (this.state.showPassword === "password") {
      await this.setState({
        showPassword: "text"
      });
    } else {
      await this.setState({
        showPassword: "password"
      });
    }
  }
  render() {
    let eyeIcon; // Here icon is changed from faEye to faEyeSlah depending on showPassword state
    if (this.state.showPassword === "password") {
      eyeIcon = (
        <FontAwesomeIcon
          icon={faEye}
          id="eye"
          aria-hidden="true"
          onClick={this.handleEyeClick}
        />
      );
    } else {
      eyeIcon = (
        <FontAwesomeIcon
          icon={faEyeSlash}
          id="eye"
          aria-hidden="true"
          onClick={this.handleEyeClick}
        />
      );
    }
    return (
      <div className="Key row">
        <div className="col bg-warning">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold" >Password</label>
                <input
                  type={this.state.showPassword}
                  id="password"
                  placeholder="Password.. "
                  onChange={this.handleKeyChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col bg-warning">{eyeIcon}</div>
          </div>
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
