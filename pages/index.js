import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <header className='flex items-center justify-center h-screen sm:bg-fixed bg-center bg-cover bg-parallax-1'>
        <a href='#anchor' aria-label='Scroll down'>
          <h1 className='p-5 text-2xl text-white bg-brand bg-opacity-50 dark:bg-brand-dark rounded'>
            shift_happens_yoga
          </h1>
        </a>
      </header>

      <div className='max-w-xl m-auto px-4 leading-relaxed my-16' id='anchor'>

        <div className='block dark:hidden'>
          <Image src='/icons/logo.png' width={300} height={165} alt='Logo' priority={true} />
        </div>
        <div className='hidden dark:block'>
          <Image src='/icons/logo-dark.png' width={300} height={165} alt='Logo' priority={true} />
        </div>

        <h2 className='text-2xl mb-6 mt-4'>
          You have come to the right place.
        </h2>
        <p className='mb-8'>
          A place where you can explore the world of shift_happens_yoga,{' '}
          take a <Link href='/timeline'><a className='link'>deep dive</a></Link> into what brought me here,{' '}
          <Link href='/testimonials'><a className='link'>read</a></Link> about what former students and clients have to say about their experiences,{' '}
          find the right <Link href='/services'><a className='link'>service</a></Link> for you,{' '}
          interact visually with the <Link href='/map'><a className='link'>map</a></Link> of all shifting events of my journey or just follow along on this indeed life changing endeavour.
        </p>
        <p className='mb-2 text-2xl'>Hi, I am Christof &#x2661;</p>
        <p>
          I have been travelling the world, for the last 4 years, practicing and teaching Yoga and looking for enticing projects and humans.<br />
          The name shift_happens was the perfect fit for what I was experiencing during that time and still am today. The final hint I needed was when I once saw a guy with a shirt saying shift_happens, referring apparently to a festival in Canada.
          Please <Link href='/connect'><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
        </p>
      </div>

      <section className='flex items-center justify-center h-screen mb-12 sm:bg-fixed bg-center bg-cover bg-parallax-2'>
        <div className='p-5 text-2xl rounded text-white bg-brand bg-opacity-50 dark:bg-brand-dark'>
          shift_happens, sooner rather than later.
        </div>
      </section>
      <div className='max-w-lg m-auto'>
        <p className='pb-32'>
          If Web or Blockchain Development is the reason you visit me, you&apos;ll find all information on{' '}
          <a href='https://www.christof.digital' className='link' rel='noopener noreferrer nofollow'>christof.digital</a>.
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
