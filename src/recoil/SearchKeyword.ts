import { atom } from 'recoil'

export const InputKeyword = atom<string>({
  key: 'keywordinput',
  default: ''
})

export const KeyList = atom<string[]>({
  key: 'keylist',
  default: []
})