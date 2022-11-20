const ThinContent = (props: any) => {

  const { children } = props

  return (
    <p className="thin-content text-xl md:text-2xl lg:text-3xl leading-normal text-gray-600 font-thin">
      {children}
    </p>
  )
}

export default ThinContent