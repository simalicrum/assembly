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
      <h1>Welcome to Assembly Digital</h1>
      <h2>Got a project? Build your own team from the top agency talent.</h2>
      <h2>You don't need a bunch of freelancers, you need a team.</h2>
      <a href="#">I know what I want</a>
      <p>or</p>
      <a href="#">I could use some help</a>
      <p>
        <i>With Assembly I got to put together an amazing team, and they built me a great solution.”</i>
        <byline> - Michael Fryer, CMO Langosta Inc</byline>
      </p>
      <div>
        <h3>Why choose Assembly?</h3>
        <div>
          <div>Get a team</div>
          <div>You want a team, not a bunch of contractors to manage. We deliver a team with process, management, and a proven track record.</div>
        </div>
        <div>
          <div>Transparent</div>
          <div>You always know who will be working on your projects. There’s no bait and switch, no resource swapping behind the scenes.</div>
        </div>
        <div>
          <div>Trust</div>
          <div>We have selected top tier freelancers to join our network. You won’t be inundated with undercutting bids that can’t deliver.</div>
        </div>
        <div>
          <div>Quality</div>
          <div>We manage our teams work, ensure quality is up to snuff, and make sure you’re getting what you need.</div>
        </div>
      </div>
      <div>
        <h3>How does Assembly work? It’s easy.</h3>
        <ol>
          <li>Tell us about your project</li>
          <li>Post your project</li>
          <li>Freelancers from our hand-chosen industry professionals show interest in your project.</li>
          <li>Choose your team.</li>
        </ol>
        <div>Chat with us now!</div>
      </div>
      <Footer />
      <div>

      </div>
    </div>
  )
}
