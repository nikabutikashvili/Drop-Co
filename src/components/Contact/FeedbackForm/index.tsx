import * as React from "react";

interface Props {
  inputValues: {
    name: string;
    city: string;
    phoneNumber: string;
    email: string;
    subject: string;
    feedback: string;
  };
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const FeedbackForm: React.FC<Props> = ({
  inputValues,
  handleChange,
  onSubmit,
}) => {
  return (
    <>
      <h1>Give Us Your Feedback</h1>
      <form className="form-in-contact">
        <input
          className="input-in-contact"
          type="text"
          placeholder="Name"
          required
          value={inputValues.name}
          onChange={handleChange}
          name="name"
        />
        <input
          className="input-in-contact"
          type="text"
          placeholder="City"
          required
          value={inputValues.city}
          onChange={handleChange}
          name="city"
        />
        <input
          className="input-in-contact"
          type="text"
          placeholder="Phone Number"
          value={inputValues.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        <input
          className="input-in-contact"
          type="text"
          placeholder="Email"
          value={inputValues.email}
          onChange={handleChange}
          name="email"
        />
        <input
          className="input-in-contact"
          type="text"
          placeholder="Subject"
          required
          value={inputValues.subject}
          onChange={handleChange}
          name="subject"
        />
        <textarea
          className="textarea-in-contact"
          placeholder="Your Feedback goes here..."
          required
          value={inputValues.feedback}
          onChange={handleChange}
          name="feedback"
        ></textarea>
        <button onClick={onSubmit} className="btn-in-contact">
          Send
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
