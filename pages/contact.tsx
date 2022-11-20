import Head from "next/head"
import Link from "next/link"
import ArrowLink from "../components/ArrowLink"
import ContactForm from "../components/ContactForm"
import ContactGoogleMap from "../components/ContactGoogleMap"
import Content from "../components/Content"
import HeroNoImage from "../components/HeroNoImage"
import Title from "../components/Title"

const ContactGrid = () => {

  const data = [
    {
      title: 'LUBUMBASHI, DRC',
      content: [
        '5 Avenue des Femmes Congolaises,',
        'C/Lubumnashi,',
        'Lubumbashi',
      ],
      phoneNumber: '+243 819 900 019',
      mailToLink: 'info@aksantigroup.com',
    },
    {
      title: 'KINSHASA, DRC',
      content: [
        '1 Ave. OUA, Grace Tower,',
        'C/Ngaliema,',
        'Kinshasa',
      ],
      phoneNumber: '+243 819 900 018',
      mailToLink: 'info@aksantigroup.com',
    },
  ]

  return (
    <section className="w-full py-6 md:py-14">
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10">
          {
            data.map((item: any, index: number) => {
              return (
                <div className="flex flex-col bg-gray-100 p-10 rounded-lg shadow-lg" key={index}>
                  <Title size='three' classes='mb-4'>
                    {item.title}
                  </Title>
                  {
                    item.content.map((contentItem: any, contentIndex: number) => {
                      return (
                        <Content key={contentIndex}>
                          {contentItem}
                        </Content>
                      )
                    })
                  }
                  <Link href={`tel:${item.phoneNumber}`} className='mt-4 mb-3 duration-300 hover:text-orange-700 hover:underline underline-offset-2'>
                    Tel: {item.phoneNumber}
                  </Link>
                  <Link href={`mailTo:${item.mailToLink}`} className='duration-300 hover:text-orange-700 hover:underline underline-offset-2'>
                    {item.mailToLink}
                  </Link>
                </div>
              )
            })
          }
        </div>
        <ArrowLink
          slug='https://www.linkedin.com/company/aksantigroup'
          classes='mt-14 mx-auto'
        >
          Follow us on Linkedin
        </ArrowLink>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Contact us page" />
      </Head>
      <HeroNoImage title='Contact us'>
        Please use the filters below to explore our office locations
      </HeroNoImage>
      <ContactGrid />
      <ContactForm />
      <ContactGoogleMap />
    </>
  )
}

export default Contact