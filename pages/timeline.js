import Link from 'next/link'
import Layout from '../components/Layout'
import Quote from '../components/Quote'
import Timeline from '../components/Timeline'
import Video from '../components/Video'

const Yoga = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-8 py-24'>
      <h1 className='text-4xl md:text-6xl mb-8'>Yoga</h1>
      <p className='mb-4 md:px-32 leading-relaxed'>
        Yoga had quite an impact on my life. A groundbreaking impact indeed, that changed so much, so drastically, for the better.
        The following timeline is trying to put all the different places/learnings/teachings I was opportune to experience during my journey in semantic and chronological context.
        If you prefer an even more visual context, <Link href='/map'><a className='link'>visit the Map</a></Link>.
      </p>
      <p>As one of my best teachers always used to say:</p>
      <Quote text='Make your breath louder than your thoughts' classes='mt-4 mb-12' />
      <Timeline />
      <Video />
    </div>
  )
}

Yoga.getLayout = function getLayout(page) {
  return (
    <Layout title='Timeline'>
      {page}
    </Layout>
  )
}

export default Yoga
