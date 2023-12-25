import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

type ButtonProps = {
  link : string;
  content : string;
  contentStart : string;
  contentEnd : string;
}


export const AnchorButton : React.FC<ButtonProps> = ({link, contentStart, contentEnd}) => {
  const [isHovered, setIsHovered] = useState(false);

  const strokeWidth = 2.2;

  const svgVariants = {
    hidden: { width: 0, height: 30 },
    visible: { width: 5, height: 30, transition: { duration: 0.3 } },
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { scaleY: 1, originY: 0, transition: { delay: 0.4, duration: 0.15 } },
  };

  const arrowHeadVariants = {
    hidden: { scaleY: 0, },
    visible: { scaleY: 1, transition: { delay: 0.5, duration: 0.2 }},
  }

  
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-around w-fit"
    >
      <a href={link} className={`flex flex-row gap-0 h-8 items-center justify-center font-lable duration-150 ${isHovered? "opacity-100 ": "opacity-50"}`}>
        {contentStart}
        <motion.svg
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={svgVariants}
          viewBox="0 0 5 30"
          overflow="visible"
          className="flex items-start"
        >
          <motion.line // vertical line
            x1="2.5"
            y1="0"
            x2="2.5"
            y2="30"
            stroke="#F6F6F8"
            strokeWidth= {strokeWidth}
            strokeLinecap="round"
            variants={lineVariants}
          />
          <motion.line
            x1="-3"
            y1="25.5"
            x2="2.5"
            y2="30.2"
            stroke="#F6F6F8"
            strokeWidth= {strokeWidth}
            strokeLinecap="round"
            variants={arrowHeadVariants}
          />
          <motion.line
            x1="8"
            y1="25.5"
            x2="2.5"
            y2="30.2"
            stroke="#F6F6F8"
            strokeWidth= {strokeWidth}
            strokeLinecap="round"
            variants={arrowHeadVariants}
          />
        </motion.svg>
        {contentEnd}
      </a>
    </button>
  );
}

export const SolidButton : React.FC<ButtonProps> = ({link, content}) => {
  return (
    <a className="btn btn-accent" href={link}>{content}</a>
  )
}

