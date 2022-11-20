import Link from "next/link"
import ArrowLink from "./ArrowLink"

const ArrowLinkAndMailto = (props: any) => {

  const {arrowLink, arrowLinkText, mailToLink, mailToText} = props

  return (
    <div className="flex flex-col items-center gap-y-5">
      <ArrowLink slug={arrowLink}>
        {arrowLinkText}
      </ArrowLink>
      <Link href={`mailto:${mailToLink}`} className="text-center duration-300 hover:text-orange-700 hover:underline underline-offset-2">
        {mailToText}
      </Link>
    </div>
  )
}

export default ArrowLinkAndMailto