"use client";

import {motion} from "framer-motion";
import React,{useState} from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import {BsArrowUpRight , BsGithub} from 'react-icons/bs';

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css";

const projects = [
  {
    num:"01",
    category:"frontend",
    title:"project 1",
    description:"First Project on Web using HTML, CSS and basic JavaScript.",
    stack:[{name:"Html 5"},{name:"CSS 3"},{name:"JavaScript"}],
    image:"/assets/project1.png",
    live:"https://deepanshuofficial.netlify.app/",
    github:"https://github.com/deepanshu089/portfolio",
  },
  {
    num:"02",
    category:"frontend",
    title:"project 1",
    description:"HTML,CSS,JS. Learned The Use of API.",
    stack:[{name:"Html 5"},{name:"CSS 3"},{name:"JavaScript"}],
    image:"/assets/news.jpg",
    live:"https://newsdeepanshu.netlify.app/",
    github:"https://github.com/deepanshu089/news-app",
  },
];

const Work = () => {

  const [project,setProject]= useState(projects[0]);

  const handleSlideChange=(swiper)=>{
    const currentIndex=swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1 , transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration:500 capitalize"> {project.category}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item,index)=>{
                return <li key={index} className="text-xl text-accent">{item.name}
                {index!==project.stack.length -1 && ","}</li>
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center  items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5  flex justify-center  items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

