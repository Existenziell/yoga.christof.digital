import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Social from '../components/Social'
import PacmanLoader from 'react-spinners/PacmanLoader'

const Connect = () => {
    const [formData, setFormData] = useState()
    const [sending, setSending] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    function setData(e) {
        const { name, value } = e.target
        setFormData({ ...formData, ...{ [name]: value } })
    }

    const submitForm = async e => {
        e.preventDefault()
        setSending(true)

        try {
            const res = await fetch('/api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            res.ok ?
                Router.push('/success')
                :
                setErrorMsg(`Sorry, an error occured: ${res.statusText}`)
        } catch (error) {
            setErrorMsg('Sorry, an error occured. Have you tried turning it off and on again?')
        }
    }

    return (
        <div className='flex flex-col items-center justify-content px-4 md:px-8 py-24'>
            <h1 className='text-4xl md:text-6xl mb-8'>Let&apos;s connect</h1>
            <p className='px-8 lg:w-1/2 leading-relaxed'>
                I am excited to hear from you!<br />
                Please, feel free to write in your own language.<br />
                Languages I understand without Google Translate are:<br />
                English, Deutsch, Français, Español, Catalán and नेपाली (well, the basics ッ).
            </p>

            <Social />

            <div className='px-4 py-8 sm:p-12 mt-6 shadow w-full lg:w-2/3 bg-white dark:bg-gray-700'>
                <form onSubmit={submitForm}>

                    <div className='relative mb-12'>
                        <input id='name' name='name' type='text' onChange={setData} required disabled={sending} className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300' placeholder='Name' />
                        <label htmlFor='name' className='absolute left-0 -top-4 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Name</label>
                    </div>
                    <div className='relative mb-12'>
                        <input id='email' type='email' name='email' onChange={setData} required disabled={sending} className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300' placeholder='Email' />
                        <label htmlFor='email' className='absolute left-0 -top-4 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Email</label>
                    </div>
                    <div className='relative'>
                        <textarea id='message' name='message' onChange={setData} rows='10' required disabled={sending} className='peer h-full w-full py-4 border-t-2 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand dark:bg-gray-700 dark:text-gray-300' placeholder='Message'></textarea>
                        <label htmlFor='message' className='absolute left-0 -top-5 text-gray-600 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-300'>Message</label>
                    </div>

                    {errorMsg ?
                        <div className='text-left bg-brand text-white p-4'>
                            {errorMsg}
                        </div>
                        :
                        sending ?
                            <div className='mt-4 text-left h-16'>
                                <PacmanLoader color={'var(--color-brand)'} size={30} />
                            </div>
                            :
                            <input type='submit' className='button' aria-label='Send Contact Form'></input>
                    }
                </form>
            </div>
        </div>
    )
}

Connect.getLayout = function getLayout(page) {
    return (
        <Layout title='Connect'>
            {page}
        </Layout>
    )
}

export default Connect
