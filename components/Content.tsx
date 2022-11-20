import React from 'react'

const Content = (props: any) => {

  const { textSize, textColor, textAlign, children } = props;

  return (
    <p className={`${textSize} ${textAlign} ${textColor ? textColor : 'text-gray-600'}`}>
      {children}
    </p>
  )
};

export default Content