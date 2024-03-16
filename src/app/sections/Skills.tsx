import { skillsInfo } from "../constants"
import Image from "next/image"
import Test from "src/app/assets/ImageTest.png"

const Skills = () => {
  return (
    <div className="px-parent gap-8 flex flex-wrap">
      <p className="w-full text-center font-header3-bold text-gradient-white-black">My Skillset</p>
      <div className="flex w-full h-min flex-wrap h-[52rem] justify-center gap-10">
        {skillsInfo.map(({name, image}) => (
          <div className="flex items-center gap-4 mx-6 ">
            <Image src={image} alt={name} width={60} height={60}
              className="w-16 aspect-square object-contain"></Image>
            <p className="font-lable-bigger opacity-50">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills