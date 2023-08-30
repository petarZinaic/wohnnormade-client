import { RegisterForm } from "./components";

function RegisterPage() {
  return (
    <div className="register">
      <div className="register__header">
        <h1>Registration</h1>
        <p>
          In order to see the list of bad tenants or leave your experience to
          help others, <br /> registration is needed.{" "}
          <span id="register-page-span">We value our communities privacy.</span>
        </p>
      </div>

      <div className="register__main">
        <RegisterForm />
        <div className="register__main-image"></div>
      </div>
    </div>
  );
}

export default RegisterPage;
