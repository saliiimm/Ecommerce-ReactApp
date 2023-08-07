import "./Modal.css";
import { Form, Field } from "formik";
import { BsFillCreditCardFill } from "react-icons/bs";

const PaymentForm = () => {
  return (
    <div className="DetailsFormContainer">
      <Form>
        <div className="all">
          <div className="PaymentShipInfos">
            <div>
              <h4>Contact</h4>
              <Field name="emailOrNumber" className="" />
              <h4>Edit</h4>
            </div>
            <div>
              <h4>Ship to</h4>
              <Field className="" />
              <h4>Edit</h4>
            </div>
            <div>
              <h4>method</h4>
              <span className="checkmark">Standard Shipping</span>
              <span>Free</span>
              <h4>Edit</h4>
            </div>
          </div>
          <div className="paymentMethod">
            <h2>Payment method</h2>
            <div className="Creditcard">
              <div className="header">
                <BsFillCreditCardFill />
                <h5>Credit Card</h5>
              </div>
              <div className="cardcontent">
                <Field name="" placeholder="Card Number" />
                <Field name="" placeholder="Holder Name" />
                <div className="field-align two">
                  <Field
                    name=""
                    placeholder="Expiration (MM/YY)"
                    className=""
                  />
                  <Field name="" placeholder="CVV" className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="taxInformations">
            <h2>Tax informations</h2>
            <Field name="" placeholder="VAT number (optional)" className="" />
            <Field name="" placeholder="PEC (optional)" className="" />
          </div>
          <div className="billingAddress">
            <h2>Billing address</h2>
            <div className="twochecksbox">
              <label>
                <input type="checkbox" />
                <span className="checkmark">Same as the shipping address</span>
              </label>
              <label>
                <input type="checkbox" />
                <span className="checkmark">
                  Use a different address for billing
                </span>
              </label>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PaymentForm;
