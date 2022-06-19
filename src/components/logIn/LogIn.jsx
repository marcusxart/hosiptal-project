import React from "react";
import "./logIn.scss";
import { TextField, Button } from "@mui/material";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="l">
      <div className="l-left">
        <h1>image</h1>
      </div>
      <div className="l-right">
        <form className="l-form">
          <TextField
            type="email"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
          />
          <Button>Log In</Button>
        </form>
        <p>Log In for staff</p>
        <p>Create an Account</p>
      </div>
    </section>
  );
};

export default LogIn;
