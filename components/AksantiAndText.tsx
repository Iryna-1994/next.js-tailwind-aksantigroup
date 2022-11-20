import Content from "./Content"

const AksantiAndText = (props: any) => {

  const { imgSrc, alt, children } = props

  return (
    <section className="w-full py-6 md:py-14">
      <div className="max-w-3xl mx-auto p-4">
        <img src={imgSrc} className='w-80 mx-auto mb-10' alt={alt} />
        <Content>
          {children}
        </Content>
      </div>
    </section>
  )
}

export default AksantiAndText