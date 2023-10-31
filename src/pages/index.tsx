import Head from 'next/head'

import styles from '@/styles/Home.module.sass'

// MyComponents
import SearchHistory from '@/components/molecules/SearchHistory'
import SearchBox from '@/components/molecules/SearchBox'
import RecipeBoard from '@/components/molecules/RecipeBoard'

const Home = () => {

  return (
    <>
      <Head>
        <title>B.T.W | Recipe Creator</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <SearchHistory />
        <ul className={styles['recipe-area']}>
          <SearchBox />
          <RecipeBoard />
        </ul>
      </div>
    </>
  )
}
export default Home