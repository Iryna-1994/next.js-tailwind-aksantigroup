import Head from "next/head"
import AksantiAndText from "../components/AksantiAndText"
import ArrowLinkAndMailto from "../components/ArrowLinkAndMailto"
import HeroNoImage from "../components/HeroNoImage"
import SimpleGrid from "../components/SimpleGrid"
import Title from "../components/Title"

const AksantiMining = () => {

  const data = [
    {
      title: '200+',
      content: 'Partners',
    },
    {
      title: '50+',
      content: 'Mining Equipments',
    },
    {
      title: '4+',
      content: 'Locations',
    },
    {
      title: '2020',
      content: 'Creation Year',
    },
  ]

  return (
    <>
      <Head>
        <title>Mining</title>
        <meta name="description" content="Mining page" />
      </Head>
      <HeroNoImage title='Aksanti Mining'>
        The subsoil of the Democratic Republic of Congo is one of the richest in the world in terms of natural resources, making mining one of the main economic activities of the country. The province of Katanga has a lot to offer in terms of mineral resources, from cobalt to copper via lithium, the province offers à complete eco-system of the world`s natural resources.
      </HeroNoImage>
      <AksantiAndText
        imgSrc='/aksanti-mining/aksanti.png'
        alt='mining'
      >
        As a mining company, we aim to operate our mines safely by promoting a deep-rooted culture based on our values and taking advantage of the mining skills that our partners have acquired over the many years of their activities. We offer an innovative approach toward mining management and creating new practices. Aksanti Mining prioritizes the health and safety of its employees, the communities in which it operates and the environment in which we are conducting our activities.
        <br /><br />
        Through time, our company has specialized in operating mining assets on a subcontract basis for outside companies. Our field of expertise include mining subcontracting services, geological studies, and mining management. Our company is located in Likasi since October 2020. By opting for our services, all mining companies are perfectly in compliance with the new Mining Law concerning subcontracting in the DRC.
      </AksantiAndText>
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <SimpleGrid data={data} />
          <div className="max-w-2xl mx-auto mb-14">
            <Title size='two' classes='text-center mb-8'>
              Partners
            </Title>
            <div className="grid grid-cols-3 items-center gap-10">
              <img src="/aksanti-mining/grid/grid-1.jpg" alt='partner-1' />
              <img src="/aksanti-mining/grid/grid-2.jpg" alt='partner-2' />
              <img src="/aksanti-mining/grid/grid-3.png" alt='partner-3' />
            </div>
          </div>
          <ArrowLinkAndMailto 
            arrowLink='/contact'
            arrowLinkText='For more info about AKSANTI MINING Contact us:'
            mailToLink='partners@aksantigroup.com'
            mailToText='partners@aksantigroup.com'
          />
        </div>
      </section>
    </>
  )
}

export default AksantiMining