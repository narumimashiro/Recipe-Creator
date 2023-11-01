import styles from '@/styles/components/SearchBox.module.sass'

// MyComponents
import Ingredients from '@/components/atoms/Ingredients'
import NumberOfPeople from '@/components/atoms/NumberOfPeople'

const SearchBox = () : JSX.Element => {

  return (
    <>
      <div className={styles.container}>
        <Ingredients />
        <NumberOfPeople />
      </div>
    </>
  )
}
export default SearchBox