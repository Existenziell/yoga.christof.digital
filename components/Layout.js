import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children, title }) {
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
      </Head>
      <div className='dark:bg-black h-full'>
        {/* <Social /> */}
        <Nav />
      </div>
      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark dark:text-gray-300'>
        {children}
      </main>
      <Footer />
    </>
  )
}
