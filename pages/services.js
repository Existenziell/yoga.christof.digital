import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { services } from '../lib/services'

const Services = () => {
  return (
    <section className='px-4 md:px-8 py-16 md:py-32 bg-cloth-pattern bg-repeat dark:bg-cloth-pattern-dark'>
      <div className='text-center '>
        <h1 className='text-4xl mb-2'>Services I offer</h1>
        <p className='mb-12'>There are many ways we can work together:</p>
        <ul className='text-left w-full flex flex-wrap'>
          {services.map((s, index) => {
            const { title, copy } = s
            return (
              <li key={index} className={`w-full md:w-1/2 mb-16 px-4 lg:px-8`}>
                <div className='relative rounded-md shadow-xl hover:shadow-none transition-all bg-white dark:bg-black dark:text-gray-300'>
                  <Link href='/contact'>
                    <a>
                      <Image
                        src={`/services/${index + 1}.jpg`}
                        width={500}
                        height={350}
                        layout={'responsive'}
                        alt={title}
                      />
                      <div className='p-4'>
                        <h2 className='text-2xl text-brand mb-2'>{title}</h2>
                        <p className='text-sm' dangerouslySetInnerHTML={{ __html: copy }}></p>
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
  )
}

Services.getLayout = function getLayout(page) {
  return (
    <Layout title='Services'>
      {page}
    </Layout>
  )
}

export default Services
