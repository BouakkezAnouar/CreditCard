import React, { Component } from "react";
import { CreditCard } from "./CreditCard";
import FormCard from "./FormCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "9870-1234-5678-6985",
      cardHolder: "Bouakkez Anouar",
      cardDate: "",
      codeSecret: "",
      isValidCardNumber: true,
      isValidCardHolder: true,
      isValidCodeSecret: true,
      isValidCardDate: true
    };
    this.handleChangeCardHolder = this.handleChangeCardHolder.bind(this);
  }
  render() {
    return (
      <div className="container p-5 bg-light">
        <CreditCard
          cardDate={this.state.cardDate}
          cardHolder={this.state.cardHolder}
          cardNumber={this.state.cardNumber}
        />
        <FormCard
          onChangeCardDate={this.handleChangeCardDate}
          onChangeCardCodeSecret={this.handleChangeCardCodeSecret}
          onChangeCardHolder={this.handleChangeCardHolder}
          onChangeCardNumber={this.handleChangeCardNumber}
          cardDate={this.state.cardDate}
          cardHolder={this.state.cardHolder}
          cardNumber={this.state.cardNumber}
          codeSecret={this.state.codeSecret}
          isValidCardDate={this.state.isValidCardDate}
          isValidCardHolder={this.state.isValidCardHolder}
          isValidCardNumber={this.state.isValidCardNumber}
          isValidCodeSecret={this.state.isValidCodeSecret}
        />
      </div>
    );
  }

  //verification only number not more than 16 and format xxxx-xxxx-xxxx-xxxx
  handleChangeCardNumber = evt => {
    //length must be less then 20
    let cardNumber = evt.target.value;
    if (cardNumber.length >= 20) return;
    //accept only numbers => not let user type anything not a number
    cardNumber = cardNumber.replace(/[^0-9]/g, "");
    // automatic insert "-" after 4 caracteres
    if (cardNumber.length >= 4) {
      let chunk = [];
      for (var i = 0, len = cardNumber.length; i < len; i += 4) {
        chunk.push(cardNumber.substr(i, 4));
      }
      cardNumber = chunk.join("-");
    }
    this.setState({
      cardNumber,
      //test with regex conatains only numbers and "-"
      isValidCardNumber: RegExp("[0-9-]{19}").test(cardNumber)
    });
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

  handleChangeCardCodeSecret = evt => {
    //get the previous correct number
    const wrong = evt.target.value
      .toString()
      .substring(0, evt.target.value.toString().length - 1);
    const codeSecret = evt.target.validity.valid ? evt.target.value : wrong;
    this.setState({ codeSecret });
  };
}

export default App;
