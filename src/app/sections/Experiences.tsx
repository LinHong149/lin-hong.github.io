import { ExperienceInfo } from "../constants"
import Image from "next/image"

const Experiences = () => {
  return (
    <div className='border flex flex-col gap-20 w-full'>
      {ExperienceInfo.map((item, index) => (
        <div key={index} className={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} gap-16`}> {/* alternates sides */}
          <Image 
            className='object-cover'
            loading="lazy" 
            width="500" 
            height="500" 
            layout='responsive'
            alt={item.company} 
            src="data:image/jpeg;base64,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"></Image>

          <div className='flex flex-col gap-4 w-[120%] '>
            <div className='flex flex-col gap-2 [&>*]:leading-none'>  
              <p className='font-header5'>I have experience as a</p>
              <p className='font-header5-bold'>{item.company}</p>
            </div>
            <div className='flex flex-row gap-2'>
              <div className='border rounded-full px-5 pt-3 pb-2.5 font-lable leading-none'>{item.location}</div>
              <div className='border rounded-full px-5 pt-3 pb-2.5 font-lable leading-none'>{item.date}</div>
            </div>
            { item.experiences.map((experience, expIndex) => (
              <div key={expIndex} className='flex flex-row gap-4'>
                {/* <svg className='' xmlns="http://www.w3.org/2000/svg" height="35" width="70" viewBox="0 0 500 500">
                  <path fill='#F6F6F8' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg> */}
                <p className='font-paragraph'>{experience}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experiences