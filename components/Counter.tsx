import React, { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

const Counter = () => {

  const data = [
    {
      number: 200,
      text: 'Congolese Partners',
      plugs: '+',
    },
    {
      number: 50,
      text: 'Containers Exported',
      plugs: '+',
    },
    {
      number: 40,
      text: 'Properties Managed',
      plugs: '+',
    },
    {
      number: 4,
      text: 'Diversified Companies',
    },
    {
      number: 2,
      text: 'Launched Start-ups',
    },
  ]

  const hiddenRef = useRef<HTMLDivElement>(null)
  const [counterVisible, setCounterVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = () => {
    const { current } = hiddenRef
    if (window.pageYOffset + window.innerHeight >= (current ? current.offsetTop: 0)) {
      setCounterVisible(true)
    }
  }

  return (
    <section className="w-full py-20 lg:py-28 bg-gray-100" ref={hiddenRef}>
      <div className="container max-w-7xl mx-auto p-4">
        <div className="w-full flex flex-col md:flex-row justify-evenly gap-20 md:gap-10">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col items-center" key={index}>
                  <div className='flex items-center'>
                    <CountUp end={counterVisible ? item.number : 0} duration={counterVisible ? 2 : 0} className="text-5xl md:text-6xl lg:text-8xl text-red-900" style={{ fontFamily: 'initial' }} />
                    {
                      item.plugs && (
                        <p className="text-4xl lg:text-7xl text-red-900 font-bold ml-2" style={{ fontFamily: 'initial' }}>+</p>
                      )
                    }
                  </div>
                  <p className="text-sm text-gray-500 mt-4 lg:mt-1">{item.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Counter