import React from 'react'
import ArrowLink from '../ArrowLink'
import Content from '../Content'
import LinkTitle from '../LinkTitle'

const Slider = (props: any) => {

  const { imgLink, slug, title, desc } = props

  return (
    <div className='slider-box flex justify-end relative cursor-grabbing'>
      <div className='slider-left-box absolute left-4 md:left-0 right-4 md:right-auto max-w-sm lg:max-w-md mt-64 md:mt-16 p-6 md:p-10 md:pb-20 bg-white'>
        <div className='slider-title'>
          <LinkTitle
            slug={slug}
          >
            {title}
          </LinkTitle>
        </div>
        <div className="slider-content my-10">
          <Content
            textSize="text-base"
            textColor="text-gray-800"
            textAlign="text-left"
          >
            {desc}
          </Content>
        </div>
        <div className='slider-read-more'>
          <ArrowLink
            slug={slug}
          >
            Read More
          </ArrowLink>
        </div>
      </div>
      <div className='slider-right-box w-full md:w-3/5 lg:w-3/4'>
        <img src={imgLink} className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Slider