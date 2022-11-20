import Head from "next/head"
import Link from "next/link"
import Content from "../components/Content"
import Hero from "../components/Hero"
import TimeLine from "../components/TimeLine"
import Title from "../components/Title"

const OurHistory = () => {

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
        <title>Our history</title>
        <meta name="description" content="Our history page" />
      </Head>
      <Hero
        imgSrc='/our-history/hero.jpg'
        title='Our History'
      />
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="flex flex-col items-center gap-y-2 md:gap-y-6 max-w-3xl mx-auto">
            <Title size='two'>
              1998 - Aksanti Sana
            </Title>
            <Content textAlign='text-center'>
              The history of the corporation traces back in 1998 when its two founders started implementing the idea and the basis of what will become the Aksanti Group. Back then, the company was called Aksanti Sana which means “Thank you very much” in Swahili. We were a clothing retailer company with a store in the heart of Kinshasa’s market street, Avenue de l’École.
            </Content>
            <Title size='two' classes='mt-4 md:mt-6'>
              2018 - Aksanti Group
            </Title>
            <Content textAlign='text-center'>
              Today, the Aksanti Sana transformed into Aksanti Group Corporation with more than 4 companies in three major cities of the country.
            </Content>
          </div>
        </div>
      </section>
      <TimeLine />
      <section className="w-full py-6 md:py-14 mb-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="flex flex-col items-center gap-y-3 mb-6 md:mb-14">
            <Title size='two'>
              Our Holdings
            </Title>
            <Content>
              MINING · OIL · WOOD · REAL ESTATE
            </Content>
          </div>
          <div className="grid grid-cols-4">
            {
              businessGrid.map((item: any, index: number) => {
                return (
                  <div className="flex justify-center overflow-hidden border-b-2 border-gray-200 duration-300 hover:border-gray-800" key={index}>
                    <Link href={item.slug} className='inline-flex duration-300 hover:scale-110'>
                      <img src={item.imgSrc} className='h-auto md:h-32' alt={item.slug} />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default OurHistory