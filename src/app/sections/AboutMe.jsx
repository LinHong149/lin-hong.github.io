import React from 'react'

const AboutMe = () => {
  return (
    // <div className='pl-parent w-[60vw] h-screen py-parent'>
    //     <div className='card-design-about p-14 rounded-3xl w-full h-full'>
    //         <p className='font-header5-bold'>Hi! I'm Lin Hong,</p>
    //         <p className='font-paragraph'>A Computer Science student at the University of Waterloo, with internships under my belt at Shopify, Google, and Tesla.<br /> <br /> I'm passionate about leveraging data science and machine learning to solve real-world challenges, having led projects that enhance customer experiences and optimize systems. <br /><br /> My hackathon journey includes over 20 competitions, with notable successes, including a win at the MIT Hackathon for a blockchain project. <br /><br /> When I'm not coding, I enjoy digital art, yoga, and outdoor adventures. <br /><br /> I'm all about innovation and impact, currently seeking Summer 2024 internships. If you're on a mission to make a difference or just want to chat, let's connect! 🚀🧘‍♂️🌟</p>
    //     </div>
    // </div>
    <div className='p-parent w-screen h-screen flex flex-col items-center justify-center z-10'>
        <p className='font-header2-bold'>Hi! I'm Lin Hong 👋</p>
        <div className='p-14 rounded-3xl w-[55vw] h-full text-center'>
          <p className='font-paragraph'>A High School student at Dr. Norman Bethune C.I., I'm at the crossroads of software engineering, AI, and robotics. Leading roles in the Robotics and Computer Science Clubs have fueled my passion for technology, steering 18+ AI projects and shining in 14 hackathons.
<br /><br />
I've dedicated myself to tech education and mentorship, organizing STEM events and guiding young minds at FIRST LEGO League Summer Camps. These experiences highlight my commitment to fostering community and innovation in tech.
<br /><br />
Beyond coding and robotics, I'm involved in school activities like the Yearbook and Math Club, balancing my tech pursuits with outdoor adventures.
<br /><br />
Eager for challenges and opportunities to innovate, I'm looking to connect with like-minded individuals and organizations. Let's make a difference together! 🤖💻🌍</p>
        </div>
    </div>
  )
}

export default AboutMe