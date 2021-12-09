import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (

    <>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-parallax-1">
        <h1 className="p-5 text-2xl text-white bg-brand bg-opacity-50 rounded">
          Welcome &#x2661;
        </h1>
      </header>
      <div className="max-w-xl m-auto px-4 leading-relaxed">

        <h2 className='text-2xl'>
          Hi, I am Christof.
        </h2>
        <p className='mb-6'>You have come to the right place.</p>
        <p className='mb-4'>
          A place where you can explore the world of shift_happens_yoga,{' '}
          take a <Link href='/timeline'><a className='link'>deep dive</a></Link> into what brought me here,{' '}
          <Link href='/testimonials'><a className='link'>read</a></Link> about what former students and clients have to say about their experiences,{' '}
          find the right <Link href='/services'><a className='link'>service</a></Link> for you,{' '}
          interact visually with the <Link href='/map'><a className='link'>map</a></Link> of all shifting events of my journey or just follow along on this indeed life changing endeavour.
        </p>
        <p className='mb-12'>
          I have been travelling the world, for the last 4 years, practicing and teaching Yoga and looking for enticing projects and humans.<br />
          Please <Link href="/contact"><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
        </p>
      </div>

      <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-parallax-2">
        <div className="p-5 text-2xl text-white bg-brand bg-opacity-50 rounded">
          shift happens, sooner or later :)
        </div>
      </section>
      <div className="max-w-lg m-auto">
        <p className='pb-32'>
          If Web or Blockchain Development was the reason you visit me, you&apos;ll find all information on{' '}
          <a href="https://www.christof.digital" className='link' rel="noopener noreferrer nofollow">christof.digital</a>.
        </p>
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
