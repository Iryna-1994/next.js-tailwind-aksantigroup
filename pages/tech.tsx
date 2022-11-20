import Head from "next/head"
import ArrowLinkAndMailto from "../components/ArrowLinkAndMailto"
import Content from "../components/Content"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import TabContainer from "../components/TabContainer"
import ThinContent from '../components/ThinContent'
import Title from "../components/Title"

const Tech = () => {

  const data = [
    {
      imgSrc: '/csr/grid/grid-1.jpg',
      linkTitle: 'Products and services',
      slug: '/',
      content: 'The integration of considerations about the environmental impact of our products and services is key to ensuring sustainability is at the heart of our business strategy.',
    },
    {
      imgSrc: '/csr/grid/grid-2.jpg',
      linkTitle: 'Philanthropic partnership',
      slug: '/',
      content: 'R&Co4Generations is Rothschild & Co`s platform for supporting social and environmental causes, locally and globally. Find out more about our global flagship partnership with an environmental focus.',
    },
    {
      imgSrc: '/csr/grid/grid-3.png',
      linkTitle: 'Group Environment Statement',
      slug: '/',
      content: 'R&Co4Generations is Rothschild & Co`s platform for supporting social and environmental causes, locally and globally. Find out more about our global flagship partnership with an environmental focus.',
    },
    {
      imgSrc: '/csr/grid/grid-4.jpg',
      linkTitle: '2020 Response to the Carbon Disclosure Project',
      slug: '/',
      content: 'Rothschild & Co has reported to CDP`s climate change questionnaire since 2018. In 2020, the group achieved an "A-" rating, improving on the "B" rating we received the previous year.',
    },
  ]

  return (
    <>
      <Head>
        <title>Technology</title>
        <meta name="description" content="Technology page" />
      </Head>
      <Hero
        imgSrc='/tech/hero.jpg'
        title='Technology'
      />
      <section className='w-full py-6 md:py-14'>
        <div className='max-w-3xl mx-auto p-4'>
          <Title size='two' classes='text-center mb-8'>
            About
          </Title>
          <ThinContent>
            Aksanti Group focus on investing and creating tech solutions in the areas of transportation & logistics, hospitality management, agriculture, financial and educational inclusion.
          </ThinContent>
          <Content>
            <br />
            As a Group, we do not only invest our money, we invest our time, skills and networks.
            <br /><br />
            We are passionate about building early-stage businesses to create a better future for the Batoto wa Congo.
          </Content>
        </div>
      </section>
      <TabContainer />
      <section className='w-full py-5 md:py-14'>
        <div className='container max-w-7xl mx-auto p-4'>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-24 mb-14">
            {
              data.map((item: any, index: number) => {
                return (
                  <Grid imgSrc={item.imgSrc} linkTitle={item.linkTitle} slug={item.slug} content={item.content} key={index} />
                )
              })
            }
          </div>
          <ArrowLinkAndMailto 
            arrowLink='/contact'
            arrowLinkText='For more info about AKSANTI TECH Contact us:'
            mailToLink='partners@aksantigroup.com'
            mailToText='partners@aksantigroup.com'
          />
        </div>
      </section>
    </>
  )
}

export default Tech