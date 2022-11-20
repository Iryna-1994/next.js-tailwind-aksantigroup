import Link from "next/link"
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const ArrowLink = (props: any) => {

  const { slug, classes, children } = props

  return (
    <Link href={slug} target='_blank' className={`w-fit flex items-center gap-x-4 hover:gap-x-2 text-sky-900 leading-tight duration-300 hover:text-orange-700 ${classes ? classes : 'text-md md:text-md'}`}>
      <div className="flex items-center duration-300">
        <NavigateNextIcon className="text-orange-700" />
      </div>
      {children}
    </Link>
  )
}

export default ArrowLink