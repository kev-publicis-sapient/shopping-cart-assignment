import { Button, TextField } from "@mui/material";
import "styles/signin.css";

const SignIn = () => {
  return (
    <div className="signin-wrapper">
      <section className="text_section">
        <h1>SignIn</h1>

        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </section>

      <section className="input_section">
        <form action="#">
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

export default SignIn;
