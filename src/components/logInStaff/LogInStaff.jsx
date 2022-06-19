import React from "react";
import { TextField, Button } from "@mui/material";

const LogInStaff = () => {
  return (
    <section className="l">
      <div className="l-left">
        <h1>image</h1>
      </div>
      <div className="l-right">
        <form className="l-form">
          <TextField type="text" name="work-id" placeholder="ID" label="ID" />
          <Button>Log In</Button>
        </form>
        <p>Log In for non staff</p>
        <p>Already have an account</p>
      </div>
    </section>
  );
};

export default LogInStaff;
