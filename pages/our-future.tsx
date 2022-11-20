import Head from "next/head"
import Hero from "../components/Hero"
import ImageTopText from "../components/ImageTopText"
import Title from "../components/Title"

const OurFuture = () => {
  return (
    <>
      <Head>
        <title>Our future</title>
        <meta name="description" content="Our future page" />
      </Head>
      <Hero
        imgSrc='/our-future/hero.jpg'
        title='Our Future'
      />
      <div className="w-full pt-6 md:pt-14">
        <Title size='two' classes='text-center mb-8 md:mb-24'>
          Invest Today and Impact Tomorrow
        </Title>
        <ImageTopText
          imgSrc='/our-future/future.jpg'
          title='For a Wealthier and Healthier Tomorrow'
        >
          We aim to impact the future of our country. We aim to invest in our present to positively impact the future. For the coming year, 2022, Aksanti Group has three diverse projects and many more for the years to come. The Group is focusing on developing and creating three new start-up and companies in different sectors of the economy; technology, manufacturing, and agribusiness.
          <br /><br />
          The Group`s investment strategy for the future relies on the basics of critical and systematic thinking and the thrive to enhance the future of the Congolese people and its economy. We aim to create a sustainable diversified portfolio for the purpose of encouragingly strengthening the Congolese business landscape, its major actors, and easing the rules and laws that regulate the country`s business ecosystem.
        </ImageTopText>
      </div>
    </>
  )
}

export default OurFuture