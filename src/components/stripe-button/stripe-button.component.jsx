import React from "react";
import StripCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey = "pk_test_oEGvZIQyIoMD4OJ37IfvypFQ00T0cRYiNc";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
