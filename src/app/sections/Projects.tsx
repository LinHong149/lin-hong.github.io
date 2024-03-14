"use client";
import { useState } from "react";
import { projectInfo } from "../constants";
import Image from "next/image";



const Projects = () => {
  return (
    <div className="h-screen px-parent border grid grid-col-3">
      <div className="left flex flex-col col-start-1">
        <div className="about">
          <Image src="" alt=""></Image>
          <p className="description font-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestiae itaque non consectetur officiis architecto quo quidem repellat praesentium voluptatem dolorem ea adipisci error vel sint omnis eligendi, aliquam voluptas!
          </p>
        </div>
        <div className="techs">
          <p className="font-header6">Tech used</p>
          <div className="flex flex-col">
            <div className="flex items-center justify-center w-full">
              <Image src="" alt=""></Image>
              <p className="font-paragraph">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center justify-center w-full">
              <Image src="" alt=""></Image>
              <p className="font-paragraph">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center justify-center w-full">
              <Image src="" alt=""></Image>
              <p className="font-paragraph">Lorem, ipsum dolor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="middle pb-10px relative col-start-2">
        <Image className="absolute rounded-b-3xl w-full h-full"
         src="" alt=""></Image>

         <div className="flex flex-wrap">
          <p className="font-header4-bold">FLAIM</p>
          <div className="rounded-full bg-white flex flex-row w-fit-content gap-4">
          <Image className="w-30 aspect-square rounded-full"
          src="" alt=""></Image>
          <Image className="w-30 aspect-square rounded-full"
          src="" alt=""></Image>
          <Image className="w-30 aspect-square rounded-full"
          src="" alt=""></Image>
          </div>
          <p className="font-header4-bold">BRAIN</p>
         </div>

         <div className="absolute card-design-translucent rounded-3xl p-8">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quis?</p>
         </div>
      </div>
      
      <div className="right flex flex-col col-start-3">
        <div className="organization">
          <p className="font-header6">Hackathon name</p>
          <p className="font-paragraph-smaller font-yellow-500 opacity-50">award</p>
        </div>

        <div className="flex flex-col">
          <p className="font-header6">What I learned</p>
          <p className="font-paragraph"></p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="font-header6">Technicality</p>
            <div className="w-full flex gap-2">
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-header6">Creativity</p>
            <div className="w-full flex gap-2">
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
              <div className="rounded-lg bg-pink opacity-50 w-[20%] h-[15px]"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
