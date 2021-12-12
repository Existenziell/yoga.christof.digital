import { FacebookProvider, EmbeddedPost } from 'react-facebook'
import Layout from '../components/Layout'
import Image from 'next/image'
import Blob from '../components/Blob'

const Testimonials = () => {
  const testimonials = [
    'https://web.facebook.com/shahar.a.yadid/posts/10215294421014106',
    'https://web.facebook.com/marc.radtke/posts/2826244507399318',
    'https://web.facebook.com/ty.maryna/posts/10156362442802034',
    'https://web.facebook.com/christiane.eitle/posts/1971860406185436',
    'https://web.facebook.com/tatayikwantse/posts/2673583402869532',
  ]

  return (
    <div className='flex flex-col items-center justify-content px-4 md:px-8 py-24 bg-cloth-pattern dark:bg-none dark:bg-brand-dark overflow-hidden'>
      <h1 className='text-4xl md:text-6xl mb-2'>Testimonials</h1>
      <p className='mb-12 max-w-sm text-center'>Let&apos;s see how students described their experience with shift_happens_yoga:</p>

      <Blob node={<Image src='/icons/rating.jpg' alt='Rating' width={500} height={328} />} />

      <div className='w-full flex flex-col space-y-8 mt-16'>
        {testimonials.map(tm => {
          return (
            <div key={tm}>
              <FacebookProvider appId='239066989437628' >
                <EmbeddedPost href={tm} width='auto' />
              </FacebookProvider>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Testimonials.getLayout = function getLayout(page) {
  return (
    <Layout title='Testimonials'>
      {page}
    </Layout>
  )
}

export default Testimonials
