import Link from 'next/link'
import Image from 'next/image'
import { socialLinks } from '../lib/socialLinks'

const Social = () => {
  return (
    <div className='z-20'>
      <ul className='flex gap-4'>
        {socialLinks.map(l => {
          const { name, link, image } = l
          return (
            <li className='border-b-2 border-transparent hover:border-b-2 hover:border-brand' key={name}>
              <Link href={link}>
                <a target='_blank' rel='noopener noreferrer nofollow'>
                  <Image
                    src={image}
                    width={25}
                    height={25}
                    alt={name}
                    className='dark:invert'
                  />
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
