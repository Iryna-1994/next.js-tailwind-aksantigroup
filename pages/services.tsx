import Head from "next/head"
import Link from "next/link"
import ArrowLink from "../components/ArrowLink"
import Content from "../components/Content"
import Counter from "../components/Counter"
import LatestNews from "../components/LatestNews"
import OurApproachGrid from "../components/OurApproachGrid"
import OurServicesGrid from "../components/OurServicesGrid"
import ThinContent from "../components/ThinContent"
import Title from "../components/Title"

const Services = () => {

  const linkData = [
    {
      linkText: 'M&A AND STRATEGIC ADVISORY',
      slug: '/',
    },
    {
      linkText: 'DEBT ADVISORY AND RESTRUCTURING',
      slug: '/',
    },
    {
      linkText: 'EQUITY ADVISORY',
      slug: '/',
    },
    {
      linkText: 'OUR GLOBAL SCALE',
      slug: '/',
    },
  ]

  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <section className="w-full relative mt-16 py-20">
        <div className="hidden lg:block mx-14 bg-gray-200 h-96"></div>
        <div className="flex flex-col lg:flex-row items-center static lg:absolute w-full top-36">
          <div className="group service-hero-img-box clip-box w-full lg:w-1/2 overflow-hidden h-96 z-10">
            <img src="/services/hero.jpg" className="w-full h-full object-cover duration-500 group-hover:scale-110" />
          </div>
          <div className="w-full lg:w-1/2 mb-14 z-0 px-4 lg:px-0">
            <div className="bg-gray-100 lg:bg-transparent px-10 lg:px-0 py-10 md:py-20 lg:py-0 -mt-10 md:-mt-20 lg:mt-0">
              <Title size='one' classes='mt-6 lg:mt-0'>
                Global Advisory
              </Title>
            </div>
          </div>
          <div className="hidden lg:block absolute service-pattern-box w-full h-48 -bottom-5" style={{ zIndex: '-1' }}></div>
        </div>
      </section>
      <section className="-mt-12 lg:mt-36 pt-0 lg:pt-20 pb-10">
        <div className="container max-w-7xl mx-auto p-4">
          <div className="flex justify-start flex-wrap gap-10">
            {
              linkData.map((item: any, index: number) => {
                return (
                  <Link href={item.slug} key={index} className="text-sm text-gray-600 duration-300 hover:underline underline-offset-4 hover:text-yellow-700">
                    {item.linkText}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="max-w-3xl mx-auto p-4 flex flex-col gap-10">
          <Title size='two'>
            The global independent adviser
          </Title>
          <ThinContent>
            We help our clients to define and achieve their M&A, strategic and financing goals with the best possible results, whatever their objectives and wherever they are.
          </ThinContent>
          <Content textSize='text-lg' textColor='text-gray-700'>
            We have the coverage and resource of the largest integrated banks while delivering tailored, expert advice, investing time in understanding our clients and building long-term, trusted relationships that look beyond any single transaction.
          </Content>
        </div>
      </section>
      <Counter />
      <OurServicesGrid />
      <section className='relative w-full mt-0 md:mt-28 mb-0 md:mb-28 pt-10 pb-14 md:pb-28'>
        <img src='/services/Sustainability.jpg' className='sustainability-img absolute w-full h-full object-cover object-left top-0' style={{ zIndex: '-1' }} />
        <div className='container max-w-5xl mx-auto p-4 flex justify-end z-10'>
          <div className='flex flex-col gap-8 max-w-sm p-10 bg-gray-100 mt-48 md:-mt-28'>
            <Title
              size="three"
            >
              Sustainability: supporting clients through their transition
            </Title>
            <Content textColor="text-gray-600">
              Considering environmental, social and governance related risks and opportunities for our clients is an integral part to our tailored advice. We have a track-record in advising on sustainability-related financing as part of our Debt Advisory services. Our Investor Advisory services provide an expert perspective on ESG strategy and investor engagement, incl. ESG ratings. And our sector specialists are well-equipped to help clients navigate transition to the low carbon economy, benefitting from a market-leading track record in the renewables sector.
            </Content>
          </div>
        </div>
      </section>
      <OurApproachGrid />
      <section className="w-full py-6 md:py-20">
        <div className="w-full flex flex-col md:flex-row gap-y-12 md:gap-y-0 items-center">
          <div className="group servic-trusted-img-box h-full clip-box w-full md:w-1/2 overflow-hidden">
            <img src="/services/Trusted.jpg" className="w-full h-full object-cover duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-md ml-0 md:ml-12 pl-4 md:pl-0 pr-4">
            <Title size='three'>
              Trusted by every type of client
            </Title>
            <Content textSize='text-lg' textColor='text-gray-600'>
              Our sector specialists cover every industry and we advise every size of corporate client, from fundraising for growth companies, through mid-market expertise, to many of the world`s largest multinational companies. We support the mid-market through dedicated teams <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900 hover:no-underline">in the UK</a> (Arrowpoint Advisory) and <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900 hover:no-underline">in France</a> and Brazil (Transaction R&Co).
              <br /><br />
              We have unrivalled experience of advising financial sponsors and understanding their objectives. We are the adviser of choice to <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900 hover:no-underline">sovereigns and state-owned enterprises</a>. Being family-controlled ourselves with a strong entrepreneurial spirit, no one better understands the challenges faced by family and founder shareholders and investors.
            </Content>
          </div>
        </div>
      </section>
      <section className='relative w-full mt-16 mb-0 md:mb-20 pt-10 pb-28'>
        <img src='/services/About-us.jpg' className='absolute w-full h-72 md:h-96 object-cover top-0' style={{ zIndex: '-1' }} />
        <div className='container max-w-5xl mx-auto p-4 flex justify-end z-10'>
          <div className='flex flex-col gap-8 max-w-sm p-10 bg-gray-100 mt-48 md:-mt-20'>
            <Content textColor="text-gray-600">
              Throughout our 200-year history we have combined a tradition of trust and discretion with a drive to be at the forefront of innovation. Learn more about our business
            </Content>
            <ArrowLink slug='/'>
              About us
            </ArrowLink>
          </div>
        </div>
      </section>
      <section className="w-full mt-0 md:mt-56 pt-24 pb-24 bg-gray-100">
        <p className="uppercase text-center text-lg text-gray-500 mb-12">Latest news</p>
        <div className="container max-w-7xl mx-auto p-4">
          <LatestNews />
        </div>
      </section>
      <section className="w-full my-28">
        <div className="container max-w-7xl mx-auto p-4 ">
          <div className="w-full px-8 py-16 bg-gray-100">
            <div className="max-w-4xl">
              <Content textColor='text-gray-500' textSize='text-lg'>
                To connect with our teams please <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900">choose an office</a>
                <br /><br />
                Interested in joining our Global Advisory team? Learn more about our <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900">Student and Graduate programmes</a> and our opportunities for <a href="/" className="font-semibold text-sky-900 underline hover:text-yellow-900">experienced professionals</a>
              </Content>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
