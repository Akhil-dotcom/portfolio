import { RiBasketballLine } from 'react-icons/ri';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

function Footer() {
  return <div className="font-readex bg-slate-100">
      <div className="max-w-screen-xl mx-auto p-5 py-10">
          <div className="flex flex-col items-center">
              <div className="flex items-center gap-5">
                  <SiInstagram size={20} />
                  <SiGithub size={20} />
                  <SiLinkedin size={20} />
              </div>
              <p className="py-3">Design & build by Akhil Raj</p>
              <div className="flex items-center text-2xl font-semibold">Code B<RiBasketballLine className="text-indigo-500" />unce</div>
          </div>
      </div>
  </div>;
}

export default Footer;
