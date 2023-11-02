import styles from '@/styles/components/Ingredients.module.sass'

// MaterialUI
import Input from '@mui/material/Input'

// Recoil
import { useRecoilState } from 'recoil'
import { IngredientsList } from '@/recoil/Ingredients'

// constant
const TITLE = '食材'
const PLACEHOLDER = '食材を入力してください'

const Ingredients = () : JSX.Element => {

  const [ingredientsList, setIngredients] = useRecoilState(IngredientsList)

  const InputData = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newArray = [...ingredientsList]
    newArray[index] = e.target.value
    setIngredients(newArray)
  }

  return (
    <>
      <div className={styles.ingredients}>
        <div className='title'>{ TITLE }</div>
        <ul className={styles['input-area']}>
          {
            ingredientsList.map((el, index) => (
                <Input
                  key={index}
                  className={styles['mui-input']}
                  placeholder={PLACEHOLDER}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => InputData(e, index)}
                />
            ))
          }
        </ul>
      </div>
    </>
  )
}
export default Ingredients