import React from "react";
import "./Key.scss";
import { store, provideKey } from "../../../store/store";
import Algorithm from "../Algorithm";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <div className="Key row bg-warning">
        <div className="col">
          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">
              Password
            </label>
            <input
              type={this.state.showPassword}
              id="password"
              placeholder="Provide your password.."
              onChange={this.handleKeyChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p className="font-weight-bold">&nbsp;</p>
            </div>
          </div>
          <div className="row">
            <div className="col-fluid">{eyeIcon}</div>
            <div className="col d-flex flex-row-reverse align-items-center">
              <a
                role="button"
                className="btn btn-dark btn-lg ml-2"
                href="https://github.com/IsleBeeGun/encryptor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <button
                type="button"
                data-toggle="modal"
                data-target="#helpModal"
                className="btn btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
              </button>
            </div>
          </div>
        </div>
        {/* Modal message */}
        <div
          className="modal fade"
          id="helpModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="helpModalTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="helpModalTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
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
