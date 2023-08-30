import { ChangeEvent, useState } from "react";

function RegisterChoseForm() {
  const [registerOption, setRegisterOption] = useState<string>("Share");

  function onValueChange(event: ChangeEvent<HTMLInputElement>) {
    setRegisterOption(event.target.value);
  }

  return (
    <div className="register-chose-form">
      <form action="">
        <div className="register-chose-form__text">
          <span>
            Do you wish to leave your experience or just view the currently
            repored tenants ?
          </span>
        </div>
        <div className="register-chose-form__inputs">
          <label>
            <input
              type="radio"
              value="Share"
              name="register-option"
              checked={registerOption === "Share"}
              onChange={onValueChange}
            />{" "}
            Share exerience
          </label>
          <label>
            <input
              type="radio"
              value="View"
              name="register-option"
              checked={registerOption === "View"}
              onChange={onValueChange}
            />{" "}
            View currently reported tenants
          </label>
        </div>

        <div className="register-chose-form__description">
          {registerOption === "Share" && (
            <span className="register-chose-form__description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Corporis, impedit tempore! Natus asperiores voluptates
              perspiciatis odio.
            </span>
          )}
          {registerOption === "View" && (
            <span className="register-chose-form__description-text">
              You will be able to view the currently reported tenants. If you
              wish to leave your <br /> you will be able to do so.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default RegisterChoseForm;
