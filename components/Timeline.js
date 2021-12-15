import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sorting from './Sorting'
import { timeline } from '../lib/timeline'
import { ScrollIndicator } from './ScrollIndicator'

const Timeline = () => {
  const [sortBy, setSortBy] = useState(true)
  const [data, setData] = useState(timeline.features)

  const toggleSortBy = () => {
    setData(data.slice().reverse())
    setSortBy(!sortBy)
  }

  return (
    <section className='timeline bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark'>
      <h2 className='text-4xl mb-2'>The Timeline:</h2>

      <ScrollIndicator />
      <Sorting sortBy={sortBy} toggleSortBy={toggleSortBy} />

      <ul className='w-full mt-12'>
        {data.map((feature, index) => {
          const { id, image, date, name, subname, description, mapOnly } = feature.properties
          if (!mapOnly) {
            return (
              <li
                key={image}
                className={`mb-16 sm:w-4/5 relative rounded shadow-lg bg-white
                dark:bg-white/10 dark:backdrop-blur-md dark:gray-300 dark:border-white dark:border-none
                  ${image % 2 === 0 ? `ml-auto text-right` : `text-left`}
                  `}>
                <Image
                  src={`/timeline/${image}.jpg`}
                  width={800}
                  height={450}
                  layout={'responsive'}
                  alt={name}
                  priority={index === 1 || index === 19}
                />
                <div className={`absolute top-0 text-white bg-white/10 backdrop-blur-md p-2 ${image % 2 === 0 ? `right-0 rounded-bl-md` : `left-0 rounded-br-md`}`}>{date}</div>
                <div className='p-4'>
                  <h3 className='text-3xl mt-3 text-brand'>{name}</h3>
                  <h4 className='text-sm mb-6'>{subname}</h4>
                  <p dangerouslySetInnerHTML={{ __html: description }} className=' leading-relaxed'></p>
                  <Link href={`/map?location=${image}`}>
                    <a className='text-xs flex items-center mt-4'>
                      <div className='block dark:hidden'>
                        <Image src='/icons/globe.png' width={25} height={25} alt='Globe' />
                      </div>
                      <div className='hidden dark:block'>
                        <Image src='/icons/globe-dark.png' width={25} height={25} alt='Globe' />
                      </div>
                      <span className='ml-2 border border-transparent hover:border-b hover:border-b-brand transition-all'>View on Map</span>
                    </a>
                  </Link>
                </div>
              </li>
            )
          }
        })}
      </ul>

      <div className='flex flex-col items-center justify-center text-center'>
        <h1>Congratulations, you made it all the way here!</h1>
        <h2>I hope you enjoyed the ride :)</h2>
        <a href='#top' aria-label='Scroll back up'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-32 w-32 text-black hover:text-brand ' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd' />
          </svg>
        </a>
      </div>

    </section>
  )
}

export default Timeline
