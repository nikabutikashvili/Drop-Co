import React, { useState } from "react";
import Kitchen from "../../images/kitchen.jpeg";

function Contact() {
  const [state, setState] = useState(true);
  function FormComponent() {
    if (state) {
      return (
        <>
          <h1>Give Us Your Feedback</h1>
          <form className="form-in-contact">
            <input
              className="input-in-contact"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="input-in-contact"
              type="text"
              placeholder="City"
              required
            />
            <input
              className="input-in-contact"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="input-in-contact"
              type="text"
              placeholder="Email"
            />
            <input
              className="input-in-contact"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              className="textarea-in-contact"
              placeholder="Your Feedback goes here..."
              required
            ></textarea>
            <button onClick={HandleState} className="btn-in-contact">
              Send
            </button>
          </form>
        </>
      );
    } else {
      return (
        <div>
          <h1>Thanks</h1>
        </div>
      );
    }
  }
  function HandleState() {
    setState(false);
  }
  return (
    <div className="contact">
      <div className="left-panel-contacr">
        <img className="kitchen-in-contact" src={Kitchen} alt="kitchen" />
      </div>
      <div className="right-panel-contact">
        <FormComponent />
      </div>
    </div>
  );
}

export default Contact;
