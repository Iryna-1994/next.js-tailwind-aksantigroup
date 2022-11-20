import Head from "next/head"
import Hero from "../components/Hero"
import OurStoryGrid from "../components/OurStoryGrid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const FoodAgriculture = () => {

  const data = [
    {
      imgSrc: '/food-agriculture/grid/grid-1.jpg',
      title: '1760s',
      content: [
        'Mayer Amschel Rothschild establishes a successful business in Frankfurt, built on trusted long-term client relationships.',
      ],
    },
    {
      imgSrc: '/food-agriculture/grid/grid-2.webp',
      title: '1810 Onwards',
      content: [
        'Mayer Amschel`s five sons settle in major European financial centres: Frankfurt, London, Paris, Vienna and Naples. Working in close collaboration they become the world`s best informed and most internationally effective financial house.',
      ],
    },
    {
      imgSrc: '/food-agriculture/grid/grid-3.webp',
      title: '19th Century',
      content: [
        'Rothschild support for new innovations and new global markets help shape the future of our world. Our business earns a strong reputation for identifying global opportunities, and our assessment of new ventures is seen as authoritative.',
        'The business supports the development of railways across Europe and emerging economies such as India and Brazil.',
        'In mining, our collaborations with experts hold an unrivalled reputation for intelligence on potential ventures, including the prediction of gold booms in South Africa and Australia.',
      ],
    },
    {
      imgSrc: '/food-agriculture/grid/grid-4.jpg',
      title: '1820 Onwards',
      content: [
        'The brothers create a global network of agents and contacts giving them access to the most up-to-date business and political information.',
        'The business plays a preeminent role in the development of the sovereign bond market, beginning in Europe and Russia, and expanding to every continent.',
      ],
    },
    {
      imgSrc: '/food-agriculture/grid/grid-5.jpg',
      title: '1875',
      content: [
        'The London house raises the funding for the British Government to acquire a major interest in the Suez Canal, one of the business`s most celebrated transactions, underscoring our reliability, discretion and solidity.',
      ],
    },
    {
      imgSrc: '/food-agriculture/grid/grid-6.jpg',
      title: '20th Century',
      content: [
        'We lay the foundations for our business offering today.',
        'We establish our business presence in the US during the Second World War and invest in our global scale, opening offices in every major market around the world.',
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Food agriculture</title>
        <meta name="description" content="Food agriculture page" />
      </Head>
      <Hero
        imgSrc='/food-agriculture/hero.jpg'
        title='Food Agriculture'
      />
      <section className='w-full py-6 md:py-14'>
        <div className='max-w-3xl mx-auto p-4'>
          <Title size='two' classes='text-center mb-8'>
            The foundation of our business is a reputation for trust, integrity and expert advice.
          </Title>
          <ThinContent>
            Over the past 200 years we have nurtured this reputation through close collaboration, and by embracing and supporting innovation in order remain at the forefront of our industry.
          </ThinContent>
        </div>
      </section>
      <OurStoryGrid data={data} />
    </>
  )
}

export default FoodAgriculture