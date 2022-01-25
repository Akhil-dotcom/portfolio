import { useState } from 'react'
import { RiBasketballLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { Drawer } from '@mui/material'
import DrawerNav from './DrawerNav'
import { Link as Link1 } from 'react-scroll'
import Link from 'next/link'


function Header() {
  const [drawer, setdrawer] = useState<boolean>(false);
  return <div className="font-readex w-full flex items-center">
      <div className="flex items-center bg-white justify-between w-full max-w-screen-xl mx-auto p-5 rounded-md">
        <div className="flex items-center text-2xl font-semibold">Code B<RiBasketballLine className="text-indigo-500" />unce</div>
        <div className="hidden sm:flex items-center gap-8">  
            <Link1 to="work" spy={true} smooth={true} className="cursor-pointer hover:underline hover:scale-105 active:scale-95 duration-150">Work</Link1>
            <Link1 to="skills" spy={true} smooth={true} className="cursor-pointer hover:underline hover:scale-105 active:scale-95 duration-150">Skills</Link1>
            <Link href="/resume">Resume</Link>
            <a href="https://wa.me/919566060492?text=Hi%20Code%20Bounce" className="cursor-pointer hover:scale-105 active:scale-95 duration-150">Contact</a>
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
