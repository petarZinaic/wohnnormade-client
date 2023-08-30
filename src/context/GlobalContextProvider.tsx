import { ReactNode } from "react";
import { RegisterContextProvider } from "./RegisterContext";

interface GlobalContextProps {
  children: ReactNode;
}

function GlobalContextProvider(props: GlobalContextProps) {
  return <RegisterContextProvider>{props.children}</RegisterContextProvider>;
}

export default GlobalContextProvider;
