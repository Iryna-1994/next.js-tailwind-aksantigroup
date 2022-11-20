import Head from "next/head"
import ArrowLink from "../components/ArrowLink"
import Content from "../components/Content"
import Hero from "../components/Hero"
import Title from "../components/Title"

const OurLogo = () => {

  const logoGrid = [
    {
      imgSrc: '/our-logo/logo/logo-1.png',
      title: 'The Congolese Royal Arrow',
      content: 'From João I of Kongo who reign from 1470 to 1509, represents both our strong attachment to the culture of the country, its environment, its community and to show also our drive and motivation to always progress over time by having strong corporation core values and philosophy.',
    },
    {
      imgSrc: '/our-logo/logo/logo-2.png',
      title: 'The Circle',
      content: 'Shows the future size of the corporation.',
    },
    {
      imgSrc: '/our-logo/logo/logo-3.png',
      title: 'The White Straps',
      content: 'Show the corporation`s different layers, a metaphor for the different companies that one large corporation can create and/or manage.',
    },
  ]

  return (
    <>
      <Head>
        <title>Our logo</title>
        <meta name="description" content="Our logo page" />
      </Head>
      <Hero
        imgSrc='/our-logo/hero.png'
        title='Our Logo'
        objectFit='object-contain'
      />
      <section className="w-full py-6 md:py-14">
        <div className="max-w-5xl mx-auto p-4">
          <Title size='two' classes='mb-10 md:mb-16'>
            Our Corporate Logo
          </Title>
          <div className="grid grid-cols-1 gap-y-10">
            {
              logoGrid.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-x-32" key={index}>
                    <div className="w-40 md:w-56 h-auto md:h-56 flex-none">
                      <img src={item.imgSrc} className='w-full h-full object-contain' alt={item.title} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <Title size='three'>
                        {item.title}
                      </Title>
                      <Content>
                        {item.content}
                      </Content>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center gap-x-10 lg:gap-x-36 gap-y-12">
            <img src="/our-logo/logo-idea.jpg" className="w-64 flex-none" alt="logo-idea" />
            <div>
              <Title size='three' classes='mb-1'>
                João I of Kongo
              </Title>
              <Content textColor='text-gray-400'>
                The seventh ruler of Kongo.
              </Content>
              <div className="mt-4 md:mt-10 mb-4">
                <Content>
                  João I of Kongo (died 1509), alias Nzinga a Nkuwu or Nkuwu Nzinga, was ruler of the Kingdom of Kongo between 1470 and 1509. He was baptized as João on 3 May 1491 by Portuguese missionaries. Due to his interest in Portugal and its culture, he initiated a major cultural initiative in 1485 upon the arrival of Diogo Cão. It was under these conditions that the first Atlantic Creole emerged, forming in both Central Africa and in Portugal.
                  <br /><br />
                  King Nzinga a Nkuwu was the seventh ruler of Kongo. He was married to Queen Nzinga a Nlaza, a first cousin. She had a son by the king named Nzinga Mbemba. She would later help him become king of Kongo after her husband's death. Under the reign of Nzinga a Nkuwu, Kongo had grown to 100,000 square kilometers and contained a very centralized government.
                  <br /><br />
                  In 1483, a Portuguese caravel captained by Diogo Cão reached the estuary of the Congo River and made contact with subjects of the king. Cão sailed back to Portugal carrying a party of Kongo emissaries. On arrival in Lisbon, the emissaries were baptized and placed in a monastery before returning to the king in 1491. Along with the emissaries came Portuguese priests, masons, carpenters and soldiers plus European goods. The ships anchored at Mpinda and after a brief halt to baptise the governor of Soyo, uncle to the manikongo, the procession went on to the capital where they were greeted by the king and five of his leading nobles.
                </Content>
              </div>
              <ArrowLink slug='/'>
                Source: Wikipedia
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurLogo