import styles from '@/styles/components/SearchHistory.module.sass'
import axios from 'axios'

// MaterialUI
import Button from '@mui/material/Button'
import HistoryIcon from '@mui/icons-material/History';

// Recoil
import { useRecoilState } from 'recoil'
import { RecipeHistory } from '@/recoil/RecipeHistory'

// constant
const HISTORY = '履歴'

const SearchHistory = () : JSX.Element => {
  
  const [recipeHistory, setRecipeHistory] = useRecoilState(RecipeHistory)

  const getHistory = async () => {
    const params = {
      section: 'get_history'
    }
    await axios.post('/api/control_database', {...params})
      .then(res => {
        setRecipeHistory(res.data)
      })
      .catch(err => {
        console.error('Failed fetch data', err)
      })
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Button
            color='inherit'
            variant='text'
            startIcon={<HistoryIcon />}
            size='large'
            onClick={getHistory}
          >
            {HISTORY}
          </Button>
        </div>
      </div>
    </>
  )
}
export default SearchHistory