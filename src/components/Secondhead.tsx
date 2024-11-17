import React from 'react';

const SecondHead: React.FC = () => {
  return (
    <section className='flex gap-x-4'>
      <div className='flex flex-col gap-8 justify-center items-center mt-[-1rem]'>
        <h1 className='text-2xl font-semibold' style={{ letterSpacing: "1px" }}>
          WHO HAVE WE CERTIFIED?
        </h1>
        <p className='text-lg font-medium w-[45rem] text-center text-gray-700' style={{ letterSpacing: "1.4px" }}>
          Join the ranks of our successful alumni and discover the companies and individuals who has achieved certifications through our programs.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <img src="https://stocknews.com/wp-content/uploads/2017/01/ibm-logo.png" width={100} alt="IBM Logo" />
        <img src="https://icon2.cleanpng.com/20180724/fti/3d5e28b164ab30b61c5537294a6a1317.webp" width={100} alt="Company Logo" />
        <img src="https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo.png" width={100} alt="Cognizant Logo" />
        <img src="https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png" width={100} alt="Infosys Logo" />
        <img src="https://w7.pngwing.com/pngs/797/378/png-transparent-wipro-logo-business-information-technology-consulting-business-text-people-logo-thumbnail.png" width={100} alt="Wipro Logo" />
        <img src="https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg" width={100} alt="Capgemini Logo" />
      </div>
    </section>
  );
}

export default SecondHead;
