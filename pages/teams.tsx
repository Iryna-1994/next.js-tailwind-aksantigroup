import Head from "next/head"
import Content from "../components/Content"
import TeamsGrid from "../components/TeamsGrid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const Teams = () => {

  const gridData = [
    {
      title: 'Audit Committee',
      content: ['Sir Peter Estlin Chairman', 'Sipko Schat', 'Suet-Fern Lee', 'Arielle Malard de Rothschild', 'Gilles Denoyel'],
    },
    {
      title: 'Remuneration and Nomination Committee',
      content: ['Sylvain Héfès Chairman', 'Carole Piwnica', 'Sir Peter Estlin', 'Véronique Weill'],
    },
    {
      title: 'Risk Committee',
      content: ['Sipko Schat Chairman', 'Sir Peter Estlin', 'Suet-Fern Lee', 'Arielle Malard de Rothschild', 'Gilles Denoyel'],
    },
    {
      title: 'Sustainability Committee',
      content: ['Lucie Maurel-Aubert Chairwoman', 'Carole Piwnica', 'Lord Mark Sedwill'],
    },
  ]

  return (
    <>
      <Head>
        <title>Teams</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <section className="w-full relative mt-28 lg:mt-36 pt-20 pb-0 md:pb-20">
        <div className="flex items-center max-w-3xl xl:max-w-5xl pl-10 lg:pl-0 mx-auto">
          <Title size='one' classes='z-10'>
            Supervisory Board
          </Title>
          <div className="team-hero-clip-box clip-box absolute z-0 h-36 lg:h-56 left-0 bg-gray-200"></div>
        </div>
        <div className="max-w-xl xl:max-w-3xl mx-auto mt-28 mb-20">
          <ThinContent>
            The Supervisory Board carries out the ongoing supervision of the Company`s management by the Managing Partner, including notably the Company`s financial and accounting reporting system and its internal control mechanisms applicable to risk, compliance and internal audit.
          </ThinContent>
        </div>
        <div className="hidden lg:block absolute top-0 right-0">
          <img src="/pattern/pattern3.svg" className="w-full h-full object-cover" />
        </div>
      </section>
      <TeamsGrid />
      <section className="w-full my-20 md:my-28">
        <div className="max-w-2xl mx-auto mb-6 md:mb-12 px-4">
          <Title size="two">
            The specialised committees of the Supervisory Board
          </Title>
        </div>
        <div className="container max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
            {
              gridData.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col gap-8 bg-gray-100 px-5 xl:px-10 py-10">
                    <Title size='four'>
                      {item.title}
                    </Title>
                    <div className="flex flex-col gap-6">
                      {
                        item.content?.map((subItem: any, subIndex: number) => {
                          return (
                            <div key={subIndex}>
                              <Content textColor='text-gray-600'>
                                {subItem}
                              </Content>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Teams
