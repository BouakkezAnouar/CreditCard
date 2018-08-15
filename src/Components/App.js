import React, { Component } from "react";
import { CreditCard } from "./CreditCard";
import FormCard from "./FormCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "9870-1234-5678-6985",
      cardHolder: "BOUAKKEZ ANOUAR",
      cardDate: "MM/YY",
      codeSecret: "",
      isValidCardNumber: true,
      isValidCardHolder: true,
      isValidCodeSecret: false,
      isValidCardDate: false
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
    //length must be less then 20
    let cardHolder = evt.target.value;
    if (cardHolder.length >= 20) return;
    //accept only alphabets => not let user type anything not a number
    cardHolder = cardHolder.replace(/[^a-zA-Z ]/g, "").toUpperCase();
    // automatic insert "-" after 4 caracteres

    this.setState({
      cardHolder,
      //test with regex contains only uppercase and espace
      isValidCardHolder: RegExp("[A-Z ]{20}").test(cardHolder)
    });
  };

  handleChangeCardDate = evt => {
    //length must be less then 5
    let cardDate = evt.target.value;
    if (cardDate.length >= 6) return;
    //accept only date => not let user type anything not a number
    cardDate = cardDate.replace(/[^0-9]/g, "");
    // automatic insert "/" after 2 numbers

    let testMois =
      cardDate.substr(0, 2) > 0 && cardDate.substr(0, 2) <= 12 ? true : false;
    let testAnnee =
      cardDate.substr(2) >= 18 && cardDate.substr(2) <= 25 ? true : false;

    console.log(cardDate);
    if (cardDate.length >= 3) {
      cardDate = cardDate.substr(0, 2) + "/" + cardDate.substr(2);
    }

    let testRegex = RegExp("[0-9/]{5}").test(cardDate);

    this.setState({
      cardDate,
      //test with regex contains only Dates and "-"
      isValidCardDate: testMois && testAnnee && testRegex
    });
  };

  handleChangeCardCodeSecret = evt => {
    //length must be less then 5
    let codeSecret = evt.target.value;
    if (codeSecret.length >= 5) return;
    //accept only numbers
    codeSecret = codeSecret.replace(/[^0-9]/g, "");

    this.setState({
      codeSecret,
      //test with regex contains only 4 numbers
      isValidCodeSecret: RegExp("[0-9]{4}").test(codeSecret)
    });
  };
}
export default App;
