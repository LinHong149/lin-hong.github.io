"use client";
import { useState, useEffect, useRef } from "react";
import { projectInfo } from "../constants";
import Image from "next/image";

const Projects = () => {
  // Ref for the container to apply horizontal scroll
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: WheelEvent) => {
    console.log("Scrolling...", e.deltaY)
    // Check if scrollContainerRef.current is not null before accessing its properties
    if (scrollContainerRef.current !== null) {
      e.preventDefault(); // Prevent the default scrolling behavior
      // Safe to assert non-null here due to the if check
      if (e.deltaY > 5)
      scrollContainerRef.current.scrollLeft += 4;
    }
  };

  useEffect(() => {
    // This check ensures scrollContainer is not null before adding the event listener
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleScroll, { passive: false });

      // Cleanup function to remove the event listener
      return () => {
        scrollContainer.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return (

    <div ref={scrollContainerRef} className="flex overflow-scroll snap-x snap-mandatory relative h-screen flex-nowrap"  >
        {projectInfo.map(({name, image, description, techUsed, hackathon, learned, stats}, index) => (
          <div key={index} className="min-w-[100vw] border snap-center h-[90vh] p-parent gap-4">
            <div className="left flex flex-col col-start-1 h-full justify-between">
              <p className="description font-paragraph">{description}</p>
              <div className="techs">
              <p className="font-header6">Tech used</p>
                <div className="flex flex-wrap gap-10">
                  {techUsed.map(({name, image}) => (
                      <div className="flex items-center gap-4 mx-6 ">
                        <Image src={image} alt={name} width={60} height={60}
                        className="w-16 aspect-square object-contain"></Image>
                        <p className="font-lable-bigger opacity-50">{name}</p>
                        </div>
                        ))}
                        </div>
                        </div>
                      </div>

            {/* <div className="middle pb-10px relative col-start-2 flex justify-center h-full">
              <Image className="absolute rounded-b-3xl w-[calc(100%-4rem)] h-[calc(100%+5rem)] z-0 object-cover -top-[5rem]"
              src={image} alt={name}></Image>
              
              <div className="flex flex-col z-10 px-16 text-center">
              <p className="font-header3-bold uppercase">{name}</p>
              </div>
              </div>
              
              <div className="right flex flex-col col-start-3 h-full justify-between">
              <div className="flex flex-col gap-14">
              <div className="organization card-design-translucent rounded-3xl px-8 py-4 flex items-center justify-center">
              <p className="font-header6">{hackathon}</p>
              </div>
              
              <div className="flex flex-col">
              <p className="font-header6">What I learned</p>
              {learned.map((index) => (
                <li className="font-paragraph list-disc list-inside">{index}</li>
                ))}
                </div>
                </div>
                
                <div className="flex flex-col">
                {stats.map(({type, rating}) => (
                  <div className="flex flex-col">
                  <p className="font-header7">{type}</p>
                  <div className="w-full flex">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                          key={i}
                          className={`border-[#d474a8] border-opacity-100 border-2 bg-pink w-[20%] h-[15px] ${i < rating ? 'opacity-100' : 'opacity-50'}`}
                          />
                          ))}
                          </div>
                          </div>
                          ))}
                          </div>
                          
                        </div> */}
          </div>
        ))}
      </div>
  )
}

export default Projects
