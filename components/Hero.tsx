import Title from "./Title"

const Hero = (props: any) => {

  const {imgSrc, title, objectFit} = props

  return (
    <section className="w-full relative mt-16 mb-0 lg:mb-32 pt-20 pb-0 lg:pb-20">
      <div className="hidden lg:block mx-14 bg-gray-200 h-96"></div>
      <div className="flex flex-col lg:flex-row items-center static lg:absolute w-full top-36">
        <div className="group service-hero-img-box clip-box w-full lg:w-2/5 overflow-hidden h-96 z-10">
          <img src={imgSrc} className={`w-full h-full ${objectFit ? objectFit : 'object-cover'} duration-500 group-hover:scale-110`} alt={title} />
        </div>
        <div className="w-full lg:w-3/5 mb-14 z-0 px-4 lg:px-0">
          <div className="bg-gray-100 lg:bg-transparent px-10 lg:px-0 py-10 md:py-20 lg:py-0 -mt-10 md:-mt-20 lg:mt-0">
            <Title size='one' classes='mt-6 lg:mt-0'>
              {title}
            </Title>
          </div>
        </div>
        <div className="hidden lg:block absolute service-pattern-box w-full h-48 -bottom-5" style={{ zIndex: '-1' }}></div>
      </div>
    </section>
  )
}

export default Hero