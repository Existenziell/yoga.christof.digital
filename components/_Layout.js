import NextNprogress from 'nextjs-progressbar'
import DarkModeToggle from './DarkModeToggle'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
        color='var(--color-brand)'
      />
      <Nav />
      <DarkModeToggle />

      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark dark:text-gray-300'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
