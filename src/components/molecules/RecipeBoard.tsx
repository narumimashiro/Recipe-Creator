import styles from '@/styles/components/RecipeBoard.module.sass'

// MaterialUI
import TextField from '@mui/material/TextField'

// Recoil
import { useRecoilValue } from 'recoil'
import { Recipe } from '@/recoil/Recipe'

const RecipeBoard = (): JSX.Element => {
  
  const recipe = useRecoilValue(Recipe)

  return (
    <>
      <div className={styles.container}>
        <TextField
          className={styles['recipe-output']}
          multiline
          minRows={25}
          maxRows={30}
          variant='outlined'
          value={recipe}
        />
      </div>
    </>
  )
}
export default RecipeBoard