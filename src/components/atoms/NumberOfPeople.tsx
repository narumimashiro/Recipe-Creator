import styles from '@/styles/components/NumberOfPeople.module.sass'

// MaterialUI
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// Recoil
import { useRecoilState } from 'recoil'
import { Servings } from '@/recoil/NumberOfPeople'

// constant
const TITLE = '人数'
const SERVING_MAX = 4
const SERVING_NUM = Array.from({ length: SERVING_MAX }, (_, index) => index + 1)

const NumberOfPeople = () : JSX.Element => {

  const [servings, setServings] = useRecoilState(Servings)

  return (
    <>
      <div className={styles['number-of-people']}>
        <div className='title'>{ TITLE }</div>
        <Select
          className={styles['select-box']}
          id='number-of-people'
          value={servings}
          onChange={(e: SelectChangeEvent) => setServings(e.target.value)}
        >
          {
            SERVING_NUM.map((el, index) => (
              <MenuItem
                className={styles['select-menu-item']}
                key={index}
                value={el}
              >
                {el}
              </MenuItem>
            ))
          }
        </Select>
      </div>
    </>
  )
}
export default NumberOfPeople