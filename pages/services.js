import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { services } from '../lib/services'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | yoga.christof.digital</title>
        <meta name='description' content='Just the Right Service for You | yoga.christof.digital | shift-happens | Yoga &amp; Movement' />
      </Head>

      <section className='px-4 md:px-8 py-24 bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl mb-2'>How may I help You?</h1>
          <p className='mb-16'>There are many ways we can work together</p>
          <ul className='text-left w-full flex flex-wrap'>
            {services.map((s, index) => {
              const { title, copy } = s
              const topic = title.replace(/ /g, '-').replace('&', 'and').toLowerCase()

              return (
                <li key={index} className={`w-full md:w-1/2 mb-16 px-4 lg:px-12`}>
                  <div className='relative rounded-md shadow hover:shadow-xl transition-all duration-500 bg-white
                  dark:bg-white/10 dark:backdrop-blur-md dark:text-gray-300 hover:scale-105 '>
                    <Link href={`/connect?topic=${topic}`}>
                      <a>
                        <Image
                          src={`/services/${index + 1}.jpg`}
                          width={500}
                          height={350}
                          layout={'responsive'}
                          alt={title}
                        />
                        <div className='p-4'>
                          <h2 className='text-3xl my-3 text-brand'>{title}</h2>
                          <p className='text-sm leading-relaxed' dangerouslySetInnerHTML={{ __html: copy }}></p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Services
