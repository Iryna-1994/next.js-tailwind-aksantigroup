import Head from "next/head"
import Content from "../components/Content"
import Hero from "../components/Hero"
import MapTab from "../components/MapTab"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const WhyAfrica = () => {

  const data = [
    {
      title: '400+',
      content: 'companies in Africa with revenues over $1 billion',
    },
    {
      title: '$1.4 trillion',
      content: 'in consumer spending',
    },
    {
      title: '11m square miles',
      content: 'larger than China, Europe, and US combined',
    },
  ]

  return (
    <>
      <Head>
        <title>Why africa</title>
        <meta name="description" content="Why africa page" />
      </Head>
      <Hero
        imgSrc='/why-africa/hero.jpg'
        title='Why Africa'
      />
      <section className='w-full py-6 md:py-14'>
        <div className='max-w-3xl mx-auto p-4'>
          <ThinContent>
            There is an element of breaking ground,
            but the long-term rewards will be very high.
            - Tidjiane Thiam, CEO of Credit Suisse
          </ThinContent>
          <div className="bg-gray-600 rounded-xl shadow-xl p-10 mt-10">
            <Content textColor='text-gray-200'>
              Africa is a 1.2 billion person market on the cusp of transformative growth, as Africans, we are proud to live in an era in which the global business interest in our continent has grown.
              <br /><br />
              As we undergo this positive transformation in perception, we are aiming to put Africa in the center of business innovation through its potentiality to become the largest and most sustainable business model in the entire world.
              <br /><br />
              It is our duty to support Africa towards that direction by pursuing business-model innovation, unleashing local talent, building long-term resilience, and promoting local development. (McKinsey & Company)
            </Content>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              data.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col items-center gap-y-4 p-10 bg-gray-100 shadow-lg rounded-lg" key={index}>
                    <Title size='three'>
                      {item.title}
                    </Title>
                    <Content textAlign='text-center'>
                      {item.content}
                    </Content>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-14">
        <div className="max-w-4xl mx-auto p-4">
          <Title size='two' classes='text-center mb-8 md:mb-14'>
            Africa`s overlooked business revolution
          </Title>
          <MapTab />
        </div>
      </section>
    </>
  )
}

export default WhyAfrica