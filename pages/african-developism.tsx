import Head from "next/head"
import Hero from "../components/Hero"
import Title from "../components/Title"

const DevelopismList = () => {

  const data = [
    'Africa`s economic growth and dependence since independence has been characterised by a zero-sum economic interaction with the West. This was no more than a continuation of the Centre- Periphery relationship that existed during colonial times. The result of the zero-sum game interaction between Africa and the West has been to further increase the historic unequal exchange. Economic crises marked by massive unemployment, low wages and high prices have led to dangerous migrations from the discontented continent (Council for the Development of Social Science Research in Africa).',
    'In short, this is the African-exceptionalism, “It is the sense that African people are unruly as citizens and irresponsible as politicians and bureaucrats. Africa`s state is always behind,” stated Dr. Christopher Davis',
    'Times have changed. Africa is now the fastest growing continent in the world (African Development Bank, AfDB).',
    'We are entering the phase of African-developmentalism, in which African people are positively transforming the economy of our continents. The key reasons behind this growth surge included government action to end armed conflicts, improve macroeconomic conditions, and undertake microeconomic reforms to create a better business climate. To start, several African countries halted their deadly hostilities, creating the political stability necessary to restart economic growth. Next, Africa’s economies grew healthier as governments reduced the average inflation rate from 22 percent in the 1990s to 8 percent after 2000. They trimmed their foreign debt by one-quarter and shrunk their budget deficits by two-thirds. Finally, African governments increasingly adopted policies to energize markets. They privatized state-owned enterprises, increased the openness of trade, lowered corporate taxes, strengthened regulatory and legal systems, and provided critical physical and social infrastructure. (McKinsey & Company)',
    'Africans understood that the solution is to develop new theories and pragmatic solutions that derive from autonomous Africa-centered positions. This is the significance of an alternative African developmentalism (Council for the Development of Social Science Research in Africa).',
  ]

  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <Title size='two' classes='text-center mb-8 md:mb-14'>
          African Developism
        </Title>
        <div className="max-w-4xl mx-auto">
          <ul className="list-decimal ml-4 lg:ml-0">
            {
              data.map((item: any, index: number) => {
                return (
                  <li className="mb-7 bg-gray-200 p-8 rounded-lg shadow-lg duration-500 hover:translate-x-10" key={index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

const DevelopismMap = () => {
  return (
    <section className="w-full mb-6 md:mb-14">
      <div className="container max-w-7xl mx-auto p-4">
        <img src="/african-developism/map.png" className="mx-auto" alt="map" />
      </div>
    </section>
  )
}

const AfricanDevelopism = () => {
  return (
    <>
      <Head>
        <title>African developism</title>
        <meta name="description" content="African developism page" />
      </Head>
      <Hero
        imgSrc='/african-developism/hero.jpg'
        title='African Developism'
      />
      <DevelopismList />
      <DevelopismMap />
    </>
  )
}

export default AfricanDevelopism