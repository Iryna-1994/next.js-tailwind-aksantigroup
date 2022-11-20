import Content from "./Content"
import Title from "./Title"

const SimpleGrid = (props: any) => {

  const { data } = props

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
      {
        data.map((item: any, index: number) => {
          return (
            <div className="flex flex-col items-center gap-y-4 p-10 bg-gray-100 shadow-lg rounded-lg" key={index}>
              <Title size='three'>
                {item.title}
              </Title>
              <Content textAlign='text-center'>
                {item.content}
              </Content>
            </div>
          )
        })
      }
    </div>
  )
}

export default SimpleGrid