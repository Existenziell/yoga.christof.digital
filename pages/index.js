import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div className='h-screen relative'>

      <div className='dark:bg-gray-300 rounded p-6'>
        <Image src="/icons/logo.png" width={600} height={329} alt="Logo" />
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <h1 className="text-4xl">Welcome &#x2661;</h1>
        <p>
          Hi, I am Christof. You have come to the right place.<br />
          <h2>Let&apos;s find out what I can do for you!</h2>
        </p>
        <p>
          I am travelling the world, practicing and teaching Yoga and looking for enticing projects and humans.<br />
          Please <Link href="/contact"><a className='link'>contact me</a></Link> if you see possible synergies or have questions.
        </p>
        <p>
          If you came here for Web or Blockchain Development, you&apos;ll find all information on{' '}
          <Link href="https://www.christof.digital"><a className='link' rel="noopener noreferrer nofollow">christof.digital</a></Link>.
        </p>
      </div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
