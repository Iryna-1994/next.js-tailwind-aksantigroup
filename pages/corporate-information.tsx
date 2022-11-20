import Head from "next/head"
import ArrowLinkAndMailto from "../components/ArrowLinkAndMailto"
import Hero from "../components/Hero"
import ProgressBar from "../components/ProgressBar"
import SimpleGrid from "../components/SimpleGrid"

const CorporateInformation = () => {

  const data = [
    {
      title: 'Name',
      content: 'Aksanti group sarl',
    },
    {
      title: 'Rccm',
      content: 'CD/KNG/RCCM/19-B-00247',
    },
    {
      title: 'Nif',
      content: '01-910-N437426',
    },
    {
      title: 'Address',
      content: '2 Avenue Bauka, C/Ngaliema, Kinshasa - DRC',
    },
  ]

  return (
    <>
      <Head>
        <title>Corporate information</title>
        <meta name="description" content="Corporate information page" />
      </Head>
      <Hero
        imgSrc='/corporate-information/hero.jpg'
        title='Corporate Information'
      />
      <ProgressBar />
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <SimpleGrid data={data} />
          <ArrowLinkAndMailto 
            arrowLink='/contact'
            arrowLinkText='For more info about AKSANTI GROUP Contact us:'
            mailToLink='info@aksantigroup.com'
            mailToText='info@aksantigroup.com'
          />
        </div>
      </section>
    </>
  )
}

export default CorporateInformation