import { useEffect, useState, useRef } from 'react'
import styles from '@/styles/components/SearchButton.module.sass'
import axios from 'axios'

// MaterialUI
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

// Recoil
import { useRecoilValue, useRecoilState } from 'recoil'
import { IngredientsList } from '@/recoil/Ingredients'
import { Servings } from '@/recoil/NumberOfPeople'
import { InputKeyword, KeyList } from '@/recoil/SearchKeyword'
import { Recipe } from '@/recoil/Recipe'

// function
import { createPrompt } from '@/function/createPrompt'

// constant
const LABEL = '検索'
const NOTICE = '食材を1つ以上入力してください'

const SearchButton = () : JSX.Element => {

  const ingredients = useRecoilValue(IngredientsList)
  const servings = useRecoilValue(Servings)
  const inputKeyword = useRecoilValue(InputKeyword)
  const keyList = useRecoilValue(KeyList)
  const [_, setRecipe] = useRecoilState(Recipe)
  const [isValid, setIsValid] = useState(true)
  const dispatch = useRef(false)

  useEffect(() => {
    // 食材に何か入力があるかチェック
    const temp = ingredients.filter((item) => item !== '')
    setIsValid(temp.length == 0)
  }, [ingredients])

  const searchRecipe = async () => {
    if (dispatch.current) return
    dispatch.current = true
    const prompt = createPrompt(
      {
        ingredients: ingredients,
        servings: servings,
        inputkeyword: inputKeyword,
        keylist: keyList
      }
    )
    const params = {
      prompt: prompt
    }
    await axios.post('/api/send_prompt', {...params})
      .then(res => {
        setRecipe(res.data)
        dispatch.current = false
      })
      .catch(err => {
        console.error('Failed fetch', err)
        setRecipe(err.response.data)
      })
  }

  return (
    <>
      <div className={styles.wrap}>
        <Tooltip
          title={isValid ? NOTICE : ''}
          placement='top'
          disableTouchListener
          arrow
        >
          <div>
            <Button
              variant='contained'
              color='inherit'
              disabled={isValid}
              onClick={searchRecipe}
            >
              {LABEL}
            </Button>
          </div>
        </Tooltip>
      </div>
    </>
  )
}
export default SearchButton