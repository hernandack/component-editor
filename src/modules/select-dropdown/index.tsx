import { useEffect, useRef, useCallback, FC } from "react";
import { useAtom } from "jotai";
import { SelectInput } from "../../components/select-input";
import { DropdownSearch } from "../../components/dropdown-search";
import { ISelectDropdownProps } from "../../types/selectTypes";
import {
  idAtom,
  optionsAtom,
  selectedOptionAtom,
  isMultipleAtom,
  isOutlinedAtom,
  isSelectedAtom,
  withSearchAtom,
  searchKeywordAtom,
  optionLabelAtom,
} from "./state";

export const SelectDropdown: FC<ISelectDropdownProps> = ({
  dropdownStyles,
  optionStyles,
}) => {
  const [id] = useAtom(idAtom);
  const [options] = useAtom(optionsAtom);
  const [optionLabel] = useAtom(optionLabelAtom);
  const [selectedOptions] = useAtom(selectedOptionAtom);
  const [isMultiple] = useAtom(isMultipleAtom);
  const [isOutlined] = useAtom(isOutlinedAtom);
  const [isSelected, setIsSelected] = useAtom(isSelectedAtom);
  const [withSearch] = useAtom(withSearchAtom);
  const [searchKeyword] = useAtom(searchKeywordAtom);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFocus = useCallback(
    (value: boolean) => {
      setIsSelected(value);
    },
    [setIsSelected]
  );

  useEffect(() => {
    // for outside click to toggle the dropdown search
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, handleFocus]);

  const filteredOptions = options
    ? options
        .filter((option) =>
          option.option.label
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
        )
        .slice(0, 20)
    : [];

  return (
    <div
      id={id}
      ref={dropdownRef}
      className="select-dropdown relative z-[2000] flex items-center"
      onClick={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
      data-testid="select-dropdown"
    >
      <div className="select-dropdown__label flex-initial basis-36" data-testid="select-field-label">
        {optionLabel}
      </div>
      <div
        className={`
        select-dropdown__menu relative z-10 border transition-colors duration-300 flex-auto basis-full
        ${
          isOutlined
            ? "bg-white border-gray-400 hover:border-gray-600 text-black"
            : "bg-gray-300 text-black border-transparent hover:bg-gray-400"
        }
        ${isMultiple ? "select-dropdown--multiple" : "select-dropdown--single"}
      `}
      >
        <SelectInput
          selectedOptions={selectedOptions}
          setIsSelected={setIsSelected}
        />
        {isSelected && (
          <DropdownSearch
            withSearch={withSearch}
            options={filteredOptions}
            selectedOptions={selectedOptions}
            dropdownStyles={dropdownStyles}
            optionStyles={optionStyles}
          />
        )}
      </div>
    </div>
  );
};

export default SelectDropdown;
