function RegisterInputForm() {
  return (
    <form action="" className="register-form">
      <div className="register-form-body">
        <input type="text" placeholder="First name" id="input-first-name" />
        <input type="text" placeholder="Last name" id="input-last-name" />
        <input type="email" placeholder="Email" id="input-email" />
        <select name="Country" defaultValue="Country" id="select-country">
          <option value="Country" disabled>
            Country
          </option>
          <option value="Austria">Austria</option>
          <option value="Serbia">Serbia</option>
        </select>
        <select name="City" defaultValue="City" id="select-city">
          <option value="City" disabled>
            City
          </option>
          <option value="Austria">Graz</option>
          <option value="Serbia">Wienna</option>
        </select>
        <input type="password" placeholder="Password" id="input-password" />
        <input
          type="confirmPassword"
          placeholder="Confirm password"
          id="input-confirm-password"
        />
      </div>
    </form>
  );
}
export default RegisterInputForm;
