import NextNprogress from 'nextjs-progressbar'
import Footer from './Footer'
import Nav from './Nav'
import DarkModeToggle from './DarkModeToggle'

const Layout = ({ children }) => {
  return (
    <>
      <NextNprogress startPosition={0.3} stopDelayMs={100} height={3} showOnShallow={true} color='var(--color-brand)' />
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
