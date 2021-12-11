import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Nav = () => {
    const links = [
        { name: 'Root', url: '/' },
        { name: 'Timeline', url: '/timeline' },
        { name: 'Services', url: '/services' },
        { name: 'Testimonials', url: '/testimonials' },
        { name: 'Map', url: '/map' },
        { name: 'Contact', url: '/contact' },
    ]
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState()

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(false)
        }
    }, [])

    const toggleDarkMode = (mode) => {
        document.getElementById('light-switch').play()
        if (mode === 'dark') {
            localStorage.theme = 'dark'
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light'
            setDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }

    const intercept = (e) => {
        e.preventDefault()
        setIsOpen(false)
        router.push(e.target.href)
    }

    return (
        // <nav className={`absolute dark:bg-black dark:text-gray-300 w-full py-3 md:py-0 z-10 ${router.pathname === '/map' && 'relative'}`}>
        <nav>
            {/* Darkmode toggle */}
            <div className='absolute right-4 top-4'>
                {!darkMode ?
                    <svg onClick={() => toggleDarkMode('dark')} xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-gray-500  cursor-pointer hover:opacity-70' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
                    </svg>
                    :
                    <svg onClick={() => toggleDarkMode('light')} xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-gray-500 cursor-pointer hover:opacity-70 dark:hover:text-gray-200' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
                    </svg>
                }
                <audio controls id='light-switch' className='hidden absolute'>
                    <source src='/audio/light-switch.mp3' type='audio/mpeg' />
                    Your browser does not support the audio element.
                </audio>
            </div>

            {/* Desktop menu */}
            {/* <ul className='hidden md:flex justify-between items-center ml-4 w-max'>
                {links.map(l => (
                    <li key={l.name}>
                        <Link href={l.url}>
                            <a
                                href={l.url}
                                className={`${router.pathname === l.url ? 'active-nav' : 'border-b-2 border-white dark:border-brand'} hover:border-brand hover:bg-white dark:hover:text-black transition-all px-4 pb-2 pt-3 block`}>

                                {l.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul> */}

            {/* Mobile menu */}
            {isOpen &&
                <ul className='mobile-menu left-0 right-0 top-0 bottom-0 pt-20 bg-white z-10 dark:bg-black dark:text-gray-300 relative h-screen'>
                    {links.map(l => (
                        <li key={l.name}>
                            <a
                                href={l.url}
                                onClick={intercept}
                                className={`${router.pathname === l.url && 'active-nav shadow-sm'} w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 hover:bg-brand hover:text-white transition-all`}>

                                {l.name}
                            </a>
                        </li>
                    ))}
                </ul>
            }

            {/* Mobile Hamburger Button */}
            <div className='absolute left-4 top-4 z-20'>
                <button className='mobile-menu-button outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
                    {!isOpen ?
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 hover:text-brand text-gray-500' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                            <path d='M4 6h16M4 12h16M4 18h16'></path>
                        </svg>
                        :
                        <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-0 left-0 h-12 w-12 hover:text-brand text-black dark:text-gray-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    }
                </button>
            </div>

        </nav>
    )
}

export default Nav
