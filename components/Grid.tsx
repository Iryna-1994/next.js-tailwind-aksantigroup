import ArrowLink from "./ArrowLink"
import Content from "./Content"
import LinkTitle from "./LinkTitle"

const Grid = (props: any) => {

  const { imgSrc, linkTitle, slug, content, arrowLink } = props

  return (
    <div className="flex flex-col">
      <div className="group h-80 overflow-hidden">
        <img src={imgSrc} className="w-full h-full object-cover duration-500 group-hover:scale-110" />
      </div>
      <div className="flex flex-col flex-auto gap-6 w-5/6 ml-4 -mt-12 bg-gray-100 p-10 pb-16 z-10">
        <LinkTitle slug={slug}>
          {linkTitle}
        </LinkTitle>
        {
          content ? (
            <Content textColor='text-gray-600' textSize='text-lg'>
              {content}
            </Content>
          ) : (
            <></>
          )
        }
        {
          arrowLink?.map((linkItem: any) => {
            return (
              <ArrowLink slug={slug}>
                {linkItem}
              </ArrowLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Grid