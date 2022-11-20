import Head from "next/head"
import ArrowLink from "../components/ArrowLink"
import Content from "../components/Content"
import FAQ from "../components/FAQ"
import Grid from "../components/Grid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const CSR = () => {

  const priorityData = [
    {
      title: 'Clear emission reduction pathway',
      list: [
        '-30% operational GHG emissions by 2030 (vs 2018)',
        '100% electricity from renewable sources by 2025',
      ],
    },
    {
      title: 'Net-zero operational emissions by 2030',
      list: [
        'Compensation for scope 1, 2 and 3 emissions through a balanced portfolio of certified carbon offsets',
        'Shift from offsetting operational GHG emissions towards active carbon removal',
      ],
    },
  ]

  const csrGrid = [
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
      arrowLinks: [
        'World Land Trust'
      ],
    },
    {
      imgSrc: '/csr/grid/grid-3.png',
      linkTitle: 'Group Environment Statement',
      slug: '/',
      arrowLinks: [
        'Download here'
      ],
    },
    {
      imgSrc: '/csr/grid/grid-4.jpg',
      linkTitle: '2020 Response to the Carbon Disclosure Project',
      slug: '/',
      content: 'Rothschild & Co has reported to CDP`s climate change questionnaire since 2018. In 2020, the group achieved an "A-" rating, improving on the "B" rating we received the previous year.',
      arrowLinks: [
        'Download here'
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>CSR</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <section className="w-full relative mt-16 pt-20 pb-0 lg:pb-20">
        <div className="hidden lg:block mx-14 bg-gray-200 h-96"></div>
        <div className="flex flex-col lg:flex-row items-center static lg:absolute w-full top-36">
          <div className="group service-hero-img-box clip-box w-full lg:w-2/5 overflow-hidden h-96 z-10">
            <img src="/csr/hero.jpg" className="w-full h-full object-cover duration-500 group-hover:scale-110" />
          </div>
          <div className="w-full lg:w-3/5 mb-14 z-0 px-4">
            <div className="bg-gray-100 lg:bg-transparent px-10 lg:px-0 py-10 md:py-20 lg:py-0 -mt-10 md:-mt-20 lg:mt-0">
              <Title size='one' classes='mt-6 lg:mt-0'>
                Low-carbon economy
              </Title>
            </div>
          </div>
          <div className="hidden lg:block absolute service-pattern-box w-full h-48 -bottom-5" style={{ zIndex: '-1' }}></div>
        </div>
      </section>
      <section className="w-full mt-0 lg:mt-36 py-5 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center gap-y-10">
            <div className="flex flex-col gap-6 w-full md:w-2/3 pr-0 md:pr-20">
              <Title size='two'>
                We are conscious of the impact of climate change on our stakeholders and business.
              </Title>
              <ThinContent>
                We are committed to limiting and reducing the direct and indirect impact of our operations, products and services, and want to act as the catalyst for funding innovation and support the transition towards a low carbon economy.
              </ThinContent>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/3 h-72">
              <img src="/csr/imageutfi.png" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-5 md:py-14">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="mb-10 md:mb-20">
            <Title size='two' classes='text-center'>
              Operational management priorities
            </Title>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {
              priorityData.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col gap-6 bg-gray-100 px-10 py-10">
                    <Title size='three'>
                      {item.title}
                    </Title>
                    <ul className="flex flex-col gap-y-6 list-disc pl-4">
                      {
                        item.list?.map((listItem: any, listIndex: number) => {
                          return (
                            <li className="pl-2" key={listIndex}>
                              {listItem}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <FAQ />
      <section className='py-5 md:py-14'>
        <div className='container max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-24'>
          {
            csrGrid.map((item: any, index: number) => {
              return (
                <Grid imgSrc={item.imgSrc} linkTitle={item.linkTitle} slug={item.slug} content={item.content} arrowLink={item.arrowLinks} key={index} />
              )
            })
          }
        </div>
      </section>
      <section className='relative w-full mt-12 mb-28 pt-10 pb-28 overflow-hidden'>
        <img src='/home/corporate- sustainability.jpg' className='absolute w-full h-full object-cover top-0' style={{ zIndex: '-1' }} />
        <div className='container max-w-5xl mx-auto p-4 flex justify-end z-10'>
          <div className='flex flex-col gap-8 max-w-md p-10 bg-gray-100'>
            <Title
              size="three"
            >
              Sustainability Report 2021
            </Title>
            <Content>
              More detailed information about governance, facts & figures, and performance targets.
            </Content>
            <ArrowLink slug='/'>
              Download here
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default CSR
