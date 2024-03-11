import { ExperienceInfo } from "../constants"
import Image from "next/image"

const Experiences = () => {
  return (
    <div className="px-parent flex flex-col gap-10">
      <h1 className="[&>*]:leading-tight">
          <span className="font-header3-bold text-gradient-white-black">Experiences</span>
      </h1>

      <div className='grid grid-cols-2 gap-20 w-full'>
        

        {ExperienceInfo.map((item, index) => (
          <div key={index} className={`flex rounded-[3rem] p-14 card-design shadow-lg backdrop-blur-[3.5px]`}> 

            <div className='flex flex-col gap-4 w-[120%] '>
              <div className='flex flex-col gap-2 [&>*]:leading-none'>  
              <p className='font-header5-bold text-gradient-pink-black w-fit'>{item.company}</p>
              <p className='font-paragraph-bigger text-white rop-shadow-[0_0_10px_#F1A1CC] w-fit'>{item.position}</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='border rounded-full px-5 pt-3 pb-2.5 font-lable leading-none'>{item.date}</div>
                <div className='border rounded-full px-5 pt-3 pb-2.5 font-lable leading-none'>{item.location}</div>
              </div>
              <ul className='list-disc list-inside gap-4'>
                { item.experiences.map((experience, expIndex) => (
                  <li className='font-paragraph'>{experience}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences