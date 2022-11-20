import React, { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'
import Content from './Content'

const ProgressBar = () => {

  const hiddenRef = useRef<HTMLDivElement>(null)
  const [progressVisible, setProgressVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = () => {
    const { current } = hiddenRef
    if (window.pageYOffset + window.innerHeight >= (current ? current.offsetTop : 0)) {
      setProgressVisible(true)
    }
  }

  return (
    <section className='w-full py-6 md:py-14'>
      <div className='max-w-3xl mx-auto p-4' ref={hiddenRef}>
        <div className='w-full flex justify-between mb-1'>
          <Content>
            Congolese Owned
          </Content>
          <Content>
            <CountUp end={progressVisible ? 100 : 0} duration={progressVisible ? 3 : 0} className="" />%
          </Content>
        </div>
        <div className="relative w-full h-3 bg-gray-200 rounded-md overflow-hidden">
          <div className={`absolute top-0 left-0 bottom-0 duration-1000 ${progressVisible ? 'w-full bg-green-600' : 'w-0 bg-orange-600'}`} style={{ transition: '3s' }}></div>
        </div>
      </div>
    </section>
  )
}

export default ProgressBar

