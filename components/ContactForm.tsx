import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Title from './Title'

const ContactForm = () => {
  return (
    <section className="w-full py-6 md:py-14">
      <div className="container max-w-7xl mx-auto p-4">
        <Title size='two' classes='text-center mb-8 md:mb-14'>
          Send us a message
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-4 lg:gap-10">
          <div className="w-full h-64 md:h-full rounded-lg shadow-xl overflow-hidden">
            <img src='/contact/contact.jpg' className="w-full h-full object-cover duration-500 hover:scale-110" alt='contact' />
          </div>
          <div className="w-full">
            <form noValidate autoComplete="off" className='flex flex-col gap-8'>
              <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8'>
                <TextField id="outlined-basic" label="Your name" variant="outlined" />
                <TextField id="outlined-basic" label="Your email" variant="outlined" />
              </div>
              <TextField id="outlined-basic" label="Subject" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button variant="outlined" className='w-40'>
                Send request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm