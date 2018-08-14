import React, { Component } from "react";

const CreditNumber = ({ cardNumber }) => {
  return <p className=" ml-5 credit-number mt-2">{cardNumber}</p>;
};

const CardHolder = ({ cardHolder }) => {
  return <p className="lead">{cardHolder}</p>;
};

const CardDate = ({ cardDate }) => {
  return (
    <div className="d-flex ">
      <div className="valid-thur mt-3">
        <p className="m-0 f-s-10">Valid</p>
        <p className="m-0 f-s-10">Thur</p>
      </div>
      <div>
        <p className="m-0 f-s-10">MONTH/YEAR</p>
        <p className="ml-4 ">{cardDate}</p>
      </div>
    </div>
  );
};

export const CreditCard = props => (
  <div className="CreditCard p-3  m-auto col-md-6">
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
    <CreditNumber cardNumber={props.cardNumber} />
    <div className="d-flex justify-content-around">
      <CardHolder cardHolder={props.cardHolder} />
      <CardDate cardDate={props.cardDate} />
    </div>
  </div>
);
