/* eslint-disable react/jsx-no-comment-textnodes */
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const portfolioSiteUrl = siteMetadata.portfolioSiteUrl
  return (
    <section className="flex flex-wrap items-center justify-between md:pb-10 md:pt-8 lg:pb-20 lg:pt-14">
      <div>
        <div>Software Engineer</div>
        <h1 className="my-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I'm Nguyễn Văn Huy!
        </h1>
        <div>
          「 Life has #NoCtrlZ 」{' '}
          <span className="mb-2 text-gray-400">// let's do the right thing!</span>
        </div>

        <div>
          <a className="mr-4" href={portfolioSiteUrl} target="_blank">
            <button className="mt-5 rounded-md  bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 hover:bg-green-400 dark:border dark:border-gray-800 dark:bg-transparent dark:hover:bg-green-400">
              openPortfolio()
            </button>
          </a>
          <a href={`${portfolioSiteUrl}/assets/resume/Nguyen_Van_Huy_CV.pdf`} target="_blank">
            <button className="mt-5 rounded-md border border-gray-800 bg-transparent px-4 py-2 hover:border-transparent hover:bg-blue-400 hover:text-white dark:text-white">
              getResume()
            </button>
          </a>
        </div>
      </div>
      <Image
        className="my-10 rounded-full sm:mt-4"
        src="/static/images/avatar.webp"
        alt="my-avatar"
        width={200}
        height={200}
        priority
      />
    </section>
  )
}

export default Hero
