import React, { Component } from "react";

class FormCard extends Component {
  state = {
    cardNumber: "",
    cardHolder: "",
    cardDate: ""
  };
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
              className="form-control"
              placeholder="Card Number"
              pattern="[0-9]{1,16}"
              onInput={this.handleChangeCardNumber.bind(this)}
              value={this.state.cardNumber}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Card Holder"
              pattern="[a-zA-Z ]{1,30}"
              onInput={this.handleChangeCardHolder.bind(this)}
              value={this.state.cardHolder}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="MM/YY"
              pattern="[0-9]{1,4}"
              onInput={this.handleChangeCardDate.bind(this)}
              value={this.state.cardDate}
            />
          </div>
          <div className="form-group col-md-3">
            <input type="text" className="form-control" placeholder="CVC" />
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

  //verification only number not more than 16
  handleChangeCardNumber = evt => {
    //get the previous correct number
    const wrong = evt.target.value
      .toString()
      .substring(0, evt.target.value.toString().length - 1);
    const cardNumber = evt.target.validity.valid ? evt.target.value : wrong;
    this.setState({ cardNumber });
  };

  handleChangeCardHolder = evt => {
    //get the previous correct mot
    const wrong = evt.target.value
      .toString()
      .substring(0, evt.target.value.toString().length - 1);
    const cardHolder = evt.target.validity.valid ? evt.target.value : wrong;
    this.setState({ cardHolder });
  };

  handleChangeCardDate = evt => {
    //get the previous correct number
    const wrong = evt.target.value
      .toString()
      .substring(0, evt.target.value.toString().length - 1);
    const cardDate = evt.target.validity.valid ? evt.target.value : wrong;
    this.setState({ cardDate });
  };
}

export default FormCard;
