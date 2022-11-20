import Link from "next/link"
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Content from "./Content";

const Footer = () => {

  const navLinkData = [
    {
      linkText: 'About Aksanti',
      linkPath: '/who-we-are',
      subLinks: [
        {
          subLinkText: 'What We Do',
          subLinkPath: '/who-we-are',
        },
        {
          subLinkText: 'Our History & Timeline',
          subLinkPath: '/our-history',
        },
        {
          subLinkText: 'Our Future',
          subLinkPath: '/our-future',
        },
        {
          subLinkText: 'Our Logo',
          subLinkPath: '/our-logo',
        },
        {
          subLinkText: 'Corporate Information',
          subLinkPath: '/corporate-information',
        },
      ]
    },
    {
      linkText: 'Business Areas',
      linkPath: '/business-areas',
      subLinks: [
        {
          subLinkText: 'Mining',
          subLinkPath: '/aksanti-mining',
        },
        {
          subLinkText: 'Oil',
          subLinkPath: '/aksanti-oil',
        },
        {
          subLinkText: 'Wood',
          subLinkPath: '/aksanti-wood',
        },
        {
          subLinkText: 'Properties & Construction',
          subLinkPath: '/aksanti-properties',
        },
        {
          subLinkText: 'Technology',
          subLinkPath: '/tech',
        },
        {
          subLinkText: 'Food-Agriculture',
          subLinkPath: '/food-agriculture',
        },
      ]
    },
    {
      linkText: 'Aksanti Philosophy',
      linkPath: '/aksanti-philosophy',
      subLinks: [
        {
          subLinkText: 'Our Motivation & Leadership',
          subLinkPath: '/aksanti-philosophy',
        },
        {
          subLinkText: 'Our Credo',
          subLinkPath: '/our-credo',
        },
        {
          subLinkText: 'Aksanti Sana Foundation',
          subLinkPath: '/foundation',
        },
      ]
    },
    {
      linkText: 'Africa',
      linkPath: '/why-africa',
      subLinks: [
        {
          subLinkText: 'Why Africa',
          subLinkPath: '/why-africa',
        },
        {
          subLinkText: 'Investing In Africa',
          subLinkPath: '/invest-in-africa',
        },
        {
          subLinkText: 'African Developism',
          subLinkPath: '/african-developism',
        },
      ]
    },
  ]

  const socialIcon = {
    fontSize: '32px'
  }

  return (
    <footer className="bg-gray-800">
      <div className="container max-w-7xl mx-auto px-4 pt-16 pb-10 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10">
          <Link href='/' className="w-56 h-fit mx-auto lg:mx-0">
            <img src="AppLogo-footer.png" className="w-full" />
          </Link>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 xl:gap-x-10 xl:gap-y-10">
            {
              navLinkData.map((item: any, index: number) => {
                return (
                  <div className="flex flex-col gap-4 w-full" key={index}>
                    <Content textColor='text-gray-50 mb-3'>
                      {item.linkText}
                    </Content>
                    {
                      item.subLinks?.map((contentItem: any, contentIndex: number) => {
                        return (
                          <Link href={contentItem.subLinkPath} className='footer-link w-fit text-gray-400 duration-300 hover:text-orange-200' key={contentIndex}>{contentItem.subLinkText}</Link>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex justify-end gap-10 pt-10">
          <a href="https://linkedin.com" target='_blank'>
            <LinkedInIcon className="text-white duration-300 hover:text-yellow-500" style={socialIcon} />
          </a>
          <a href="https://facebook.com" target='_blank'>
            <FacebookIcon className="text-white duration-300 hover:text-yellow-500" style={socialIcon} />
          </a>
        </div>
      </div>
      <div className="w-full bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 py-7 flex justify-center">
          <span className="text-white">2022 Rothschild & Co ©</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
