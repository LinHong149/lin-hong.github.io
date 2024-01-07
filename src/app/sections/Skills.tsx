import { skillsInfo } from "../constants"
import Image from "next/image"
import Test from "src/app/assets/ImageTest.png"

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 [&>*]:leading-none">
        <p className="">These are all my technical skills</p>
        <p className="">These are all tool's I've used in my projects</p>
      </div>

        {skillsInfo.map(({name, image, link}) => (
          <a href={link} key={name}>
            <Image src={image} alt={name} width="500" height="500"></Image>
          </a>
        ))}
        {/* // map through all the skills
        // Frontend
        // React, html, css, js, Framer Motion, DaisyUI, tailwind, Nextjs, Vite.js
        // Backend
        // Python, Google cloud, OpenAI, Flask
        // Design
        // Figma, Adobe Photoshop
        // Hardware
        // Tensor, OpenCV, Roadrunner
        // OOP
        // Java, C++
        // Onshape */}
    </div>
  )
}

export default Skills