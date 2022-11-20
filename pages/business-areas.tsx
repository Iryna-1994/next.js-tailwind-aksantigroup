import Head from "next/head"
import ArrowLink from "../components/ArrowLink"
import Content from "../components/Content"
import Hero from "../components/Hero"
import Title from "../components/Title"

const BusinessGrid = () => {

  const data = [
    {
      imgSrc: '/home/business-areas/business-1.png',
      title: 'Mining',
      content: 'The subsoil of the Democratic Republic of Congo is one of the richest in the world in terms of natural resources, making mining one of the main economic activities of the country.',
      slug: '/aksanti-mining',
      linkText: 'Visite Aksanti Mining',
    },
    {
      imgSrc: '/home/business-areas/business-2.png',
      title: 'Oil',
      content: 'The Democratic Republic of Congo (DRC) has significant untapped potential in the oil sector and the government plans to drastically increase production levels in the near future.',
      slug: '/aksanti-oil',
      linkText: 'Visite Aksanti Oil',
    },
    {
      imgSrc: '/home/business-areas/business-3.png',
      title: 'Wood',
      content: 'DRC occupies the leading position in Africa and the Congo Basin in terms of forest cover. However, the exploitation of these resources is still poorly controlled to the extent that it contributes only about 1% to GDP.',
      slug: '/aksanti-wood',
      linkText: 'Visite Aksanti Wood',
    },
    {
      imgSrc: '/home/business-areas/business-4.png',
      title: 'Properties Construction',
      content: 'The real estate and housing sector is booming in the Democratic Republic of Congo. Due to the high demand for real estate, the needs of the city of Kinshasa and other major cities in the country are rising sharply, creating a deficit in the market.',
      slug: '/aksanti-properties',
      linkText: 'Visite Aksanti Properties',
    },
  ]

  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col items-center bg-gray-100 p-6 lg:p-10 shadow-xl duration-500 hover:-translate-y-8" key={index}>
                  <img src={item.imgSrc} alt={item.title} />
                  <Title size='three' classes='mt-2 mb-4'>
                    {item.title}
                  </Title>
                  <Content textAlign='text-center'>
                    {item.content}
                  </Content>
                  <ArrowLink slug={item.slug} classes='mt-4'>
                    {item.linkText}
                  </ArrowLink>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

const BusinessBottom = () => {
  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <img src='/business-areas/areas.png' className="w-full md:w-auto max-w-2xl mb-6" alt='areas' />
          <Title size='two'>
            Food & Agriculture
          </Title>
          <div className="max-w-lg my-6 md:my-8">
            <Content textAlign='text-center'>
              MISTER MUKATE (MM) is an industrial bread factory company.
              KILIMO is a farmer producer company of corn and wheat.
              SAFI is a water purification company
            </Content>
          </div>
          <ArrowLink slug='/food-agriculture'>
            Explore the upcoming projects
          </ArrowLink>
        </div>
      </div>
    </section>
  )
}

const BusinessAreas = () => {
  return (
    <>
      <Head>
        <title>Business areas</title>
        <meta name="description" content="Business areas page" />
      </Head>
      <Hero
        imgSrc='/business-areas/hero.jpg'
        title='Business Areas'
      />
      <BusinessGrid />
      <BusinessBottom />
    </>
  )
}

export default BusinessAreas