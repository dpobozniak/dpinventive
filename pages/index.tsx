import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DPInventive</title>
        <meta name="description" content="We make web apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DPInventive
        </h1>
        <p className={styles.description}>Bring your ideas to life</p>
      </main>
    </div>
  )
}

export default Home
