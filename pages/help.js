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
      <h1>Need some help?</h1>
      <div>
        <div><h2>Email</h2>
          <form>
            <input placeholder="Your email Address"></input><br />
            <select>
              <option>Website</option>
              <option>Marketing Campaign</option>
              <option>Product Launch</option>
              <option>Strategic Planning</option>
              <option>eCommerce Site</option>
              <option>Marketing Automation Build</option>
              <option>SEO / SEM Work</option>
              <option>UX Optimization</option>
            </select><br />
            <button type="submit">Email Us!</button>
          </form>
        </div>
        <div><h2>Chat</h2><a href="#">Chat Now!</a></div>
        <div><h2>Phone</h2><div>Give us a shout:</div><div>206-523-4152</div></div>
      </div>
      <div>
        <h2>Assembly Digital</h2>
        <p>Build a team of experts to make you something amazing.</p>
      </div>
      <Footer />
    </div>
  )
}
