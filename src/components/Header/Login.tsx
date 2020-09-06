import React, { useState } from "react";
import Input from "../common/input";

function Login() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const handleUsername = (e: any) => {
    setAccount({
      ...account,
      username: e.currentTarget.value,
    });
  };
  const handlePassword = (e: any) => {
    setAccount({
      ...account,
      password: e.currentTarget.value,
    });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-container">
        <Input
          name="username"
          label="Username"
          value={account.username}
          type="text"
          onChange={handleUsername}
        />
        <Input
          name="password"
          label="Password"
          value={account.password}
          type="password"
          onChange={handlePassword}
        />
        <button className="login-input login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
