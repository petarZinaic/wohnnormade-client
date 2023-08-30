import Button from "../../../../components/Button/Button";
import { ButtonType, ButtonSize } from "../../../../components/Button/types";
import { useMultistepForm } from "../../../../hooks/useMultistepForm";

function RegisterFormFooter() {
  const { formStep, nextFormStep, previousFormStep, register } =
    useMultistepForm();

  return (
    <div
      className={`register-form-footer ${formStep === 0 ? "step-1" : "step"}`}
    >
      {formStep === 0 && (
        <div className="register-form-footer__text">
          <p id="register-form-footer-text">
            Password should contain minimum of 8 characters and 4 diferent
            character classes. Classes of characters, Lower Case, Upper Case,
            Digits and Special Characters.
          </p>
        </div>
      )}
      {formStep !== 0 && (
        <Button
          buttonType={ButtonType.PRIMARY}
          buttonSize={ButtonSize.MEDIUM}
          disabled={false}
          text="Back"
          onClick={previousFormStep}
        />
      )}
      {formStep !== 2 && (
        <Button
          buttonType={ButtonType.PRIMARY}
          buttonSize={ButtonSize.MEDIUM}
          disabled={false}
          text="Next"
          onClick={nextFormStep}
        />
      )}

      {formStep === 2 && (
        <Button
          buttonType={ButtonType.PRIMARY}
          buttonSize={ButtonSize.MEDIUM}
          disabled={false}
          text="Register"
          onClick={register}
        />
      )}
    </div>
  );
}

export default RegisterFormFooter;
