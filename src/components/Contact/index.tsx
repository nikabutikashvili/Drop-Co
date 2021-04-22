import * as React from "react";

import Kitchen from "../../assets/images/kitchen.jpeg";
import FeedbackForm from "./FeedbackForm";

import "./styles.css";

const Contact: React.FC = () => {
  const [showForm, setShowForm] = React.useState<boolean>(true);
  const [inputValues, setInputValues] = React.useState({
    name: "",
    city: "",
    phoneNumber: "",
    email: "",
    subject: "",
    feedback: "",
  });

  const handleSubmit = (): void => {
    if (
      inputValues.name === "" ||
      inputValues.city === "" ||
      inputValues.email === "" ||
      inputValues.subject === "" ||
      inputValues.feedback === ""
    ) {
      return null;
    }
    setShowForm(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValues({
      ...inputValues,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="contact">
      <div className="left-panel-contacr">
        <img className="kitchen-in-contact" src={Kitchen} alt="kitchen" />
      </div>
      <div className="right-panel-contact">
        {showForm ? (
          <FeedbackForm
            inputValues={inputValues}
            handleChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : (
          <div>
            <h1>Thanks</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
