import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

export interface errors {
  username?: string;
  password?: string;
}

function LoginForm() {
  const [user, setUser] = useContext(UserContext);
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
    if (errors) return;
    console.log(user);
    // window.location.href = "/";
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
  const { account } = user;
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={account.username}
            onChange={handleChange}
            id="username"
            name="username"
            type="text"
            className="form-control"
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
            type="text"
            className="form-control"
            placeholder="Password"
          />
          {user.errors.password && <div>{user.errors.password} </div>}
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

// export interface errors {
//   username?: string;
//   password?: string;
// }
// export interface state {
//   account: {
//     username: string;
//     password: string;
//   };
//   errors: {
//     username?: string;
//     password?: string;
//   };
// }
// class LoginForm extends React.Component {
//   static contextType = UserContext;
//   state: state = {
//     account: {
//       username: "",
//       password: "",
//     },
//     errors: {},
//   };

//   validate = () => {
//     const errors: errors = {};
//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required";
//     if (account.password.trim() === "")
//       errors.password = "Password is required";
//     return Object.keys(errors).length === 0 ? null : errors;
//   };
//   handleSubmit = (e: any) => {
//     e.preventDefault(); //prevents whole page reload when submitted
//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;
//     console.log(this.context);
//     // window.location.href = "/";
//     //call the server
//   };
//   validateProperty = (input: any) => {
//     if (input.name === "username") {
//       if (input.value.trim() === "") return "Username is required";
//     }
//     if (input.name === "password") {
//       if (input.value.trim() === "") return "Password is required";
//     }
//   };
//   handleChange = (e: any) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(e.currentTarget);
//     if (errorMessage) errors[e.currentTarget.name] = errorMessage;
//     else delete errors[e.currentTarget.name];

//     const account = { ...this.state.account };
//     account[e.currentTarget.name] = e.currentTarget.value;
//     this.setState({ account, errors });
//   };
//   render() {
//     const { account } = this.state;
//     return (
//       <div>
//         <h1 className="text-center">Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               value={account.username}
//               onChange={this.handleChange}
//               id="username"
//               name="username"
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               autoFocus
//             />
//             {this.state.errors.username && (
//               <div>{this.state.errors.username} </div>
//             )}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               value={account.password}
//               onChange={this.handleChange}
//               id="password"
//               name="password"
//               type="text"
//               className="form-control"
//               placeholder="Password"
//             />
//             {this.state.errors.password && (
//               <div>{this.state.errors.password} </div>
//             )}
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

const data = [
  {
    username: "Nika",
    passowrd: "1234",
  },
  {
    username: "John",
    passowrd: 1234,
  },
  {
    username: "Michael",
    passowrd: 1234,
  },
  {
    username: "Nick",
    passowrd: 1234,
  },
  {
    username: "Joey",
    passowrd: 1234,
  },
];

export default LoginForm;
