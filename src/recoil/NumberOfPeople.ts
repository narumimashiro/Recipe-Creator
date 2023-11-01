import { atom } from 'recoil'

export const Servings = atom<string>({
  key: 'howmanyservings',
  default: '1'
})