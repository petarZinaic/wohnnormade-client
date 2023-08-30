import { createContext, ReactNode, useState } from "react";

interface RegisterContextState {
  formStep: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFormStep: (prevStep: number | any) => void;
}

interface RegisterContextProps {
  children: ReactNode;
}

const RegisterContext = createContext<RegisterContextState>(
  {} as RegisterContextState
);

function RegisterContextProvider(props: RegisterContextProps) {
  const [formStep, setFormStep] = useState(1);

  const providerValue = {
    formStep,
    setFormStep,
  };

  return (
    <RegisterContext.Provider value={providerValue}>
      {props.children}
    </RegisterContext.Provider>
  );
}

export { RegisterContext, RegisterContextProvider };
