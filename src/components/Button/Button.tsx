import React from "react";
import { ButtonSize, ButtonType } from "./types";

type ButtonProps = {
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  text?: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({
  buttonType,
  buttonSize,
  text,
  disabled,
  onClick,
}: ButtonProps) {
  const renderText = () => {
    return <span className="button--text">{text}</span>;
  };

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    if (!disabled) onClick();
  }

  const className = !disabled
    ? `button ${buttonType || ButtonType.PRIMARY}`
    : `button ${buttonType}-disabled`;

  return (
    <div className={className} onClick={(e) => handleClick(e)}>
      <div className={`size ${buttonSize || ButtonSize.MEDIUM}`}>
        {text && renderText()}
      </div>
    </div>
  );
}
