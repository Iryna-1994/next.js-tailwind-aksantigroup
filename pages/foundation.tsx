import Head from "next/head"
import Hero from "../components/Hero"
import ImageRightText from "../components/ImageRightText"
import OurStoryGrid from "../components/OurStoryGrid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const Foundation = () => {

  const data = [
    {
      imgSrc: '/foundation/grid/grid-1.jpg',
      title: 'Pillars to our Foundation',
      content: [
        '13 million of Congolese people are severely food insecure and an estimated 5 million children are acutely malnourished (World Food Program - WFP).',
        'An estimated 51 million people or three quarters of the population have no access to safe drinking water, even though the country holds over half of Africa`s water reserves (United Nations Environment Programme - UNEP).',
        '4.8 million are internally displaced due to numerous reasons, however the most prominent are war and climate change (World Food Program - WFP).',
      ],
    },
    {
      imgSrc: '/foundation/grid/grid-2.jpg',
      title: 'Investing in the Future',
      content: [
        'As of now, we are working throughout helping as much as we can the people of Congo starting with the communities in which we articulate our main activities. We aim to bring them the three fundamentals of what we believe are the keys to a wealthier and healthier future.',
        'With the help of our current and future companies, we are trying to give back to our people, and start the chain of giving back.',
        'Aksanti Sana Foundation will use the help of the different companies of the group, Mister Mukate, Kilimo, and Safi in order to elevate the daily lives of our people.'
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Foundation</title>
        <meta name="description" content="Foundation page" />
      </Head>
      <Hero
        imgSrc='/foundation/hero.jpg'
        title='Foundation'
      />
      <section className='w-full py-6 md:py-14'>
        <div className='max-w-3xl mx-auto p-4'>
          <Title size='two' classes='text-center mb-8'>
            The foundation of our business is a reputation for trust, integrity and expert advice.
          </Title>
          <ThinContent>
            We are accountable to the Batoto wa Congo. The People of Congo.
            The communities with which we work and develop our activities.
            We aim to assure them a restored future.
            We invest to impact the lives of tomorrow.
          </ThinContent>
        </div>
      </section>
      <ImageRightText
        imgSrc='/foundation/about.jpg'
        title='About'
      >
        <span className="thin-content text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600 font-thin mb-2 block">
          AKSANTI SANA means "Thank you very much" in Swahili
        </span>
        Aksanti Sana Foundation is a nonprofit organization that will be established in 2022 to enhance the future of the Batoto wa Congo, the people of Congo in numerous ways.
        Our goal with the foundation is to center its activities around the three most basic needs of every human life according to the pyramid of Maslow. Indeed, our foundation will work toward bringing to Congolese people food, water, and shelter security.
        The organization will serve as a private foundation of the Aksanti Group Corporation.
      </ImageRightText>
      <OurStoryGrid data={data} title='Aksanti Sana' />
    </>
  )
}

export default Foundation