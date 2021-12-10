import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {

    const links = [
        { name: "Root", url: "/" },
        { name: "Timeline", url: "/timeline" },
        { name: "Services", url: "/services" },
        { name: "Testimonials", url: "/testimonials" },
        { name: "Map", url: "/map" },
        { name: "Contact", url: "/contact" },
    ]
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const intercept = (e) => {
        e.preventDefault()
        setIsOpen(false)
        router.push(e.target.href)
    }

    return (

        <nav className={`absolute dark:bg-black dark:text-gray-300 w-full py-3 md:py-0 z-10 ${router.pathname === '/map' && 'bg-white'}`}>

            {/* Desktop menu */}
            <ul className="hidden md:flex justify-between items-center ml-4 w-max ">
                {links.map(l => (
                    <li key={l.name}>
                        <Link href={l.url}>
                            <a
                                href={l.url}
                                className={`${router.pathname === l.url ? 'active-nav' : 'border-b-2 border-white dark:border-brand'} hover:border-brand transition-all px-4 py-2 block`}>

                                {l.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile menu */}
            {isOpen &&
                <ul className="mobile-menu md:hidden absolute left-0 right-0 top-14 bg-white z-10 dark:bg-black dark:text-gray-300">
                    {links.map(l => (
                        <li key={l.name}>
                            <a
                                href={l.url}
                                onClick={intercept}
                                className={`${router.pathname === l.url && 'active-nav shadow-sm'} w-full block text-base px-8 py-2 hover:bg-brand hover:text-white transition-all`}>

                                {l.name}
                            </a>
                        </li>
                    ))}
                </ul>
            }

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden justify-between ml-8 w-max space-x-6">
                <button className="mobile-menu-button outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Open Mobile Navigation">
                    {!isOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 hover:text-brand text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-brand text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </button>
            </div>

        </nav>
    )
}

export default Nav
