import Head from "next/head"
import HeroNoImage from "../components/HeroNoImage"
import ImageRightText from "../components/ImageRightText"
import TeamsGrid from "../components/TeamsGrid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const WhoWeAre = () => {

  return (
    <>
      <Head>
        <title>What we do</title>
        <meta name="description" content="What we do page" />
      </Head>
      <HeroNoImage title='What We Do'>
        AKSANTI GROUP CORPORATION is a Congolese holding corporation that centers its activities on the country’s primary economy.
      </HeroNoImage>
      {/* <section className="w-full relative mt-28 lg:mt-36 pt-20 pb-0 lg:pb-20">
        <div className="flex items-center max-w-3xl xl:max-w-5xl pl-10 lg:pl-0 mx-auto">
          <Title size='one' classes='z-10'>
            What We Do
          </Title>
          <div className="team-hero-clip-box clip-box absolute z-0 h-36 lg:h-56 left-0 bg-gray-200"></div>
        </div>
        <div className="max-w-xl xl:max-w-3xl mx-auto mt-28 mb-20">
          <ThinContent>
            AKSANTI GROUP CORPORATION is a Congolese holding corporation that centers its activities on the country’s primary economy.
          </ThinContent>
        </div>
        <div className="hidden lg:block absolute top-0 bottom-0 right-0">
          <img src="/pattern/pattern3.svg" className="w-full h-full object-cover" />
        </div>
      </section> */}
      <div className="pt-0 lg:pt-14 xl:pt-28">
        <ImageRightText
          imgSrc='/what-we-do/team.webp'
          title='AKSANTI means THANK YOU in Swahili'
        >
          By understanding the needs of the Congolese economy, the company has created an extensive portfolio and strategic partnerships throughout the Congolese business sector. By focusing on the pillars of the Congolese economy; soil and sub-soil, the corporation has purposefully benefited from its strategic investments.
          <br /><br />
          The holding corporation has purposefully created four companies within the country`s key sectors, mining, wood, oil, and real estate. Today, we manage all four companies and are carefully expanding our portfolio to other already existing companies in other key sectors, technology, manufacturing, and agribusiness.
        </ImageRightText>
      </div>
      <TeamsGrid />
    </>
  )
}

export default WhoWeAre
