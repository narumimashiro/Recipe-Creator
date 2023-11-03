
import styles from '@/styles/components/SearchHistory.module.sass'

// MaterialUI
import Button from '@mui/material/Button'
import HistoryIcon from '@mui/icons-material/History';

// constant
const HISTORY = '履歴'

const SearchHistory = () : JSX.Element => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Button
            color='inherit'
            variant='text'
            startIcon={<HistoryIcon />}
            size='large'
          >
            {HISTORY}
          </Button>
        </div>
      </div>
    </>
  )
}
export default SearchHistory