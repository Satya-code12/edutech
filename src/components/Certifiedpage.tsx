import Navbar from './Navbar'
import SecondHead from './Secondhead'

const CertifiedPage = () => {
  return (
    <section>
     <Navbar />
     <div className='flex gap-4 my-10 h-[23rem]'>
      <div className='w-[60%] flex flex-col gap-4'>
        <h1 className='text-6xl font-bold' style={{
          letterSpacing: "3px"
        }}>Certified Blockchain Expert™ Interactive Live Training</h1>
        <p className='text-base font-semibold text-gray-700' style={{
          letterSpacing: "1.4px"
        }}>
        Certified Blockchain Expert™ (CBE) is a Certification that aims to impart knowledge about the working and functioning of a Blockchain-based system. It covers the Blockchain principles and composition and also overviews the application of Blockchain in the supply chain, automobile, healthcare, financial industry, cybersecurity, etc. from a beginner to an advanced level.  A Certified Blockchain Expert™ is a professional who profoundly understands Blockchain technology and can integrate Blockchain-based solutions in enterprise businesses.
        </p>
        <button className='border text-white font-medium shadow-md rounded-lg bg-blue-500 w-[10rem] h-[3rem]'>Get Certified Now</button>
      </div>
      <div>
        <img src="https://media.licdn.com/dms/image/v2/C5612AQEleD2892pOcA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1577952961164?e=1736985600&v=beta&t=xyzVACcpwV95Cw7f7N8REtWWAOCANA4d_fwVQ5yhd-U" width={450} alt="Blockchain Image" className='rounded-lg'/>
      </div>
      </div>
      <SecondHead />
    </section>
  )
}

export default CertifiedPage
