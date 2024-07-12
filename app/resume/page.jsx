"use client";
import{FaHtml5 , FaCss3 , FaJs, FaReact ,FaFigma , FaNodeJs} from 'react-icons/fa';
import{SiTailwindcss, SiNextdotjs} from 'react-icons/si';



const about={
  title:'About me',
  description:'Detail-oriented and ambitious engineering student with a passion for obtaining accurate results. Good at working and collaborating with team members to strive for the best possibe results. Currently exploring the realm of enginnering world and looking forward for entry level web development jobs and increase my skillset.',
  info:[
    {
      fieldName:"Name",
      fieldValue:"Deepanshu Sharma"
    },{
      fieldName:"Phone",
      fieldValue:"(+91)9002450590"
    },{
      fieldName:"Experience",
      fieldValue:"2+ years"
    },{
      fieldName:"Instagram",
      fieldValue: <a href="https://www.instagram.com/_dsharmaa/">dsharmaaa</a>
    },{
      fieldName:"Nationality",
      fieldValue:"Indian"
    },{
      fieldName:"Email",
      fieldValue:"dsharmaofficial@gmail.com"
    },{
      fieldName:"Freelance",
      fieldValue:"Available"
    },{
      fieldName:"Languages Known",
      fieldValue:"English , Hindi "
    },
  ]
};


const experience={
  icon:'',
  title:'My Experience',
  description:"Actively involved in various technical and cultural events at NIT Silchar, enhancing leadership and teamwork abilities. Engaged in hands-on projects and internships, gaining practical experience in electronics and communication, as well as web development and UI/UX design.",
  items:[
    {
      company:"Advay,Dramatics Club",
      position:"Acting, Nukkad-Natak, Farewell Anchoring.",
      duration:"2023-present"
    },{
      company:"Think India,NITS",
      position:"Member, Video Editor.",
      duration:"2023-present"
    },{
      company:"E-CELL NITS",
      position:"Runner up at BECH KE DIKHAO (TECHNOESIS-2024).",
      duration:"2024"
    },{
      company:"GDSC,NITS",
      position:"Attended WEB DEV Workshops and ANDROID Study Jams.",
      duration:"2022-present"
    },
  ]
};


const education={
  icon:'',
  title:'My Education',
  description:"Currently pursuing a BTech in Electronics and Communication Engineering at NIT Silchar, with a strong academic foundation in both theoretical and practical aspects of the field. Actively engaged in projects and extracurricular activities that enhance technical and problem-solving skills.",
  items:[
    {
      institution:"SHMD SCHOOL,Jaigaon",
      degree:"10+2",
      duration:"2021-2023"
    },{
      institution:"NIT SILCHAR,Assam",
      degree:"BTech Electronics And Communication Engineering",
      duration:"2023-Present"
    }]
};




const skills={
  title:"My Skills",
  description:"jjklf nofkj  fnnkjf nfkjf ndfjj ndfjjk fnjkaekj fkasnk nfj",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html5"
    },{
      icon:<FaCss3/>,
      name:"css3"
    },{
      icon:<FaJs/>,
      name:"JavaScript"
    },{
      icon:<FaReact/>,
      name:"ReactJS"
    },{
      icon:<SiNextdotjs/>,
      name:"next.js"
    },{
      icon:<SiTailwindcss/>,
      name:"tailwind.css"
    },{
      icon:<FaNodeJs/>,
      name:"node.js"
    }
  ]
}


import {Tabs , TabsContent , TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip , TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import {easeIn, motion} from "framer-motion"; 
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{delay:2.4,duration:0.4 , ease:'easeIn'}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about me">About Me</TabsTrigger>
          </TabsList>


          <div className='min-h-[70vh] w-full'>
           <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item ,index)=>{
                    return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-m-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.company}</p>
                      </div>
                    </li>);
                  })
                  }
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item ,index)=>{
                    return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item.duration}</span>
                      <h3 className='text-xl max-m-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item.institution}</p>
                      </div>
                    </li>);
                  })
                  }
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills.skillList.map((skill , index)=>{
                  return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>

                  );
                })}
              </ul>
            </div>
            </TabsContent>
            <TabsContent value="about me" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
            <h3 className='text-4xl font-bold'>
                {about.title}
              </h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                {about.description}
              </p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {about.info.map((item,index)=>{
                  return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                    <span className='text-white/60'>{item.fieldName}</span>
                    <span className='text-xl'>{item.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
            </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
          
