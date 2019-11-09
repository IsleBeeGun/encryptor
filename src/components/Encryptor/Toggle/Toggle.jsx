import React from "react";
import "./Toggle.scss";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "encrypt"
    };
    this.handleToggleChange = this.handleToggleChange.bind(this);
  }
  async handleToggleChange(event) {
    await this.setState({ toggle: event.target.value });
    // console.clear();
    // console.log(`%c${this.state.toggle}`, 'background: #000; color: #0f0');
  }
  render() {
    return (
      <div className="Toggle row">
        <div className="col bg-info">
          <div className="switch bg-light">
            <input
              type="radio"
              className="switch-input"
              name="view"
              value="encrypt"
              id="encrypt"
              onChange={this.handleToggleChange}
              defaultChecked
            />
            <label htmlFor="encrypt" className="switch-label switch-label-off">
              Encrypt
            </label>
            <input
              type="radio"
              className="switch-input"
              name="view"
              value="decrypt"
              id="decrypt"
              onChange={this.handleToggleChange}
            />
            <label htmlFor="decrypt" className="switch-label switch-label-on">
              Decrypt
            </label>
            <span className="switch-selection"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Toggle;
