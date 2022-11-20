import Link from "next/link"
import ArrowLink from "./ArrowLink"
import Content from "./Content"
import Title from "./Title"

const TeamsGrid = () => {

  const data = [
    {
      imgSrc: '/what-we-do/members/member-1.jpg',
      name: 'Credo M. Kabulo',
      position: 'Managing Director',
      email: 'credo@aksantigroup.com',
      slug: 'https://www.linkedin.com/in/credokabulo/',
    },
    {
      imgSrc: '/what-we-do/members/member-2.jpg',
      name: 'Steffy M. Kabulo',
      position: 'Project Manager',
      email: 'steffy.kabulo@aksantigroup.com',
      slug: 'https://www.linkedin.com/in/steffykabulo/',
    },
    {
      imgSrc: '/what-we-do/members/member-3.jpg',
      name: 'Adam Kyalwe',
      position: 'Chief of Operations',
      email: 'adam.kyalwe@aksantigroup.com',
    },
    {
      imgSrc: '/what-we-do/members/member-4.png',
      name: 'Emmanuel N. Elongo',
      position: 'Portfolio Manager',
      email: 'partners@aksantigroup.com',
      slug: 'https://www.linkedin.com/in/emmanuel-elongo-62353411b/',
    },
    {
      imgSrc: '/what-we-do/members/member-5.jpg',
      name: 'Taddee Mupenda',
      position: 'Chief of Engineering',
      email: 'taddee.mupenda@aksantigroup.com',
    },
  ]

  return (
    <section className="w-full mt-10 md:mt-0 lg:mt-28 pt-10 md:pt-20 pb-28 bg-gray-100">
      <div className="container max-w-7xl mx-auto p-4">
        <Title size='two' classes='mb-16 text-center'>
          Our Management Team
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="group relative flex flex-col" key={index}>
                  <div className="flex justify-center items-center ml-4 mr-10 h-64 overflow-hidden z-10">
                    <img src={item.imgSrc} className='w-full h-full object-cover object-center duration-500 group-hover:scale-110' alt={item.name} />
                  </div>
                  <div className="w-full flex flex-col flex-grow px-10 pt-20 pb-16 -mt-10 bg-white z-0 shadow-lg">
                    <Title size='three' classes='mb-6'>
                      {item.name}
                    </Title>
                    <Content textSize='text-md' textColor='text-gray-600 mb-2'>
                      {item.position}
                    </Content>
                    <Link href={`mailto:${item.email}`} className='mb-8 duration-300 hover:underline underline-offset-2 hover:text-blue-900 w-fit'>
                      {item.email}
                    </Link>
                    {
                      item.slug && (
                        <ArrowLink slug={item.slug}>
                          Visit LinkedIn Profile
                        </ArrowLink>
                      )
                    }
                  </div>
                  <div className="divider absolute w-0 h-0.5 bg-yellow-800 bottom-0 duration-500 group-hover:w-full"></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TeamsGrid