import Head from "next/head"
import Content from "../components/Content"
import FAQ from "../components/FAQ"
import HeroNoImage from "../components/HeroNoImage"
import ImageRightText from "../components/ImageRightText"
import Title from "../components/Title"

const PrioritiesGrid = () => {

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

  return (
    <section className="w-full py-6 md:py-14">
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
                <div className="flex flex-col gap-6 bg-gray-100 px-10 py-10 shadow-xl" key={index}>
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
  )
}

const ChartGrid = () => {
  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="max-w-3xl mx-auto bg-sky-900 p-10 mb-20 md:mb-28">
          <Content textColor='text-gray-100'>
          As in any market, deciding where and how to compete is critical. Companies with exposure to high-growth cities, countries, and regions improve their odds.
          <br/><br/>
          Likewise, companies that ride strong industry trends, such as rapid adoption of mobile and digital technology, have much better odds of outperforming.
          <br/><br/>
          Sometimes those are “trends with a twist,” such as Africa`s large unserved markets or infrastructure gaps: to benefit from such trends, companies need the imagination to see unmet demand or unsolved problems as opportunities. (McKinsey & Company)
          <br/><br/>
          <span className="italic">Images and Data source: McKinsey & Company</span>
          </Content>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          <img src="/invest-in-africa/grid/grid-1.png" alt="chart1" />
          <img src="/invest-in-africa/grid/grid-2.png" alt="chart2" />
        </div>
      </div>
    </section>
  )
}

const InvestInAfrica = () => {

  return (
    <>
      <Head>
        <title>Investing in africa</title>
        <meta name="description" content="Investing in africa page" />
      </Head>
      <HeroNoImage title='Investing In Africa'>
        With a current population of 1.2 billion, Africa is projected to double its population over the next 30 years, making the continent an exception in a world of slowing population growth. Moreover, it will soon be the fastest-urbanizing region in the world.
      </HeroNoImage>
      <ImageRightText
        imgSrc='/invest-in-africa/invest-africa.jpg'
        title='What does it take to win in Africa?'
      >
        Africa already has as many cities with more than one million inhabitants as North America does, and more than 80 percent of its population growth over the next two decades will occur in cities.<br /><br />
        The income per capita of Africa`s cities is more than double the continental average, making them attractive markets for many businesses.<br /><br />
        <span className="italic">Images and Data source: McKinsey & Company</span>
      </ImageRightText>
      <PrioritiesGrid />
      <ChartGrid />
      <FAQ />
    </>
  )
}

export default InvestInAfrica