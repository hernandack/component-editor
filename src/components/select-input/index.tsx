import { FC } from "react";
import { ISelectInputProps } from "../../types/selectTypes";
import { useAtom } from "jotai";
import { selectedOptionAtom } from "../../modules/select-dropdown/state";

export const SelectInput: FC<ISelectInputProps> = ({
  selectedOptions,
  setIsSelected,
}) => {
  const [, setSelectedOptions] = useAtom(selectedOptionAtom); // to set the selected options

  const handleFocus = (value: boolean) => {
    if (setIsSelected) setIsSelected(value);
  };

  // remove the selected options by filter and returns the filtered options back
  const handleRemoveSelectedOptions = (value: string) => {
    if (selectedOptions) {
      const updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.option.value !== value
      );
      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <div
      className="select-input relative px-2 py-2 rounded-sm min-h-12"
      onClick={() => handleFocus(true)}
      data-testid="select-input"
    >
      <div className="select-input__values w-full flex gap-2">
        {/* render the selected options */}
        {selectedOptions &&
          selectedOptions.map((item) => (
            <div
              key={item.option.value}
              className="select-input__value flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-xl"
              data-testid="select-input-value"
            >
              <span
                className="select-input__value__label"
                data-testid="select-input-label"
              >
                {item.option.label}
              </span>
              <span
                className="select-input__value__remove w-4 h-4 cursor-pointer opacity-70 hover:opacity-100"
                onClick={() => handleRemoveSelectedOptions(item.option.value)}
                data-testid="select-input-remove"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Edit / Close_Circle">
                      {" "}
                      <path
                        id="Vector"
                        d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
            </div>
          ))}
      </div>

      <span
        className="select-input__arrow absolute right-3 inset-y-1/2 -translate-y-1/2 w-4 h-4"
        data-testid="select-input-arrow"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </span>
    </div>
  );
};

export default SelectInput;
