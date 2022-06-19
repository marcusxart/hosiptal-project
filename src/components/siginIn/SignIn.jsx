import React from "react";
import { TextField, Button } from "@mui/material";
const SignIn = () => {
  return (
    <section className="l">
      <div className="l-left">
        <h1>image</h1>
      </div>
      <div className="l-right">
        <form className="l-form">
          <TextField type="text" name="name" placeholder="Name" label="Name" />
          <TextField
            type="text"
            name="surname"
            placeholder="Surname"
            label="Surname"
          />
          <TextField type="date" name="DOB" />
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
          <Button>Sign In</Button>
        </form>
        <p>Log In for staff</p>
        <p>Already have an account</p>
      </div>
    </section>
  );
};

export default SignIn;
