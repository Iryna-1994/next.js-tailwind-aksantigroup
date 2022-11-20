const ContactGoogleMap = () => {

  return (
    <section className="w-full py-6 md:py-14">
      <div className="contact-map-box container max-w-7xl mx-auto p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
          style={{ border: 0 }}
          aria-hidden="false"
          className="w-full h-full rounded-lg shadow-xl"
        />
      </div>
    </section>
  )
}

export default ContactGoogleMap