import Link from 'next/link'
import Image from 'next/image'
import { socialLinks } from '../lib/socialLinks'

const Social = () => {
  return (
    <div className='right-4 top-20 z-20 dark:bg-gray-300 rounded-md dark:pt-2 dark:px-4 dark:top-1'>
      <ul className='flex gap-2 dark:gap-4'>
        {socialLinks.map(l => {
          const { name, link, image } = l
          return (
            <li className='border-b-2 border-transparent hover:border-b-2 hover:border-brand hover:opacity-70' key={name}>
              <Link href={link}>
                <a target='_blank' rel='noopener noreferrer nofollow'>
                  <Image src={image} width={20} height={20} alt={name}></Image>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Social
