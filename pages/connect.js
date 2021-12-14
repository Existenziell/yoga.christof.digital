import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Social from '../components/Social'
import PacmanLoader from 'react-spinners/PacmanLoader'

const Connect = () => {
  const [formData, setFormData] = useState()
  const [sending, setSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [specialTopic, setSpecialTopic] = useState('')

  const router = useRouter()

  useEffect(() => {
    const topic = router.query.topic
    if (topic) {
      setSpecialTopic(topic)
    }
  }, [router.query.topic])

  function setData(e) {
    const { name, value } = e.target
    setFormData({ ...formData, ...{ [name]: value } })
  }

  const submitForm = async e => {
    e.preventDefault()
    setSending(true)

    let data = { ...formData }
    if (specialTopic) {
      const topic = router.query.topic
      data = { ...data, topic }
    }

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      res.ok ?
        Router.push('/success')
        :
        setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
    } catch (error) {
      setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
    }
  }

  const removeTopic = () => {
    // Remove query from URL, don't reload
    router.replace('/connect', undefined, { shallow: true })
    setSpecialTopic('')
  }

  return (
    <>
      <Head>
        <title>Connect | yoga.christof.digital</title>
      </Head>

      <div className='flex flex-col items-center justify-center px-4 md:px-8 py-24 lg:w-2/3 lg:mx-auto'>
        <h1 className='text-4xl md:text-6xl mb-12'>Let&apos;s connect</h1>
        <div className='md:flex items-center gap-8 md:text-right relative'>
          <div className='md:w-2/3'>
            <p className='text-lg leading-relaxed mb-8'>
              I am excited to hear from you!{' '}
              Please, feel free to write in your own language.{' '}
              Languages I understand without Translator are:{' '}
              English, Deutsch, Français, Español and Catalán.
            </p>
            <p className='text-base leading-relaxed mb-8'>
              This picture was taken in the beautiful city of Mysuru, Karnataka, India, with my teacher <a href='https://www.instagram.com/rameshshetty_yoga_shala' target='_blank' rel='noopener noreferrer nofollow' className='link'>Ramesh Shetty</a>. Pose: Dwi Pada Shirshasana - still a long way to go ッ
            </p>
          </div>
          <Image src='/icons/connect.webp' alt='Connect' width={300} height={460} priority={true} />
          <div className='w-max mx-auto mt-4 md:absolute md:bottom-0 md:w-max md:ml-auto'>
            <Social />
          </div>
        </div>

        <div className='px-4 pt-8 pb-0 sm:px-12 mt-6 shadow w-full bg-cover bg-no-repeat bg-poly rounded-lg bg-white/10 backdrop-blur-md text-white'>
          <form onSubmit={submitForm}>
            {specialTopic &&
              <div className='flex items-center mb-8'>
                <div className='text-left bg-white/10 backdrop-blur-md px-4 py-2 max-w-max'>
                  Subject: <span className='capitalize'>{specialTopic.replaceAll('-', ' ').replaceAll('and', '&')}</span>
                </div>
                <svg xmlns='http://www.w3.org/2000/svg' onClick={removeTopic} className='h-6 w-6 ml-2 hover:text-gray-300 hover:scale-105 transition-all cursor-pointer' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </div>
            }
            <div className='relative mb-8'>
              <input id='name' name='name' type='text' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder='Name' />
              <label htmlFor='name'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Name</label>
            </div>
            <div className='relative mb-8'>
              <input id='email' type='email' name='email' onChange={setData} required disabled={sending} className='peer h-10 w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4' placeholder='Email' />
              <label htmlFor='email'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Email</label>
            </div>
            <div className='relative'>
              <textarea id='message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full placeholder-transparent focus:outline-none bg-white/10 backdrop-blur-md rounded pl-4 py-4' placeholder='Message'></textarea>
              <label htmlFor='message'
                className='absolute -top-5 left-0 text-sm transition-all
                            peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-focus:-top-5 peer-focus:left-0 peer-focus:text-gray-300 peer-focus:text-sm'>Message</label>
            </div>

            {errorMsg ?
              <div className='text-left bg-brand text-white p-4'>
                {errorMsg}
              </div>
              :
              sending ?
                <div className='my-8 h-16 mr-16 opacity-60'>
                  <PacmanLoader color={'white'} size={30} />
                </div>
                :
                <input type='submit' className='button' aria-label='Send Contact Form'></input>
            }
          </form>
        </div>
      </div>
    </>
  )
}

export default Connect
