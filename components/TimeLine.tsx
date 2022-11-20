import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward'
import StorageIcon from '@material-ui/icons/Storage'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import PortraitIcon from '@material-ui/icons/Portrait'
import LineStyleIcon from '@material-ui/icons/LineStyle'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'
import CodeIcon from '@material-ui/icons/Code'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue'
import GroupIcon from '@material-ui/icons/Group'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'
import Title from './Title'
import Content from './Content'

const Line = () => {
  return (
    <div className='hidden md:block h-0.5 bg-gray-300 mx-4' style={{ minWidth: '30px' }}></div>
  )
}

const VerticalLine = () => {
  return (
    <div className={`hidden md:block w-5 h-full rounded-xl duration-300 bg-orange-500 group-hover:bg-green-600`}></div>
  )
}

const MobileLine = () => {
  return (
    <div className={`block md:hidden w-3 h-20 rounded-xl duration-300 bg-orange-500`}></div>
  )
}

const TimeLine = () => {

  const timeLineData = [
    {
      year: 1998,
      content: 'The two founders created Aksanti Sana, a retailing company that focuses on selling imported clothes and accessories in Kinshasa.',
      icon: <AccessibleForwardIcon />
    },
    {
      year: 2003,
      content: 'We started our first diversification, within the import/export sector with cold storage rooms and fresh provisions.',
      icon: <StorageIcon />
    },
    {
      year: 2006,
      content: 'With the acquired Knowledge in the import/export sector, we created Aksanti Oil, an integrated oil company in the heart of the city of Lubumbashi. The company`s activities covered the transportation and supply of refined oil.',
      icon: <EmojiTransportationIcon />
    },
    {
      year: 2012,
      content: 'Aksanti Oil`s installation was sold to United Petroleum, and Aksanti Logistics joined the portfolio of companies.',
      icon: <PortraitIcon />
    },
    {
      year: 2014,
      content: 'Aksanti Sana started numerous real estate projects within the cities of Lubumbashi and Kinshasa.',
      icon: <LineStyleIcon />
    },
    {
      year: 2017,
      content: 'Aksanti Sana started managing properties under the same division.',
      icon: <SupervisedUserCircleIcon />
    },
    {
      year: 2018,
      content: 'Aksanti Sana SARL became Aksanti Group Corporation with new innovative and younger management & leadership team, and Aksanti Oil`s activities were redefined.',
      icon: <LocalActivityIcon />
    },
    {
      year: 2019,
      content: 'We created Aksanti Wood, a wood exporter company that supply the cities of Shanghai, China and Walvis Bay, Namibia. At the same time, Aksanti Group launched its real estate development division.',
      icon: <CodeIcon />
    },
    {
      year: 2020,
      content: 'At the beginning of the year, we created Aksanti Mining, a company specialized in the exploitation of open-pit mines and offering a range of subcontracting mining services. Few months later, Aksanti Properties was registered in Kinshasa.',
      icon: <SettingsApplicationsIcon />
    },
    {
      year: 'COVID-19',
      content: 'Despite an extremely great start for the Group in 2020, the COVID-19 crisis has had a major impact on the world and us. It was with profound shock and sadness that we, the Aksanti Group, announced the death of our Founding Father, Baba, who lost his fight against the pandemic. His vision and passion will always be at the heart of the Group, he will be greatly missed. Aksanti Baba.',
      icon: <RemoveFromQueueIcon />
    },
    {
      year: 2021,
      content: 'As we battled the pandemic and its human and economic loss, we have accelerated our internal transition to the new economic paradigm. We are working on new ventures and expanding the Group internationally with partners in Dubai and Shanghai. We are launching two new start-up at the end of this year and one anticipated foundation.',
      icon: <GroupIcon />
    },
    {
      year: 'Beyond',
      content: 'Still We Rise',
      icon: <EmojiPeopleIcon />
    },
  ]

  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <div className='mb-10 md:mb-16'>
          <Title size='two' classes='text-center mb-4'>
            Our Timeline
          </Title>
          <Content textAlign='text-center'>
            1998 - 2021
          </Content>
        </div>
        <div className='grid grid-cols-1 gap-y-1'>
          {
            timeLineData.map((item: any, index: number) => {
              return (
                <div className={`group flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-center`} key={index}>
                  <div className={`flex ${index % 2 === 0 ? 'flex-row justify-center md:justify-end' : 'flex-row-reverse justify-center md:justify-end'} items-center w-1/2`}>
                    <Title size='three' classes='hidden md:block'>
                      {item.year}
                    </Title>
                    <Line />
                  </div>
                  <VerticalLine />
                  <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row justify-start' : 'flex-col md:flex-row-reverse justify-start'} items-center w-full md:w-1/2 py-3 md:py-16`}>
                    <Line />
                    <div className={`time-line-icon-box w-auto md:w-36 flex flex-base flex-grow-0 flex-1 justify-center items-center mb-4 md:mb-0 p-4 ${index % 2 === 0 ? 'mr-0 md:mr-6' : 'ml-0 md:ml-6'} rounded-lg bg-green-600`}>
                      {item.icon}
                    </div>
                    <Title size='three' classes='block md:hidden mb-2'>
                      {item.year}
                    </Title>
                    <Content textAlign={`${index % 2 === 0 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                      {item.content}
                    </Content>
                  </div>
                  {
                    (timeLineData.length - 1 === index) ? (
                      <></>
                    ) : (
                      <MobileLine />
                    )
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TimeLine