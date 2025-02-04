import { FC } from "react";
import { ISelectInputProps } from "../../types/selectTypes";

export const SelectInput: FC<ISelectInputProps> = ({ isSelected, setIsSelected}) => {

  const handleFocus = (value: boolean) => {
    if (setIsSelected) setIsSelected(value)
  }

  return (
    <div className="select-input relative">
      <div className="select-input__values w-full">
        <span className="select-input__value"></span>
      </div>
      <div
        className={`select-input__text w-full px-3 py-2 flex ${isSelected && "selected"}`}
        onClick={() => handleFocus(true)}
      />
      <span className="select-input__arrow absolute right-0 inset-y-1/2 -translate-y-1/2 w-4 h-4">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </span>
    </div>
  );
};
