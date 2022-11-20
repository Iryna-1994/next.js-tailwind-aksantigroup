import ArrowLink from "./ArrowLink"
import Content from "./Content"
import LinkTitle from "./LinkTitle"
import Title from "./Title"

const OurApproachGrid = () => {

  const data = [
    {
      imgSrc: '/services/our-approach/our-approach-1.jpg',
      linkTitle: 'Understanding our clients is key',
      slug: '/',
      content: 'Building trusted relationships with our clients has been at the heart of Rothschild & Co`s ethos for more than 200 years. The success of this approach is proven by significant repeat business and partnerships that span decades.'
    },
    {
      imgSrc: '/services/our-approach/our-approach-2.jpg',
      linkTitle: 'Global scale',
      slug: '/',
      content: 'We believe in the importance of local market knowledge and being on-the-ground to assist our clients, wherever they are or wherever their business takes them. We then share insight across our network to build unparalleled sector and market knowledge.  With teams in over 40 countries, we cover all markets.',
      arrowLinkText: 'Find your local team',
      arrowLink: '/'
    },
  ]

  return (
    <section className="mt-0 lg:mt-12 pt-5 lg:pt-20 pb-20">
      <Title size='two' classes='text-center mb-6 md:mb-16'>
        Our approach
      </Title>
      <div className="container max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col">
                  <div className="w-full">
                    <img src={item.imgSrc} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-8 h-full -mt-12 ml-5 mr-5 lg:mr-20 p-8 pb-16 bg-gray-100">
                    <LinkTitle slug={item.slug}>
                      {item.linkTitle}
                    </LinkTitle>
                    <Content textSize="text-md" textColor='text-gray-600'>
                      {item.content}
                    </Content>
                    {
                      item.arrowLinkText && item.arrowLink ? (
                        <ArrowLink slug={item.arrowLink}>
                          {item.arrowLinkText}
                        </ArrowLink>
                      ) : (
                        <></>
                      )
                    }
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

export default OurApproachGrid