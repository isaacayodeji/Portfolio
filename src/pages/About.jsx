const About = () => {
  return (
    <section id="about" className="px-18 max-w-[1000px] mx-auto py-20">
      {/* Container */}
      <div className=" px-10 flex flex-col">
        {/* Heading */}
        <div
          data-aos="flip-left"
          data-aos-duration="3000"
          className="text-center space-y-2"
        >
          <h2 className="font-bold text-2xl text-sky-500">About Me</h2>
          <p className="text-[#666666] text-[1.2rem] lg:w-1/2 mx-auto">
            I began my career as a <b>Frontend Developer</b> over two years ago.
            Since childhood, I have been fascinated by technology and driven by
            a desire to solve problems. I am always eager to explore new
            technologies that will enable me to grow comprehensively in my
            field. My hobbies are: Playing video games, watching movies and
            taking beautiful pictures,
            <br />
            <span>
              Taking picture is more than an hobby to me because it a way of life. It allows me to express emotions and convey
              messages that words often cannot. Through my lens, I aim to
              capture not only the visible beauty of nature but also its essence
              and spirit. Each photograph is an attempt to encapsulate the
              fleeting moments of wonder that nature offers, preserving them for
              others to experience and appreciate.
            </span>
          </p>
        </div>
        {/* Logos */}
      </div>
    </section>
  );
}
export default About