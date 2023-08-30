import { RegisterFormHeader } from "../index";
import { RegisterFormFooter } from "../index";
import { RegisterInputForm } from "../index";
import { RegisterChoseForm } from "../index";
import { RegisterFinishForm } from "../index";
import { useMultistepForm } from "../../../../hooks/useMultistepForm";

function RegisterForm() {
  const { formStep } = useMultistepForm();

  const formOptions = [
    <RegisterInputForm />,
    <RegisterChoseForm />,
    <RegisterFinishForm />,
  ];

  return (
    <div className="register__main-wrapper">
      <RegisterFormHeader />
      {formOptions[formStep]}
      <RegisterFormFooter />
    </div>
  );
}

export default RegisterForm;
