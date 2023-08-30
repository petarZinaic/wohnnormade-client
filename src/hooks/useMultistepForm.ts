import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

export function useMultistepForm() {
  const { formStep, setFormStep } = useContext(RegisterContext);
  
  function nextFormStep() {
    if (formStep === 2) return;

    setFormStep((prevStep: number) => prevStep + 1);
  }

  function previousFormStep() {
    if (formStep === 0) return;

    setFormStep((prevStep: number) => prevStep - 1);
  }

  function register() {
    console.log("New user registrated!")
  }

  return {
    formStep,
    nextFormStep,
    previousFormStep,
    register
  };
}
