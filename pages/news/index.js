import Head from 'next/head'
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { Client } from '../../prismic-configuration';
import styles from '../../styles/Home.module.css'

export default function News({ articles }) {
  let { data } = articles.results[0];

  const { text } = data.group[1];
  return (
    <div className={styles.container}>
      News Page
      <div>{text}</div>
    </div>
  )
}

export async function getServerSideProps() {
  const articles = await Client().query(Prismic.Predicates.at('document.type', 'test2'))

  return {
    props: {
      articles
    }
  }
}

