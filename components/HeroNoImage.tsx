import ThinContent from "./ThinContent"
import Title from "./Title"

const HeroNoImage = (props: any) => {

  const {title, children} = props

  return (
    <section className="w-full relative mt-28 lg:mt-36 pt-20 pb-0 lg:pb-20 mb-0 lg:-mb-20">
      <div className="flex items-center max-w-3xl xl:max-w-5xl pl-10 lg:pl-0 mx-auto">
        <Title size='one' classes='z-10'>
          {title}
        </Title>
        <div className="team-hero-clip-box clip-box absolute z-0 h-36 lg:h-56 left-0 bg-gray-200"></div>
      </div>
      <div className="max-w-xl xl:max-w-3xl mx-auto mt-28 mb-20 px-4">
        <ThinContent>
          {children}
        </ThinContent>
      </div>
      <div className="hidden lg:block absolute top-0 bottom-0 right-0">
        <img src="/pattern/pattern3.svg" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}

export default HeroNoImage