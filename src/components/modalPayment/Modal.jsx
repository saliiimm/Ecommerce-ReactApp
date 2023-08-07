import "./Modal.css";
import logoNav from "../../assets/logoNav.svg";
import DetailsForm from "./DetailsForm";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import PriceCoupon from "./PriceCoupon";
import { useState, useEffect, useRef } from "react";
import { Formik, Form } from "formik";

const Modal = (props) => {
  const [page, setPage] = useState(1);

  const ModelRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ModelRef.current && !ModelRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ModelRef]);

  const [formData, setFormData] = useState({
    //DetailsForm:
    emailOrNumber: "",
    newsletter: false,
    name: "",
    secondName: "",
    adressAndNumber: "",
    shippingNote: "",
    city: "",
    postalCode: "",
    province: "",
    country: "",

    //ShippingForm :
    contact: "",
    shipTo: "",
    shippingMethod: false,

    //PaymentForm:
    cardNumber: "",
    cardHolder: "",
    cardExpiration: "",
    cardCvv: "",
    cardVAT: "",
    cardVEC: "",
    same: true,
    different: false,
  });

  const FormTitles = ["Cart", "Details", "Shipping", "Payment"];

  const PageDisplay = () => {
    if (page === 1) {
      return <DetailsForm formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <ShippingForm formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PaymentForm formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal" ref={ModelRef}>
        <div className="form">
          <div className="progressBar">
            <img src={logoNav} alt="CandleLeafLogo" />
            <h3>
              <span>Cart</span> &gt;<span className="Details">Details</span>{" "}
              &gt;
              <span className="Shipping">Shipping</span> &gt;
              <span className="Payment">Payment</span>
            </h3>
          </div>
          <div className="forms">
            <Formik
              initialValues={{
                //DetailsForm:
                emailOrNumber: "",
                newsletter: false,
                name: "",
                secondName: "",
                adressAndNumber: "",
                shippingNote: "",
                city: "",
                postalCode: "",
                province: "",
                country: "",
                checkout: false,

                //ShippingForm :
                fulladress: "",
                contact: "",
                shipTo: "",
                shippingMethod: false,

                //PaymentForm:
                cardNumber: "",
                cardHolder: "",
                cardExpiration: "",
                cardCvv: "",
                cardVAT: "",
                cardVEC: "",
                same: true,
                different: false,
              }}
              onSubmit={(values) => setFormData(values)}>
              <div className="tout">
                <Form>
                  <div className="formcomplet">{PageDisplay()}</div>
                </Form>

                <div className="footer">
                  <button
                    className="button-previous"
                    onClick={() => {
                      if (page === 1) {
                        onClose();
                      } else {
                        setPage((prev) => prev - 1);
                      }
                    }}>
                    Back to {FormTitles[page - 1]}
                  </button>
                  <button
                    className="button-next"
                    onClick={() => {
                      if (page === FormTitles.length - 1) {
                        console.log(formData);
                        onClose();
                      } else {
                        setPage((prev) => prev + 1);
                      }
                    }}>
                    {page === FormTitles.length - 1
                      ? "Pay Now"
                      : `Go to ${FormTitles[page + 1]}`}
                  </button>
                </div>
              </div>
            </Formik>
          </div>
        </div>
        <PriceCoupon candels={props.candels} />
      </div>
    </div>
  );
};

export default Modal;
