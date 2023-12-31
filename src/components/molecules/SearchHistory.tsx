import { useState, useRef } from 'react'
import styles from '@/styles/components/SearchHistory.module.sass'
import axios from 'axios'

// MyComponents
import ModalHistory from '@/components/atoms/ModalHistory'

// MaterialUI
import Button from '@mui/material/Button'
import HistoryIcon from '@mui/icons-material/History';

// Recoil
import { RecipeHistory } from '@/recoil/RecipeHistory'

// constant
const HISTORY = '履歴'

export type RecipeHistory = {
  item_index: number,
  create_date: string,
  context: string,
}
const SearchHistory = () : JSX.Element => {
  
  const [recipeHistory, setRecipeHistory] = useState<RecipeHistory[]>()
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useRef(false)

  const getHistory = async () => {
    if (dispatch.current) return
    dispatch.current = true
    const params = {
      section: 'get_history'
    }
    await axios.post('/api/get_history', {...params})
      .then(res => {
        setRecipeHistory(res.data)
        dispatch.current = false
      })
      .catch(err => {
        console.error('Failed fetch data', err)
      })
    setModalOpen(true)
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
        <ModalHistory
          open={isModalOpen}
          history={recipeHistory}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </>
  )
}
export default SearchHistory