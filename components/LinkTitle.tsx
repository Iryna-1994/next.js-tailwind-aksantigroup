import Link from "next/link"

const LinkTitle = (props: any) => {

  const { slug, children } = props

  const titleFontFamily = {
    fontFamily: 'initial'
  }

  return (
    <Link href={slug} className={`link-title relative w-fit text-sky-900 leading-tight text-3xl duration-500`} style={titleFontFamily}>
      {children}
    </Link>
  )
}

export default LinkTitle