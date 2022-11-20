import Head from "next/head"
import AksantiAndText from "../components/AksantiAndText"
import ArrowLinkAndMailto from "../components/ArrowLinkAndMailto"
import HeroNoImage from "../components/HeroNoImage"
import SimpleGrid from "../components/SimpleGrid"
import Title from "../components/Title"

const AksantiWood = () => {

  const data = [
    {
      title: '50+',
      content: 'Containers',
    },
    {
      title: '2 Destinations',
      content: 'China & Namibia',
    },
    {
      title: '1 Location',
      content: 'Katanga Province',
    },
    {
      title: '2019',
      content: 'Creation Year',
    },
  ]

  return (
    <>
      <Head>
        <title>Wood</title>
        <meta name="description" content="Wood page" />
      </Head>
      <HeroNoImage title='Aksanti Wood'>
        DRC occupies the leading position in Africa and the Congo Basin in terms of forest cover. However, the exploitation of these resources is still poorly controlled to the extent that it contributes only about 1% to GDP. Logging is all the operations and activities of felling, bucking and transporting wood to a temporary depot or to the factory gate, whether it is timber, firewood or any other forest product.
      </HeroNoImage>
      <AksantiAndText
        imgSrc='/aksanti-wood/aksanti.png'
        alt='wood'
      >
        As a wood exporter, we aim to respect the Congolese laws and international rules and regulations on wood exports. We aim to try new measures and working methods in the field of forestry technology. We aim to prioritize the social and environmental considerations with the integration of new skills and new working tools, training and retraining of staff, the establishment of partnerships with outside parties for social and environmental aspects.
        <br /><br />
        Aksanti Wood logged by concession, in other terms, the company practices selective logging after obtaining a forest concession contract; timber production respects the principles of sustainable management enshrined in the National Forest Code. In the coming year, the company will be backed by global certificates such as OLB and FSC certifications, which will allow us to manufacture finished wood products and exports them to the world's market. As of now, Aksanti Wood is solely focusing on the exports of wood from our diverse partners within the sector.
      </AksantiAndText>
      <section className="w-full py-6 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <SimpleGrid data={data} />
          <div className="max-w-2xl mx-auto mb-14">
            <Title size='two' classes='text-center mb-8'>
              Partners
            </Title>
            <div className="grid grid-cols-1 items-center gap-10">
              <img src="/aksanti-wood/grid/grid-1.png" width={200} className='mx-auto' alt='partner-1' />
            </div>
          </div>
          <ArrowLinkAndMailto 
            arrowLink='/contact'
            arrowLinkText='For more info about AKSANTI WOOD Contact us:'
            mailToLink='partners@aksantigroup.com'
            mailToText='partners@aksantigroup.com'
          />
        </div>
      </section>
    </>
  )
}

export default AksantiWood