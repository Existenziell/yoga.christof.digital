import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children, title }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <title>
          {title ? `${title} | yoga.christof.digital` : `yoga.christof.digital`}
        </title>
        <meta name='description' content='yoga.christof.digital | shift-happens | Yoga &amp; Movement' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gotu&display=swap"
          rel="stylesheet"
        />
        {router.pathname === '/map' &&
          <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
        }
        {router.pathname === '/testimonials' &&
          <script async defer crossOrigin='anonymous' src='https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0&appId=239066989437628&autoLogAppEvents=1' nonce='rqW0DIVj'></script>
        }
      </Head>
      <div className='dark:bg-brand-dark h-full'>
        {/* <Social /> */}
        <Nav />
      </div>
      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark dark:text-gray-300'>
        {children}
      </main>
      <Footer />
    </>
  )
}
