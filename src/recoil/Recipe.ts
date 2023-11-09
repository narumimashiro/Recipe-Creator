import { atom } from 'recoil'

export const Recipe = atom<string>({
  key: 'recipe',
  default: ''
})