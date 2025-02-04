import { atom } from 'jotai';
import { IOptionItem } from '../../types/selectTypes';
import { optionData } from '../../stores/optionData';

export const idAtom = atom<string | undefined>(undefined);
export const isOpenAtom = atom<boolean>(false);
export const withSearchAtom = atom<boolean>(false);
export const optionsAtom = atom<IOptionItem[] | null>(optionData);
export const isMultipleAtom = atom<boolean>(false);
export const isOutlinedAtom = atom<boolean>(true);
export const stylesAtom = atom<object | undefined>(undefined);
export const isSelectedAtom = atom<boolean>(false);
