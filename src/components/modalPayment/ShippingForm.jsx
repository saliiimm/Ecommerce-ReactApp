import "./Modal.css";
import { Form, Field } from "formik";

const ShippingForm = ({ formData, setFormData }) => {
  return (
    <div className="DetailsFormContainer">
      <Form>
        <div className="contactShipto">
          <div>
            <h4>Contact</h4>
            <Field name="emailOrNumber" className="contactshipinput" />
            <h4>Edit</h4>
          </div>
          <hr />
          <div>
            <h4>Ship to</h4>
            <Field className="" />
            <h4>Edit</h4>
          </div>
        </div>
        <div className="shippingMethod">
          <h4>Shipping method</h4>
          <div className="shipcheck shipmethod">
            <label>
              <div>
                <input type="radio" />
                <span className="checkmark">Standard Shipping</span>
              </div>

              <span>Free</span>
            </label>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ShippingForm;
