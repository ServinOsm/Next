import Head from 'next/head'
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { Client } from '../prismic-configuration';
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {

  let { data } = articles.results[0];
  console.log(data)
  const { text } = data.group[0];
  return (
    <div className={styles.container}>
      Home Page
      <div>{text}</div>
    </div>
  )
}

export async function getStaticProps() {
  const articles = await Client().query(Prismic.Predicates.at('document.type', 'test2'))

  return {
    props: {
      articles
    }
  }
}

