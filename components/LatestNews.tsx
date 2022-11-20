import Content from "./Content"
import LinkTitle from "./LinkTitle"

const LatestNews = () => {


  const data = [
    {
      imgSrc: '/services/latest-news/latest-news-1.jpg',
      linkTitle: 'Rothschild & Co hires Sang Shin as Managing Director in North America',
      slug: '/',
      content: 'Senior hire enhances the firm`s Media & Telecom team in New York and further expands the Global Advisory business in North America.',
    },
    {
      imgSrc: '/services/latest-news/latest-news-2.jpg',
      linkTitle: 'Nick Bossart joins Rothschild & Co as Head of Global Advisory, Switzerland',
      slug: '/',
      content: 'In his role, Mr Bossart will apply his advisory experience to clients in Switzerland and bring Rothschild & Co`s global platform to them.',
    },
    {
      imgSrc: '/services/latest-news/latest-news-3.jpg',
      linkTitle: 'Rothschild & Co hires Sid Mehta as Managing Director in North America',
      slug: '/',
      content: 'Senior hire strengthens the firm`s Industrials team and further expands the Global Advisory business in North America.',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10">
      {
        data.map((item: any, index: number) => {
          return (
            <div className="flex flex-col">
              <div className="group h-72 overflow-hidden ml-4 mr-4 md:mr-8 z-10">
                <img src={item.imgSrc} className='w-full h-full object-cover duration-500 group-hover:scale-110' />
              </div>
              <div className="bg-white flex flex-col gap-7 px-8 pt-20 pb-10 -mt-12 h-full">
                <p className="text=xs text-gray-500">APPOINTMENTS</p>
                <LinkTitle slug='/'>
                  {item.linkTitle}
                </LinkTitle>
                <Content textSize='text-lg' textColor='text-gray-600'>
                  {item.content}
                </Content>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default LatestNews