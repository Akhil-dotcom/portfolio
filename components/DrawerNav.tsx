import { BiHomeAlt } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { SiGmail, SiLinkedin } from 'react-icons/si'
import { GrConnect } from 'react-icons/gr'
import { Link } from 'react-scroll'
 
function DrawerNav() {
  return <div className="p-5 font-readex min-w-[300px]">
    <div className="flex items-center space-x-1 pl-2">
      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
      <div className="h-3 w-3 rounded-full bg-green-500"></div>
      <div className="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
    {/* image */}
      <div className="py-5 flex items-center gap-1 border-b-2">
        <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
        <div>
          <div className="text-xs">Code Bounce</div>
          <div className="text-lg font-bold">Akhil Raj</div>
        </div>
      </div>
      {/* menu items */}
      <div className="text-xs pb-3 pt-5 pl-1">Menu</div>
      <div className="flex flex-col gap-3">
        <Link to="home" spy={true} smooth={true} className="text-sm flex gap-2 cursor-pointer rounded-md p-1 py-2">
          <BiHomeAlt className="text-xl" />
          <div>Home</div>
        </Link>
        <Link to="work" spy={true} smooth={true} className="text-sm flex gap-2 cursor-pointer rounded-md p-1 py-2">
          <FaLaptopCode className="text-xl" />
          <div>Work</div>
        </Link>
        <div className="text-sm flex gap-2 cursor-pointer rounded-md p-1 py-2">
          <HiOutlineDocumentText className="text-xl" />
          <div>Resume</div>
        </div>
        <Link to="connect" spy={true} smooth={true} className="text-sm flex gap-2 cursor-pointer rounded-md p-1 py-2">
          <GrConnect className="text-xl" />
          <div>Connect with me</div>
        </Link>
        {/* social links */}
        <div className="text-xs pt-5 pl-1 border-t-2">Social connects</div>
        <div className="bg-white shadow-md p-4 rounded-md flex flex-col gap-2">
          <a href="mailto:akhilrajktt@gmail.com" className="text-sm flex items-center gap-2 cursor-pointer rounded-md p-1 py-2">
            <SiGmail className="text-xl text-red-500" />
            <div>G-Mail</div>
          </a>
          <a href="https://www.linkedin.com/in/akhil-raj-2699371aa/" className="text-sm flex items-center gap-2 cursor-pointer rounded-md p-1 py-2">
            <SiLinkedin className="text-xl text-blue-500" />
            <div>Linked In</div>
          </a>
        </div>
      </div>
  </div>;
}

export default DrawerNav;
