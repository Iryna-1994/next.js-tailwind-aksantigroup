import Content from "./Content"
import Title from "./Title"

const ImageTopText = (props: any) => {

  const { imgSrc, title, children } = props

  return (
    <section className='relative w-full pt-10 pb-14 md:pb-28'>
      <img src={imgSrc} className='sustainability-img absolute w-full h-full object-cover object-top top-0' style={{ zIndex: '-1' }} alt={title} />
      <div className='container max-w-5xl mx-auto p-4 flex justify-end z-10'>
        <div className='flex flex-col gap-8 max-w-sm p-10 bg-gray-100 mt-48 md:-mt-28'>
          <Title
            size="three"
          >
            {title}
          </Title>
          <Content textColor="text-gray-600">
            {children}
          </Content>
        </div>
      </div>
    </section>
  )
}

export default ImageTopText