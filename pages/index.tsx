import Head from 'next/head'
import Link from 'next/link'
import ArrowLink from '../components/ArrowLink'
import Counter from '../components/Counter'
import ImageRightText from '../components/ImageRightText'
import SliderContainer from '../components/SliderContainer'
import ThinContent from '../components/ThinContent'
import Title from '../components/Title'

const Home = () => {

  const businessGrid = [
    {
      imgSrc: '/home/business-areas/business-1.png',
      slug: '/aksanti-mining'
    },
    {
      imgSrc: '/home/business-areas/business-2.png',
      slug: '/aksanti-oil'
    },
    {
      imgSrc: '/home/business-areas/business-3.png',
      slug: '/aksanti-wood'
    },
    {
      imgSrc: '/home/business-areas/business-4.png',
      slug: '/aksanti-properties'
    },
  ]

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <section className='home-hero'>
        <div className='relative flex justify-center items-center mx-auto h-96 md:h-1/2 lg:h-screen'>
          <img src='/home/hero.jpg' className='relative w-full h-full object-cover z-10' />
          <div className='pattern-box absolute w-3/4 h-28 lg:h-48 right-0 -bottom-16 md:-bottom-24 z-0'></div>
          <div className='absolute px-4 z-20'>
            <Title size='one' classes='text-center font-bold'>
              Invest Today and Impact Tomorrow
            </Title>
          </div>
        </div>
        <div className='relative z-10 container max-w-7xl mx-auto p-4 -mt-24 lg:-mt-36'>
          <div className='clip-box ml-0 md:ml-10 px-5 lg:px-10 py-4 lg:py-10 max-w-md lg:max-w-2xl bg-gray-200'>
            <Title
              size='three'
              classes='mb-6'
            >
              Aksanti Group Corporation has created 4 companies within the country's key sectors, mining, wood, oil, and real estate.
            </Title>
            <ArrowLink slug='/who-we-are'>
              Read More
            </ArrowLink>
          </div>
        </div>
      </section>
      <section className='pt-14 lg:pt-24 pb-8 lg:pb-12'>
        <div className='max-w-3xl mx-auto p-4'>
          <ThinContent>
            With a team of 3,800 talented financial services specialists on the ground in over 40 countries across the world, we deliver a unique global perspective across four market-leading business divisions.
          </ThinContent>
        </div>
      </section>
      <SliderContainer />
      <ImageRightText
        imgSrc='/home/what-we-do.jpg'
        titleLink='/who-we-are'
        title='What we do'
        readMore='Read More'
        readMoreLink='/who-we-are'
      >
        AKSANTI GROUP is a Congolese holding corporation that centers its activities on the country`s primary economy. By understanding the needs its economy, the company has created an extensive portfolio and strategic partnerships throughout the country`s business sector. By focusing on the pillars of the Congolese economy; soil and sub-soil, the corporation has purposefully benefited from its strategic investments. The holding corporation has purposefully created four companies within the country`s key sectors, mining, wood, oil, and real estate.
      </ImageRightText>
      <section className='w-full py-6 md:py-14'>
        <div className='container max-w-7xl mx-auto p-4'>
          <Title size='two' classes='text-center mb-6 md:mb-12'>
            Our Holdings
          </Title>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-8'>
            {
              businessGrid.map((item: any, index: number) => {
                return (
                  <Link href={item.slug} className='group w-full overflow-hidden' key={index}>
                    <img src={item.imgSrc} className={`h-full duration-500 group-hover:scale-110 ${index === 2 ? 'scale-105 group-hover:scale-125' : 'scale-100'}`} alt={item.slug} />
                  </Link>
                )
              })
            }
          </div>
          <div className='flex justify-center mt-6'>
            <ArrowLink slug='/business-areas'>
              See our portfolio
            </ArrowLink>
          </div>
        </div>
      </section>
      <Counter />
    </>
  )
}

export default Home
