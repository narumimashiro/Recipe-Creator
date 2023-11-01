import { atom } from 'recoil'

const INPUT_MAX = 3

export const IngredientsList = atom<string[]>({
  key: 'ingredients',
  default: Array.from({ length: INPUT_MAX }, () => '')
})