import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
import { IsUserContext } from "../IsUserContext";

export interface errors {
  username?: string;
  password?: string;
}

const LoginForm = () => {
  const [user, setUser] = useContext(UserContext);
  const [isUser, setIsUser] = useContext(IsUserContext);

  const validate = () => {
    const errors: errors = {};
    const { account } = user;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); //prevents whole page reload when submitted
    const errors = validate();
    setUser({ errors: errors || {} });
    setIsUser(true);
    if (errors) return;
    window.location.href = "/";
    //call the server
  };

  const validateProperty = (input: HTMLInputElement) => {
    if (input.name === "username") {
      if (input.value.trim() === "") return "Username is required";
    }
    if (input.name === "password") {
      if (input.value.trim() === "") return "Password is required";
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const errors = { ...user.errors };
    const errorMessage = validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const account = { ...user.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    setUser({ account, errors });
  };

  const handleUser = () => {
    setIsUser(true);
  };

  const { account } = user;
  return (
    <div className="login">
      <div className="green-background"></div>
      <form onSubmit={handleSubmit} className="login-container">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={account.username}
            onChange={handleChange}
            id="username"
            name="username"
            type="text"
            className="input-style"
            placeholder="Username"
            autoFocus
          />
          {user.errors.username && <div>{user.errors.username} </div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={account.password}
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            className="input-style"
            placeholder="Password"
          />
          {user.errors.password && <div>{user.errors.password} </div>}
        </div>
        <button className="btn" onClick={handleUser}>
          Login
        </button>
      </form>
      <div className="yellow-background"></div>
    </div>
  );
};

export default LoginForm;
