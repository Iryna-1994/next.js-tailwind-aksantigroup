import * as React from 'react'
import Head from "next/head"
import Hero from "../components/Hero"
import CredoList from '../components/CredoList'
import Title from '../components/Title'

const OurCredo = () => {

  return (
    <>
      <Head>
        <title>Our credo</title>
        <meta name="description" content="Our credo page" />
      </Head>
      <Hero
        imgSrc='/our-credo/hero.jpg'
        title='Our Credo'
      />
      <CredoList />
      <section className='w-full py-6 md:py-14'>
        <div className='container max-w-7xl mx-auto p-4'>
          <div className='flex flex-col items-center gap-y-6 md:gap-y-12'>
            <Title size='two'>
              Aksanti
            </Title>
            <img src='/our-credo/draw.png' className='w-96' alt='draw' />
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCredo