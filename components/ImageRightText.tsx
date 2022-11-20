import ArrowLink from "./ArrowLink"
import Content from "./Content"
import LinkTitle from "./LinkTitle"
import Title from "./Title"

const ImageRightText = (props: any) => {

  const { imgSrc, titleLink, title, readMore, readMoreLink, children } = props

  return (
    <section className='w-full flex flex-col gap-y-12 md:flex-row items-center py-6 md:py-14'>
      <div className='group clip-box w-full md:w-1/2 h-72 md:h-96 lg:h-auto overflow-hidden'>
        <img src={imgSrc} className='w-full h-full object-cover duration-500 group-hover:scale-110' alt={title} />
      </div>
      <div className='flex flex-col gap-8 w-full md:w-1/2 max-w-lg pl-4 md:pl-8 pr-4'>
        {
          titleLink ? (
            <LinkTitle slug={titleLink}>
              {title}
            </LinkTitle>
          ) : (
            <Title size='linkTitle'>
              {title}
            </Title>
          )
        }
        <Content>
          {children}
        </Content>
        {
          readMoreLink && (
            <ArrowLink slug={readMoreLink}>
              {readMore}
            </ArrowLink>
          )
        }
      </div>
    </section>
  )
}

export default ImageRightText