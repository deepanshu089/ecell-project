import Link from "next/link"
import {FaGithub , FaLinkedin , FaYoutube , FaInstagram} from 'react-icons/fa'


const socials=[
    {
        icon:<FaGithub/>,path:'https://github.com/deepanshu089'
    },{
        icon:<FaLinkedin/>,path:'https://www.linkedin.com/in/deepanshu-sharma-b3a46828a'
    },{
        icon:<FaYoutube/>,path:'https://www.youtube.com/@DeepanshuSharmaNITS'
    },{
        icon:<FaInstagram/>,path:'https://www.instagram.com/_dsharmaa/'
    },
];

const Social = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return (<Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
      );
      })}
    </div>
  );
};

export default Social;
