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
  isSelected?: boolean;
  isOutlined?: boolean;
  setIsSelected?: (value: boolean) => void;
  setIsOutlined?: (value: boolean) => void;
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
  textColor?: string;
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
export interface ISelectDropdownStyles {
  padding?: ISpacing;
  margin?: ISpacing;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  fontStyle?: string;
}