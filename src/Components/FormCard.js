import React, { Component } from "react";

class FormCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="no-gutters col-md-8 m-auto h-50 pt-5 justify-content-center">
        <p className="lead text-muted">
          Start typing your information in the credit card
        </p>
        <div className="row no-gutters">
          <div className="form-group col-md-6">
            <input
              type="text"
              className={"form-control ".concat(
                this.props.isValidCardNumber === true
                  ? "is-valid"
                  : "is-invalid"
              )}
              placeholder="Card Number"
              pattern="[0-9 ]{1,20}"
              onChange={this.props.onChangeCardNumber}
              value={this.props.cardNumber}
            />
            <div
              className={
                this.props.isValidCardNumber
                  ? "valid-feedback"
                  : "invalid-feedback"
              }
            >
              {this.props.isValidCardNumber
                ? "Looks good!"
                : "must be in this form xxxx-xxxx-xxxx-xxxx"}
            </div>
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Card Holder"
              pattern="[a-zA-Z ]{1,30}"
              onChange={this.props.onChangeCardHolder}
              value={this.props.cardHolder}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="MM/YY"
              pattern="[0-9]{1,4}"
              onChange={this.props.onChangeCardDate}
              value={this.props.cardDate}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="CVC"
              pattern="[0-9]{1,4}"
              onChange={this.props.onChangeCardCodeSecret}
              value={this.props.codeSecret}
            />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
