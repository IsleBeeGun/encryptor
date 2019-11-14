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
              placeholder="Type here.."
              onChange={this.handleKeyChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <p className="font-weight-bold" id="spacer">&nbsp;</p>
            </div>
          </div>
          <div className="row">
            <div className="col-fluid">{eyeIcon}</div>
            <div className="col d-flex flex-row-reverse">
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
                <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                <h5 className="modal-title ml-2" id="helpModalTitle">
                  How does this work?
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
              <div className="modal-body">
                <p className="bg-warning pl-2 text-black">
                  <strong>First of all</strong>, you need to input your secret{" "}
                  <strong>key-word</strong> into the password field.
                </p>
                <p>
                  <strong>Then</strong>, you can either encrypt your text, or
                  decrypt previously encrypted text.
                </p>
                <p className="text-success">
                  <strong>For encryption:</strong>
                </p>
                <p className="bg-success pl-2 text-white">
                  Place your text into the green area under{" "}
                  <strong>"Normal Text"</strong> label, receive encrypted text
                  in the red area, under{" "}
                  <strong className="bg-danger">
                    &nbsp;"Encrypted&nbsp;Text"&nbsp;
                  </strong>{" "}
                  label.
                </p>
                <p className="text-danger">
                  <strong>For decryption:</strong>
                </p>
                <p className="bg-danger pl-2 text-white">
                  Place your previously encrypted text into the red area, under{" "}
                  <strong>"Encrypted Text"</strong> label, receive decrypted
                  text in the green area under{" "}
                  <strong className="bg-success">
                    &nbsp;"Normal&nbsp;Text"&nbsp;
                  </strong>{" "}
                  label.{" "}
                </p>
                <p className="text-info">
                  <strong>Also notice:</strong>
                </p>
                <p>
                  You can change your password/key-word anytime you like, but
                  the changes won't appear immediately. In order to see changes,
                  you should continue typing inside{" "}
                  <strong className="bg-success text-white">
                    &nbsp;"Normal&nbsp;Text"&nbsp;
                  </strong>{" "}
                  or{" "}
                  <strong className="bg-danger text-white">
                    &nbsp;"Encrypted&nbsp;Text"&nbsp;
                  </strong>{" "}
                  field, you'll see your text rearranged by new password shortly
                  after.{" "}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
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
