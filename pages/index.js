import Head from 'next/head';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>RocketsLab :: Site em construção</title>
      </Head>
      <img className="brand" src="/images/site-logo.svg" alt="RocketsLab"/>
      <img className="slogan" src="/images/site-cga.svg" alt="Site em breve!"/>
    </div>
  )
}