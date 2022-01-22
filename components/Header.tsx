import { useState } from 'react'
import { RiBasketballLine } from 'react-icons/Ri'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { Drawer } from '@mui/material'
import DrawerNav from './DrawerNav'

function Header() {
  const [drawer, setdrawer] = useState<boolean>(false);
  return <div className="font-readex fixed top-5 z-50 w-full flex items-center">
      <div className="flex items-center bg-white border-black justify-between w-11/12 md:w-full max-w-screen-xl mx-auto p-5 border-2 rounded-md">
        <div className="flex items-center text-2xl font-semibold">Code B<RiBasketballLine className="text-indigo-500" />unce</div>
        <div className="hidden sm:flex items-center gap-8">  
            <div className="cursor-pointer">Work</div>
            <div className="cursor-pointer">Contact</div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
            <a><AiOutlineLinkedin size={25} className="" /></a>
            <a><FiGithub size={25} className="" /></a>
        </div>
        <BiMenu size={25} className="sm:hidden cursor-pointer" onClick={() => setdrawer(true)} />
      </div>
      <Drawer open={drawer} onClose={() => setdrawer(false)} anchor="right">
        <DrawerNav />
      </Drawer>
  </div>;
}

export default Header;
