import { FC, useState } from "react";
import { IOptionProps } from "../../types/selectTypes";
import { selectedOptionAtom, isMultipleAtom, searchKeywordAtom } from "../../modules/select-dropdown/state";
import { useAtom } from "jotai";
import { searchHighlight } from "../../utils/searchHighlight"; // text highlighter

export const Option: FC<IOptionProps> = ({ option, icon, isSelected, styles }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [selectedOptions, setSelectedOptions] = useAtom(selectedOptionAtom);
  const [isMultiple] = useAtom(isMultipleAtom);
  const [searchKeyword] = useAtom(searchKeywordAtom); // used by highlighter to target the option.label content

  const handleClick = () => {
    // check and set the value of selected options based on the isMultiple state
    // if isMultiple = true, it can have multiple selected options
    // if isMultiple = false (or single), always override the previous selectedOption (if any) with current one (1 length)
    if (isMultiple) {
      if (selectedOptions) {
        const isAlreadySelected = selectedOptions.some(
          (selectedOption) => selectedOption.option.value === option.value
        );

        // toggles the option item to be selected or not
        if (isAlreadySelected) {
          setSelectedOptions(
            selectedOptions.filter(
              (selectedOption) => selectedOption.option.value !== option.value
            )
          );
        } else {
          setSelectedOptions([...selectedOptions, { option, icon }]);
        }
      } else {
        setSelectedOptions([{ option, icon }]);
      }
    } else {
      setSelectedOptions([{ option, icon }]);
    }
  };

  const handleHover = (value: boolean) => {
    setIsHovered(value)
  }

  return (
    <div
      className={`cursor-pointer py-2 px-4 hover:bg-teal-50 ${isSelected ? "is-selected" : ""} ${isHovered ? "is-hovered" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        padding: styles?.padding ? `${styles.padding.top}px ${styles.padding.right}px ${styles.padding.bottom}px ${styles.padding.left}px` : undefined,
        margin: styles?.margin ? `${styles.margin.top}px ${styles.margin.right}px ${styles.margin.bottom}px ${styles.margin.left}px` : undefined,
        backgroundColor: styles?.backgroundColor && (isSelected || isHovered) && styles?.activeBackgroundColor ? styles.activeBackgroundColor : styles?.backgroundColor,
        color: styles?.textColor && (isSelected || isHovered) && styles?.activeTextColor ? styles.activeTextColor : styles?.textColor,
        fontSize: styles?.fontSize,
        fontStyle: styles?.fontStyle,
      }}
      data-testid="option-item"
    >
      {icon && <span className="option__icon">{icon}</span>}
      {/* using searchHighlight will make sure the searched keyword is highlighted targeting option.label */}
      <span className="option__label" data-testid="option-label">{searchHighlight(option.label, searchKeyword)}</span>
    </div>
  );
};

export default Option;
