import { useMultistepForm } from "../../../../hooks/useMultistepForm";

function RegisterHeader() {
  const { formStep } = useMultistepForm();

  return (
    <div className="register__content-form-header">
      <div
        className={`${
          formStep === 0
            ? "register__content-form-header-step--active"
            : "register__content-form-header-step"
        }`}
      >
        1
      </div>
      <div
        className={`${
          formStep === 1
            ? "register__content-form-header-step--active"
            : "register__content-form-header-step"
        }`}
      >
        2
      </div>
      <div
        className={`${
          formStep === 2
            ? "register__content-form-header-step--active"
            : "register__content-form-header-step"
        }`}
      >
        3
      </div>
    </div>
  );
}

export default RegisterHeader;
