import Link from 'next/link'
import Image from 'next/image'

const Social = () => {
  return (
    <div className="absolute right-8 top-4 z-20 dark:bg-gray-300 rounded-md dark:p-2 dark:pt-3 dark:px-4 dark:top-1">
      <ul className="flex gap-4">
        <li className='hover:border-b-2 border-brand'>
          <Link href="https://api.whatsapp.com/send?phone=00529871145200">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/whatsapp.png" width={20} height={20} alt="WhatsApp"></Image>
            </a>
          </Link>
        </li>
        <li className='hover:border-b-2 border-brand'>
          <Link href="https://www.instagram.com/shift_happens_yoga">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/instagram.png" width={20} height={20} alt="Instagram"></Image>
            </a>
          </Link>
        </li>
        <li className='hover:border-b-2 border-brand'>
          <Link href="https://web.facebook.com/shift.happens.yogi">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/facebook.png" width={20} height={20} alt="Facebook"></Image>
            </a>
          </Link>
        </li>
        <li className='hover:border-b-2 border-brand'>
          <Link href="https://www.linkedin.com/in/christofbauer/">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/linkedin.png" width={20} height={20} alt="LinkedIn"></Image>
            </a>
          </Link>
        </li>
        <li className='hover:border-b-2 border-brand'>
          <Link href="https://github.com/Existenziell">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/github.png" width={20} height={20} alt="Github"></Image>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Social
