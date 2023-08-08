import "./Modal.css";
import { Field } from "formik";
import { BsFillCreditCardFill } from "react-icons/bs";

const PaymentForm = () => {
  return (
    <div className="DetailsFormContainer payment">
      <div className="all">
        <div className="PaymentShipInfos">
          <div>
            <h4>Contact</h4>
            <Field name="emailOrNumber" className="" />
            <h4>Edit</h4>
          </div>
          <hr />
          <div>
            <h4>Ship to</h4>
            <Field className="fulladress" name="fulladress" />
            <h4>Edit</h4>
          </div>
          <hr />
          <div>
            <h4>method</h4>
            <span className="checkmark">Standard Shipping</span>
            <span>-Free</span>
            <h4>Edit</h4>
          </div>
        </div>
        <div className="paymentMethod">
          <h3>Payment method</h3>
          <div className="Creditcard">
            <div className="header">
              <BsFillCreditCardFill size={25} />
              <h5>Credit Card</h5>
            </div>
            <div className="cardcontent">
              <Field
                name="cardNumber"
                placeholder="Card Number"
                className="solofield payment first"
              />
              <Field
                name="cardHolder"
                placeholder="Holder Name"
                className="solofield payment"
              />
              <div className="field-align two payment">
                <Field
                  name="cardExpiration"
                  placeholder="Expiration (MM/YY)"
                  className="duofield"
                />
                <Field name="cardCvv" placeholder="CVV" className="duofield" />
              </div>
            </div>
          </div>
        </div>
        <div className="taxInformations">
          <h3>Tax informations</h3>
          <Field
            name="cardVAT"
            placeholder="VAT number (optional)"
            className="solofield"
          />
          <Field
            name="cardVEC"
            placeholder="PEC (optional)"
            className="solofield"
          />
        </div>
        <div className="billingAddress">
          <h3>Billing address</h3>
          <div className="twochecksbox">
            <label>
              <input type="radio" name="same" />
              <span className="checkmark payment">
                Same as the shipping address
              </span>
            </label>
            <hr />
            <label>
              <input type="radio" name="different" />
              <span className="checkmark payment">
                Use a different address for billing
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
