import ArrowLink from "./ArrowLink"
import Content from "./Content"
import LinkTitle from "./LinkTitle"

const BottomGrid = (props: any) => {

  const { data } = props

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col gap-8 p-5 lg:p-10 bg-gray-100" key={index}>
                  <LinkTitle slug={item.slug}>
                    {item.title}
                  </LinkTitle>
                  <Content textColor='text-gray-600'>
                    {item.content}
                  </Content>
                  <ArrowLink slug={item.slug}>
                    {item.linkText}
                  </ArrowLink>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BottomGrid