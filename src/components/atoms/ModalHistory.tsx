import { useState } from 'react'
import styles from '@/styles/components/ModalHistory.module.sass'

// MaterialUI
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

 // My components
import { RecipeHistory } from '@/components/molecules/SearchHistory'

// funtion
import { converterUrlEncode } from '@/function/converterString'

type Props = {
  open: boolean
  history: RecipeHistory[] | undefined,
  onClose: () => void
}

const ModalHistory = (props: Props): JSX.Element => {

  const [pageNo, setPageNo] = useState(1)

  const getDate = (page: number) => {
    if (props.history) {
      const res = props.history.find(el => el.item_index == page)
      return res!.create_date
    }
  }

  const getContext = (page: number) => {
    if (props.history) {
      const res = props.history.find(el => el.item_index == page)
      return converterUrlEncode(res!.context)
    }
  }

  return (
    <>
      <Modal
        className={styles.modal}
        open={props.open}
        onClose={props.onClose}
      >
        <Box className={styles['modal-box']}>
          <Typography
            variant='h6'
          >
            {getDate(pageNo)}
          </Typography>
          <TextField
            className={styles['text-field']}
            multiline
            variant='standard'
            InputProps={{disableUnderline: true}}
            value={getContext(pageNo)}
          />
          <div className={styles['pagenation-wrap']}>
            <Stack spacing={2}>
              <Pagination
                count={3}
                onChange={(_, page) => setPageNo(page)}
              />
            </Stack>
          </div>
        </Box>
      </Modal>
    </>
  )
}
export default ModalHistory