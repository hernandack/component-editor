import { atom } from 'jotai';

export const activeEditor = atom<'data' | 'design'>('design');