import React from "react";

const SingUp = () => {
  return (
    <div className="register-box">
      <div className="register-container">
        <h1>Sing Up</h1>
        <form className="register-form">
          <label>Firstname</label>
          <input className="register-input" type="text" />
          <br />
          <label>Lastname</label>
          <input className="register-input" type="text" />
          <br />
          <label>Email</label>
          <input className="register-input" type="email" />
          <br />
          <label>Password</label>
          <input className="register-input" type="password" />
          <br />
          <input
            className="register-input register-submit"
            type="submit"
            value="Sing Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SingUp;
