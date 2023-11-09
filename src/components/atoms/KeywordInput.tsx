import styles from '@/styles/components/KeywordInput.module.sass'

// MaterialUI
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'

// Recoil
import { useRecoilState } from 'recoil'
import { InputKeyword, KeyList } from '@/recoil/SearchKeyword'

// constant
const TITLE = 'キーワード'
const PLACEHOLDER = 'キーワードを入力してください'
type KeywordButton = {
  label: string,
}
const KEYLIST = [
  '和食', '中華', 'イタリアン', '韓国風',
  '簡単', '凝った',
  'デザート', 'おかず',　'麺類', 'ご飯もの', '汁もの',
  '朝食', '昼食', '夕食', '夜食']

const KeywordButton = (props: KeywordButton) : JSX.Element => {

  const [keyList, setKeyList] = useRecoilState(KeyList)

  const isValid = () => {
    return !keyList.includes(props.label) && (keyList.length === 3)
  }

  const getColor = () => {
    return keyList.includes(props.label) ? 'warning' : 'inherit'
  }

  const pushKeyList = (key: string) => {
    let newArray = [...keyList]
    if(keyList.includes(key)) {
      newArray = keyList.filter(item => item !== key)
    } else {
      newArray.push(key)
    }
    setKeyList(newArray)
  }

  return (
    <div className={styles['keyword-button']}>
      <Button
        className={styles['mui-button']}
        color={getColor()}
        variant='text'
        disabled={isValid()}
        onClick={() => pushKeyList(props.label)}
      >
        {props.label}
      </Button>
    </div>
  )
}

const KeywordInput = () : JSX.Element => {

  const [_, setKeyword] = useRecoilState(InputKeyword)

  const InputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <>
      <div className={styles['keyword-input']}>
        <div className='title'>{ TITLE }</div>
        <div className={styles.wrap}>
          <Input
            className={styles['mui-input']}
            placeholder={PLACEHOLDER}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => InputData(e)}
          />
        </div>
        <div className={styles.keybox}>
          {
            KEYLIST.map((el, index) => (
              <KeywordButton
                key={index}
                label={el}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
export default KeywordInput