import React from 'react'
import Carousel from 'nuka-carousel'
import Slider from './Slider'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const SliderContainer = () => {

  const items = [
    {
      img: '/home/slider/slider-one.webp',
      slug: '/',
      title: 'Rothschild & Co: 2022 - 3rd quarter release',
      desc: 'Solid revenue performance despite a more uncertain and difficult environment.'
    },
    {
      img: '/home/slider/slider-two.webp',
      slug: '/',
      title: 'Climate Impact Report launch',
      desc: 'We are pleased to announce the publication of Rothschild & Co`s Climate Impact Report.'
    },
    {
      img: '/home/slider/slider-three.jpg',
      slug: '/',
      title: 'Rothschild & Co`s UK Wealth Management business wins two PIMFA Diversity & Inclusion Awards',
      desc: 'Rothschild & Co is delighted to announce that its UK Wealth Management business has won both the Inclusive Talent Management and Best Diversity & Inclusion Initiative (large firm) categories in the 2022 PIMFA Diversity & Inclusion Awards.'
    },
    {
      img: '/home/slider/slider-four.webp',
      slug: '/',
      title: 'Rothschild & Co receives three major awards from The Banker magazine',
      desc: 'Our Global Advisory business is named 2022`s Independent Investment Bank of the Year, and Investment Bank of the Year for M&A and for Restructuring.'
    },
    {
      img: '/home/slider/slider-five.webp',
      slug: '/',
      title: 'Rothschild & Co hires Sang Shin as Managing Director in North America',
      desc: 'Senior hire enhances the firm`s Media & Telecom team in New York and further expands the Global Advisory business in North America.'
    },
    {
      img: '/home/slider/slider-six.webp',
      slug: '/',
      title: 'Rothschild & Co announces changes in corporate governance',
      desc: 'David de Rothschild is appointed Honorary Chairman of the Rothschild & Co Supervisory Board Marc-Olivier Laurent is appointed Chairman of the Rothschild & Co Supervisory Board'
    },
  ]

  return (
    <section className='py-12 relative'>
      <p className='text-center text-gray-600 mb-12 lg:mb-24 uppercase'>latest news</p>
      <div className='w-full relative pt-6 md:pt-24 pb-14 md:pb-48'>
        <div className='clip-box bg-gray-100 absolute top-0 left-0 bottom-0 w-3/5 md:w-4/5'></div>
        <div className='container max-w-7xl mx-auto p-4 px-0 md:px-4'>
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide} className="slide-left-btn">
                <ArrowBackIosIcon />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide} className="slide-right-btn">
                <ArrowForwardIosIcon />
              </button>
            )}
            renderTopCenterControls={({ currentSlide, slideCount }) => (
              <div className='text-lg md:text-2xl'>
                {`${currentSlide + 1} / ${slideCount}`}
              </div>
            )}
            slidesToShow={1}
            wrapAround={true}
            cellSpacing={40}
            dragging={true}
          >
            {
              items.map((item: any, index: number) => {
                return (
                  <Slider imgLink={item.img} slug={item.slug} title={item.title} desc={item.desc} key={index} />
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default SliderContainer