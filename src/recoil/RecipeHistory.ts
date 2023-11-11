import { atom } from 'recoil'

export type TypeRecipeHistory = {
  item_index: number,
  create_date: string,
  context: string,
}

export const RecipeHistory = atom<TypeRecipeHistory[]>({
  key: 'recipe_history',
  default: []
})