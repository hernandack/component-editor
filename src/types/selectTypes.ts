import { ReactNode } from "react";

export interface ISearchSelect {
  selectedValue: string;
  isOpen: boolean;
  styles?: string;
  setSelectedValue: (value: string) => void;
  setIsOpen: (open: boolean) => void;
}

export interface IOptionData {
  label: string;
  value: string;
}

export interface IOptionItem {
  option: IOptionData;
  icon?: string;
}

export interface IOption {
  options: IOptionItem[]
}

export interface IDropdown {
  children: ReactNode;
  styles?: string;
}

export interface ISelectInputProps {
  selectedOptions?: IOptionItem[] | undefined
  isSelected?: boolean;
  isOutlined?: boolean;
  setSelectedOptions?: (value: IOptionItem | null) => void;
  setIsSelected?: (value: boolean) => void;
  setIsOutlined?: (value: boolean) => void;
}

export interface IOptionProps {
  option: IOptionData;
  icon?: string;
  isSelected?: boolean;
  styles?: IOptionStyles;
}

export interface IDropdownSearchProps {
  withSearch?: boolean;
  options?: IOptionItem[];
  selectedOptions?: IOptionItem[];
  dropdownStyles?: IDropdownStyles;
  optionStyles?: IOptionStyles;
}

// for styles and customization
export interface ISpacing {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

// dropdown styles
export interface IDropdownStyles {
  padding?: ISpacing;
  margin?: ISpacing;
  backgroundColor?: string;
}

// option item styles
export interface IOptionStyles {
  padding?: ISpacing;
  margin?: ISpacing;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  fontSize?: number;
  fontStyle?: string;
  iconSize?: string;
  iconColor?: string;
}

// select input styles
export interface ISelectInputStyles {
  padding?: ISpacing;
  margin?: ISpacing;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  arrowColor?: string;
  fontSize?: number;
}

// main select dropdown module styles
export interface ISelectDropdownProps {
  id?: string;
  options?: IOptionItem[];
  outlined?: boolean;
  withSearch?: boolean;
  multiple?: boolean;
  optionLabel?: string;
  dropdownStyles?: IDropdownStyles;
  optionStyles?: IOptionStyles;
  onChange?: () => void;
}
