import ArrowLink from "./ArrowLink"
import Content from "./Content"
import Title from "./Title"

const OurServicesGrid = () => {

  const servicesGrid = [
    {
      imgSrc: '/services/our-services/our-service-1.webp',
      title: 'M&A and Strategic Advisory',
      content: 'Consistently one of the world`s most active M&A advisers, with an exceptional track record across all roles and transaction types',
      arrowLinks: [
        {
          text: 'Learn More',
          slug: '/',
        },
      ]
    },
    {
      imgSrc: '/services/our-services/our-service-2.webp',
      title: 'Debt Advisory and Restructuring',
      content: 'Helping our clients obtain the best possible debt products, structure and terms and execute even the most complex restructuring plans',
      arrowLinks: [
        {
          text: 'Debt Advisory',
          slug: '/',
        },
        {
          text: 'Restructuring',
          slug: '/',
        },
      ]
    },
    {
      imgSrc: '/services/our-services/our-service-3.webp',
      title: 'Equity Advisory',
      content: 'Comprehensive advisory services across listed equity, private investment, shareholder engagement and investor intelligence',
      arrowLinks: [
        {
          text: 'Equity Advisory',
          slug: '/',
        },
        {
          text: 'ECM Advisory',
          slug: '/',
        },
        {
          text: 'Private Capital',
          slug: '/',
        },
        {
          text: 'Investor Advisory',
          slug: '/',
        },
        {
          text: 'Investor Marketing',
          slug: '/',
        },
      ]
    },
  ]

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="mb-6 md:mb-24">
          <Title size='two' classes="text-center">
            Our services
          </Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10">
          {
            servicesGrid?.map((item: any, index: number) => {
              return (
                <div className="flex flex-col">
                  <div className="w-full h-56">
                    <img src={item.imgSrc} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-6 -mt-10 ml-5 mr-8 p-8 bg-gray-100 h-full">
                    <Title size="three">
                      {item.title}
                    </Title>
                    <Content>
                      {item.content}
                    </Content>
                    <div className="flex flex-col gap-4">
                      {
                        item.arrowLinks?.map((linkItem: any, linkIndex: number) => {
                          return (
                            <ArrowLink slug={linkItem.slug} classes="text-sm" key={linkIndex}>
                              {linkItem.text}
                            </ArrowLink>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default OurServicesGrid