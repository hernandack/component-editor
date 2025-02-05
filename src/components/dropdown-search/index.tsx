import { FC } from "react";
import { IDropdownSearchProps } from "../../types/selectTypes";

import { SelectSearch } from "../select-search";
import { Dropdown } from "../dropdown";
import { Option } from "../option";

export const DropdownSearch: FC<IDropdownSearchProps> = ({ withSearch, options, selectedOptions, dropdownStyles, optionStyles }) => {
  return (
    <div className="select-dropdown__dropdown-search bg-white border border-gray-300 absolute top-[116%] left-0 shadow-2xl w-full" data-testid="dropdown-search">
      {withSearch && <SelectSearch />}
      <Dropdown styles={dropdownStyles}>
        {options && options.map((dropdownItem) => (
          <Option
            key={dropdownItem.option.value}
            option={dropdownItem.option}
            isSelected={selectedOptions && selectedOptions.some(
              (selectedOption) => selectedOption.option.value === dropdownItem.option.value
            )}
            styles={optionStyles}
          />
        ))}
      </Dropdown>
    </div>
  )
}
