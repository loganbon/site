import Header from '../components/header'
import '../styles/globals.css'

function Site({ Component, pageProps }) {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default Site;
