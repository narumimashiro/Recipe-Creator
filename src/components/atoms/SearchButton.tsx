import { useEffect, useState } from 'react'
import styles from '@/styles/components/SearchButton.module.sass'

// MaterialUI
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

// Recoil
import { useRecoilValue } from 'recoil'
import { IngredientsList } from '@/recoil/Ingredients'

// constant
const LABEL = '検索'
const NOTICE = '食材を1つ以上入力してください'

const SearchButton = () : JSX.Element => {

  const ingredients = useRecoilValue(IngredientsList)
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    // 食材に何か入力があるかチェック
    const temp = ingredients.filter((item) => item !== '')
    setIsValid(temp.length == 0)
  }, [ingredients])

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