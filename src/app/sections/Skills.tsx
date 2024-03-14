import { skillsInfo } from "../constants"
import Image from "next/image"
import Test from "src/app/assets/ImageTest.png"

const Skills = () => {
  return (
    <div className="px-parent border grid grid-cols-6 gap-8 ">
        {skillsInfo.map(({name, image}) => (
          <div className="flex items-center justify-center p-4 w-48 border-1 border-white bg-white bg-opacity-20 shadow-xl backdrop-filter backdrop-blur-sm rounded-3xl border border-white border-opacity-20 aspect-square w-40 h-40">
            <Image key={name} src={image} alt={name} width="500" height="500" className="w-full h-full object-contain"></Image>
          </div>
        ))}
    </div>
  )
}

export default Skills