import { Button, TextField } from "@mui/material";
import "styles/register.css";

const Register = () => {
  return (
    <div className="register_wrapper">
      <div className="text_section">
        <h1>Signup</h1>

        <p>We do not share your personal details with anyone.</p>
      </div>

      <section className="input_section">
        <form action="#">
          <TextField
            className="material_form_input"
            variant="standard"
            label="First Name"
            type="text"
          />

          <TextField
            className="material_form_input"
            variant="standard"
            label="Last Name"
            type="text"
          />

          <TextField
            className="material_form_input"
            variant="standard"
            label="Email"
            type="email"
          />

          <TextField
            className="material_form_input"
            variant="standard"
            label="Password"
            type="password"
          />

          <TextField
            className="material_form_input"
            variant="standard"
            label="Confirm Password"
            type="password"
          />

          <Button
            className="material_form_button"
            color="error"
            variant="contained"
          >
            SignIn
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Register;
