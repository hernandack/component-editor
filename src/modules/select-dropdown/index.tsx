import { useAtom } from "jotai";
import { SelectInput } from "../../components/select-input";
import { Dropdown } from "../../components/dropdown";
import { Option } from "../../components/option";
import { SelectSearch } from "../../components/select-search";
import {
  idAtom,
  // isOpenAtom,
  optionsAtom,
  isOutlinedAtom,
  isSelectedAtom,
} from "./state";

export const SelectDropdown = () => {
  const [id] = useAtom(idAtom);
  // const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [options] = useAtom(optionsAtom);
  const [isOutlined] = useAtom(isOutlinedAtom);
  const [isSelected, setIsSelected] = useAtom(isSelectedAtom);

  const handleFocus = (value: boolean) => setIsSelected(value)

  return (
    <div
      id={id}
      className={`
        select-dropdown border transition-colors duration-300 relative z-[2000]
        ${
          isOutlined
            ? "bg-white border-gray-400 hover:border-gray-700 text-black"
            : "bg-gray-300 text-black border-transparent hover:bg-gray-400"
        }
      `}
      onBlur={() => handleFocus(false)}
    >
      <SelectInput isSelected={isSelected} setIsSelected={setIsSelected} />
      {options && isSelected && (
        <>
          <SelectSearch />
          <Dropdown>
            {options.map((dropdownItem) => (
              <Option
                key={dropdownItem.option.value}
                option={dropdownItem.option}
              />
            ))}
          </Dropdown>
        </>
      )}
    </div>
  );
};
