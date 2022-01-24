import { useState } from 'react'
import { RiBasketballLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { Drawer } from '@mui/material'
import DrawerNav from './DrawerNav'
import { Link } from 'react-scroll'

function Header() {
  const [drawer, setdrawer] = useState<boolean>(false);
  return <div className="font-readex w-full flex items-center">
      <div className="flex items-center bg-white justify-between w-full max-w-screen-xl mx-auto p-5 rounded-md">
        <div className="flex items-center text-2xl font-semibold">Code B<RiBasketballLine className="text-indigo-500" />unce</div>
        <div className="hidden sm:flex items-center gap-8">  
            <Link to="work" spy={true} smooth={true} className="cursor-pointer">Work</Link>
            <Link to="skills" spy={true} smooth={true} className="cursor-pointer">Skills</Link>
            <div className="cursor-pointer">Contact</div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
            <a href="https://www.linkedin.com/in/akhil-raj-2699371aa/"><AiOutlineLinkedin size={25} className="cursor-pointer text-blue-500" /></a>
            <a href="https://github.com/Akhil-dotcom"><FiGithub size={25} className="" /></a>
        </div>
        <BiMenu size={25} className="sm:hidden cursor-pointer" onClick={() => setdrawer(true)} />
      </div>
      <Drawer open={drawer} onClose={() => setdrawer(false)} anchor="right" PaperProps={{
                style: {
                    backgroundColor: "white",
                    borderRadius: "10px 0 0 10px"
                }
            }}>
        <DrawerNav />
      </Drawer>
  </div>;
}

export default Header;
