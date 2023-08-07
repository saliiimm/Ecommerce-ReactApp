import "./Modal.css";
import { Form, Field, ErrorMessage } from "formik";

const DetailsForm = ({ formData, setFormData }) => {
  return (
    <div className="DetailsFormContainer">
      <Form className="formofXPart">
        <div className="contactForm">
          <h4>Contact</h4>
          <p>
            Do you have an account? <span>Login</span>
          </p>
        </div>
        <Field
          name="emailOrNumber"
          placeholder="Email or mobile phone number"
          className="solofield"
        />
        <div className="check contact">
          <label>
            <input type="checkbox" />
            <span className="checkmark">
              Add me to Candleaf newsletter for a 10% discount
            </span>
          </label>
        </div>
        <ErrorMessage name="emailOrNumber" component="div" />
        <div className="shippingAddress">
          <h4>Shipping Address</h4>
          <div className="field-align two">
            <Field name="name" placeholder="Name" className="duofield" />
            <Field
              name="secondName"
              placeholder="Second Name"
              className="duofield"
            />
          </div>
          <Field
            name="adressAndNumber"
            placeholder="Adress and number"
            className="solofield"
          />
          <Field
            name="shippingNote"
            placeholder="Shipping note(optional)"
            className="solofield"
          />
          <div className="field-align three">
            <Field name="city" placeholder="City" className="triofield" />
            <Field
              name="postalCode"
              placeholder="Postal Code"
              className="triofield"
            />
            <Field
              as="select"
              name="province"
              placeholder="Province"
              className="triofield select">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </div>
          <Field
            as="select"
            name="country"
            placeholder="Country"
            className="selectCountry">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <div className="check contact">
            <label>
              <input type="checkbox" />
              <span className="checkmark">
                Save this information for a future fast checkout
              </span>
            </label>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DetailsForm;
