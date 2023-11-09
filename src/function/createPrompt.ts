/**
 * prompt作成関数
 */

type prompt = {
  ingredients: string[],
  servings: string,
  inputkeyword: string,
  keylist: string[],
}

export const createPrompt = (el: prompt) => {
  const foods = el.ingredients.reduce((pre, el) => {
    return (el !== '') ? pre + '+' + el : pre
  })

  let keywords = ''
  if (el.keylist.length) {
    keywords = el.keylist.reduce((pre, el) => {
      return (el !== '') ? pre + '+' + el : pre
    })
  }

  return `${foods}+${keywords}+${el.inputkeyword}+用いた${el.servings}人前レシピ教えて`
}