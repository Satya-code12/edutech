// import RazorpayButton from './RazorpayButton';
const Header = () => {

  // const sectionRef = useRef<HTMLDivElement>(null); 

  // const scrollToSection = () =>{
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // }
  return (
    <section>
      <div className='flex gap-4 my-10 h-[23rem]'>
        <div className='w-[60%] flex flex-col gap-4'>
          <h1 className='text-4xl font-bold' style={{ letterSpacing: "3px" }}>
            Learn Technology Here And Implement In Real Life
          </h1>
          <p className='text-lg font-semibold text-gray-700' style={{ letterSpacing: "1.4px" }}>
          Unlock your potential with our comprehensive online learning platform. Whether you're a beginner or an experienced professional, our courses are designed to help you master the latest technical skills. From web development to data science, our interactive and engaging lessons will guide you every step of the way. Join our community of learners today and take the first step towards achieving your career goals!
          </p>
          {/* <button className='border text-white font-medium shadow-md rounded-lg bg-blue-500 w-[10rem] h-[3rem]'>
          onClick={scrollToSection}
            Get Certified Now
          </button> */}
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/ai-generated-image_425671-1231.jpg?w=360"
            width={400}
            alt="Blockchain Image"
            className='rounded-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
