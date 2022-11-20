const Title = (props: any) => {

  const {size, color, classes, children} = props
  let textSize = 'text-2xl'
  if (size === 'one') {
    textSize = 'text-4xl md:text-5xl lg:text-6xl'
  } else if (size === 'two') {
    textSize = 'text-3xl md:text-4xl lg:text-5xl'
  } else if (size === 'three') {
    textSize = 'text-2xl md:text-3xl'
  } else if (size === 'linkTitle') {
    textSize = 'text-3xl'
  }

  const titleFontFamily = {
    fontFamily: 'initial'
  }

  return (
    <p className={`${textSize} ${color ? color : 'text-sky-900'} ${classes}`} style={titleFontFamily}>
      {children}
    </p>
  )
}

export default Title