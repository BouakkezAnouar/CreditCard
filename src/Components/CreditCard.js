import React, { Component } from "react";

const CreditNumber = () => {
  return <p className=" ml-5 credit-number mt-2">6554 5555 5555 5555</p>;
};

const CardHolder = () => {
  return <p className="lead"> Bouakkez Anouar</p>;
};

const CardDate = () => {
  return (
    <div className="d-flex ">
      <div className="valid-thur mt-3">
        <p className="m-0 f-s-10">Valid</p>
        <p className="m-0 f-s-10">Thur</p>
      </div>
      <div>
        <p className="m-0 f-s-10">MONTH/YEAR</p>
        <p className="ml-4 ">12/22</p>
      </div>
    </div>
  );
};

export class CreditCard extends Component {
  state = {};
  render() {
    return (
      <div className="CreditCard p-3 col-md-6 m-auto h-50 ">
        <div className="master-card-logo-container">
          <img
            className="master-card-logo"
            src={require("../res/mastercard.png")}
            alt="master-card-logo"
            height="50"
            width="80"
          />
        </div>
        <img
          className="chip ml-3"
          src={require("../res/chip.png")}
          alt="master-card-logo"
          height="50"
          width="50"
        />
        <CreditNumber />
        <div className="d-flex justify-content-around">
          <CardHolder />
          <CardDate />
        </div>
      </div>
    );
  }
}
