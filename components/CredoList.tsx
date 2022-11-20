import Content from "./Content"
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined'
import RemoveFromQueueOutlinedIcon from '@material-ui/icons/RemoveFromQueueOutlined'
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
import FastForwardOutlinedIcon from '@material-ui/icons/FastForwardOutlined'

const CredoList = () => {

  const data = [
    {
      icon: <EcoOutlinedIcon />,
      color: '#eab308',
      content: 'We are accountable for enhancing the Congolese business landscape. We aim to better understand the country`s economic environment by studying accurately and systematically its opportunities, environment, and communities. We focus on strengthening the financial basis of our corporation by strategically diversifying our portfolio of companies.',
    },
    {
      icon: <TrackChangesOutlinedIcon />,
      color: '#ef4444',
      content: 'We are accountable for finding, developing, creating, and investing stronger companies, Businesses, associations that will enhance the development of the African business sector. We aim to transform the African image through sustainable investments.',
    },
    {
      icon: <RemoveFromQueueOutlinedIcon />,
      color: '#22c55e',
      content: 'We are accountable to the great individuals who grind with us. The dreamers, visionaries, thinkers, the minds who work to improve the ecosystem of this place. We aim to offer them loyalty and respect throughout their time with us. Through their vision, values, expertise, and audacious mindsets, this place thrives to continuously progress and innovate.',
    },
    {
      icon: <StarsOutlinedIcon />,
      color: '#3b82f6',
      content: 'We are accountable to our clients. The people who trust us with their souls. We aim to offer them the greatest return on investments through all economic cycles. By supporting us, they bear our eternal gratitude.',
    },
    {
      icon: <ForumOutlinedIcon />,
      color: '#d946ef',
      content: 'We are accountable to the Batoto wa Congo. The People of Congo. The communities with which we work and develop our activities. We aim to assure them a restored future. We invest to impact the lives of tomorrow.',
    },
    {
      icon: <FastForwardOutlinedIcon />,
      color: '#a855f7',
      content: 'We are accountable to our founder`s spirit. To the Aksanti spirit of gratitude, passion, respect, merit, audacity and perseverance. We aim to respect and follow the founder`s core values to continuously grow and advance to the best of our abilities.',
    },
  ]

  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {
            data.map((item: any, index: number) => {
              const iconBgStyle = {
                backgroundColor: item.color
              }
              return (
                <div className={`group flex flex-col-reverse md:${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-x-8 gap-y-0 items-center`} key={index}>
                  <div className="flex-grow text-center sm:text-left sm:mt-0">
                    <Content textAlign={`${index % 2 === 1 ? 'text-center md:text-left' : 'text-center md:text-right'}`}>
                      {item.content}
                    </Content>
                  </div>
                  <div className={`credo-icon-box inline-flex items-center justify-center flex-shrink-0 w-28 md:w-32 h-28 md:h-32 mb-6 md:mb-0 rounded-2xl`} style={iconBgStyle}>
                    {item.icon}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default CredoList