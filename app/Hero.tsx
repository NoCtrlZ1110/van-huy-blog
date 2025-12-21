/* eslint-disable react/jsx-no-comment-textnodes */
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const portfolioSiteUrl = siteMetadata.portfolioSiteUrl
  const resumeUrl =
    siteMetadata?.resume?.url || `${portfolioSiteUrl}/assets/resume/Nguyen_Van_Huy_CV.pdf`

  const AVATAR_IMAGE =
    'https://lh3.googleusercontent.com/6drPIkvzfqMDBU1P5gZVqzykcSJxTmyrqQ_nAsAvVquT8Z6bZFQr3DKoY_XX0b99VAcwbfjvKc_REh0R5Eh7hIYDlwAq-D4z=rw-w400'

  return (
    <section className="flex flex-wrap items-center justify-between gap-4 md:pb-10 md:pt-8 lg:pb-20 lg:pt-14 ">
      <div>
        <div>Software Engineer</div>
        <h1 className="my-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I'm Nguyễn Văn Huy!
        </h1>
        <div>
          「 Life has #NoCtrlZ 」{' '}
          <span className="mb-2 text-gray-400">// let's do the right thing!</span>
        </div>

        <div className="flex gap-4">
          <a href={resumeUrl} target="_blank">
            <button className="mt-5 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-white transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-400/60 dark:from-cyan-600 dark:to-blue-700 dark:hover:from-cyan-400 dark:hover:to-blue-500 dark:hover:shadow-xl dark:hover:shadow-cyan-400/50">
              getResume()
            </button>
          </a>
          <a href="https://youtube.vanhuy.dev" target="_blank">
            <button className="mt-5 rounded-md border-2 border-red-400 bg-gradient-to-r from-red-500/10 to-pink-500/10 px-4 py-2 text-red-400 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-500 hover:text-white hover:shadow-xl hover:shadow-red-400/60 dark:border-red-500 dark:from-red-500/20 dark:to-pink-500/20 dark:text-red-300 dark:hover:from-red-400 dark:hover:to-pink-500 dark:hover:text-white dark:hover:shadow-xl dark:hover:shadow-red-400/50">
              subscribe()
            </button>
          </a>
        </div>
      </div>
      <Image
        className="rounded-full"
        src={AVATAR_IMAGE}
        alt="my-avatar"
        width={200}
        height={200}
        priority
      />
    </section>
  )
}

export default Hero
