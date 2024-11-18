import coursesData from './Courses';
import Coursecard from './Coursecard';

const Thirdhead : React.FC = () =>{
  
 return(
  <div className='flex flex-col justify-center items-center gap-y-6'>
     <h1 className='text-2xl font-semibold' style={{ letterSpacing: "1px" }}>
          Courses We Provides.
        </h1>
        <h1 className='text-lg font-medium w-[45rem] text-center text-gray-700' style={{ letterSpacing: "1.4px" }}>
        Empower yourself with the knowledge of smart contracts and take control of the next wave of digital innovation.
        </h1>
     <div className=''>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
          {coursesData.map((card, index) => (
            <Coursecard
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              videoUrl={card.videoUrl}
            />
          ))}
        </div>
      </div>
     </div>
 );
}

export default Thirdhead