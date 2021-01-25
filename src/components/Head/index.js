import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Sneaker Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />
        <meta property="og:image" content={db.bg} />
      </Head>
    </div>
  )
}

export default IndexPage