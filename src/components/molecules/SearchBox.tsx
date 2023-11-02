import styles from '@/styles/components/SearchBox.module.sass'

// MyComponents
import Ingredients from '@/components/atoms/Ingredients'
import NumberOfPeople from '@/components/atoms/NumberOfPeople'
import KeywordInput from '@/components/atoms/KeywordInput'

const SearchBox = () : JSX.Element => {

  return (
    <>
      <div className={styles.container}>
        <Ingredients />
        <NumberOfPeople />
        <div className={styles.keyword}>
          <KeywordInput />
        </div>
      </div>
    </>
  )
}
export default SearchBox