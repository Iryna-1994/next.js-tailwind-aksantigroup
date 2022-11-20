import Content from "./Content"
import Title from "./Title"

const OurStoryGrid = (props: any) => {

  const { data, title } = props

  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        {
          title && (
            <Title size='two' classes='text-center mb-8 md:mb-14'>
              {title}
            </Title>
          )
        }
        <div className="grid grid-cols-1 gap-20 lg:gap-28">
          {
            data.map((item: any, index: number) => {
              return (
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 md:gap-10 xl:gap-40`} key={index}>
                  <div className="w-full md:w-1/2 flex items-center max-h-96 rounded-xl shadow-lg md:shadow-2xl overflow-hidden">
                    <img src={item.imgSrc} className='w-full h-full object-cover object-center duration-500 hover:scale-110' />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-6 pr-0 lg:pr-20">
                    <Title size='three'>
                      {item.title}
                    </Title>
                    {
                      item.content?.map((contentItem: any, contentIndex: number) => {
                        return (
                          <Content textColor='text-gray-600' textSize='text-xl' key={contentIndex}>
                            {contentItem}
                          </Content>
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
  )
}

export default OurStoryGrid