import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Assembly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <h1>Strategy Packages</h1>
        <h2>Want a team without all the details, we can take care of it for you!</h2>
        <div>
          <div>
            <div>Get a team for me!</div>
            <div>Send us your project details. We’ll hop on a quick call to discuss the details and take care of the rest for you!</div>
            <a>Free</a>
          </div>
          <div>
            <div>Help me plan it</div>
            <div>Know what you want, but aren’t sure how time and money will affect the outcome? We can help review your strategic goals and build a plan that works for you!</div>
            <a>$5000 flat fee</a>
          </div>
          <div>
            <div>Strategic advice</div>
            <div>Know you need something, but aren’t certain what form it should take. Is it an app, a website? Need strategic advice to help it take form? We can help you make intelligent decisions and move towards a solution that solves your goals.</div>
            <a>$10,000 Flat Fee</a>
          </div>
        </div>
      <Footer />
    </div>
  )
}
