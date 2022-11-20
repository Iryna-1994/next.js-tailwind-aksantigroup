import Head from "next/head"
import Content from "../components/Content"
import Hero from "../components/Hero"
import Title from "../components/Title"

const AksantiPhilosophy = () => {

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
        <title>Aksanti philosophy</title>
        <meta name="description" content="Aksanti philosophy page" />
      </Head>
      <Hero
        imgSrc='/aksanti-philosophy/hero.jpg'
        title='Aksanti Philosophy'
      />
      <section className="w-full py-6 md:py-14">
        <div className="max-w-2xl mx-auto mb-6 md:mb-12 px-4">
          <Title size="two" classes='text-center'>
            The specialised committees of the Supervisory Board
          </Title>
        </div>
        <div className="container max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
              gridData.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col gap-8 bg-gray-100 px-6 xl:px-10 py-10 shadow-xl" key={index}>
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

export default AksantiPhilosophy