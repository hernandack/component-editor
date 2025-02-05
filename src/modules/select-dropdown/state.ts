import { atom } from 'jotai';
import { IDropdownStyles, IOptionItem, IOptionStyles } from '../../types/selectTypes';
import { optionData } from '../../stores/optionData';

export const idAtom = atom<string | undefined>(undefined);
export const withSearchAtom = atom<boolean>(true);
export const optionsAtom = atom<IOptionItem[] | null>(optionData);
export const selectedOptionAtom = atom<IOptionItem[] | undefined>(undefined)
export const isMultipleAtom = atom<boolean>(true);
export const optionLabelAtom = atom<string>('Label');
export const isOutlinedAtom = atom<boolean>(true);
export const stylesAtom = atom<object | undefined>(undefined);
export const isSelectedAtom = atom<boolean>(false);
export const searchKeywordAtom = atom<string>('')
export const dropdownStylesAtom = atom<IDropdownStyles>({
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  backgroundColor: 'white',
});
export const optionStylesAtom = atom<IOptionStyles>({
  padding: { top: 8, right: 16, bottom: 8, left: 16 },
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  backgroundColor: 'white',
  activeBackgroundColor: '#f0fdfa',
  textColor: 'black',
  activeTextColor: 'black',
  fontSize: 14,
  fontStyle: 'inherit',
});