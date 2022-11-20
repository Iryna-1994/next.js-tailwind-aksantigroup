import Head from "next/head"
import AksantiAndText from "../components/AksantiAndText"
import ArrowLinkAndMailto from "../components/ArrowLinkAndMailto"
import HeroNoImage from "../components/HeroNoImage"
import SimpleGrid from "../components/SimpleGrid"
import Title from "../components/Title"

const AksantiOil = () => {

  const data = [
    {
      title: '500k+',
      content: 'Liters of Oil',
    },
    {
      title: '2 Locations',
      content: 'Likasi & Kolwezi',
    },
    {
      title: '2004-2012',
      content: 'Aksanti Sana Oil',
    },
    {
      title: '2018',
      content: 'Creation Year',
    },
  ]

  return (
    <>
      <Head>
        <title>Oil</title>
        <meta name="description" content="Oil page" />
      </Head>
      <HeroNoImage title='Aksanti Oil'>
        The Democratic Republic of Congo (DRC) has significant untapped potential in the oil sector and the government plans to drastically increase production levels in the near future. The oil sector contributes only about 10% of total government revenues in 2015. In other words, the oil sector represents an opportunity for all investors who would like to fill this market gap within the country.
      </HeroNoImage>
      <AksantiAndText
        imgSrc='/aksanti-oil/aksanti.png'
        alt='oil'
      >
        Aksanti Oil`s purpose is to empower oil consumers throughout the buying process. We aim to progress together with more adapted solutions and cleaner oil products. Technology changes and the world`s interconnectedness influence us to be more responsible towards our clients and suppliers. As the demand for oil products is growing exponentially, we aim to supply our clients throughout the cities of Katanga.
        <br /><br />
        Aksanti Oil acts as an intermediary firm that connects selected international oil companies with Congolese companies in need. We offer to our clients an extensive buying and delivery experience. Through our suppliers experience, we supply high-quality oil products to mining companies and oil companies which activities are located around the Katanga region.
        <br /><br />
        After finalizing the first pillar of our company`s business plan, Aksanti Oil aims to obtain an oil importer`s permit that will allow the company to join the private circle of Congolese oil companies. With the help of our suppliers, we aim to import around 2 millions liters per month starting the year 2022 in order to fill the market demands in the Katanga region.
      </AksantiAndText>
      <section className="w-full mb-6 md:mb-14">
        <img src="/aksanti-oil/map.jpg" className="w-full" alt='map' />
      </section>
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <SimpleGrid data={data} />
          <div className="max-w-2xl mx-auto mb-14">
            <Title size='two' classes='text-center mb-8'>
              Partners
            </Title>
            <div className="grid grid-cols-3 items-center gap-10">
              <img src="/aksanti-oil/grid/grid-1.png" alt='partner-1' />
              <img src="/aksanti-oil/grid/grid-2.jpg" alt='partner-2' />
              <img src="/aksanti-oil/grid/grid-3.png" alt='partner-3' />
            </div>
          </div>
          <ArrowLinkAndMailto 
            arrowLink='/contact'
            arrowLinkText='For more info about AKSANTI OIL Contact us:'
            mailToLink='partners@aksantigroup.com'
            mailToText='partners@aksantigroup.com'
          />
        </div>
      </section>
    </>
  )
}

export default AksantiOil