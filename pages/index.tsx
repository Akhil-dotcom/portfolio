import Head from 'next/head'
import Connect from '../components/Connect'
import Cart from '../components/Diagrams/Cart'
import TeckStack from '../components/Diagrams/TeckStack'
import UserProfile from '../components/Diagrams/UserProfile'
import About from '../components/About'
import Skills from '../components/Skills'
import { Link as Link1 } from 'react-scroll'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Education from '../components/Education'
// import { MdKeyboardArrowUp } from 'react-icons/md'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Code Bounce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="xl:overflow-hidden relative" id="home">
        <div className="flex flex-col xl:flex-row gap-5 max-w-screen-xl mx-auto">
          <div className="p-5 pb-20 py-24 xl:py-20 flex-1 max-w-xl xl:max-w-none mx-auto">
            <div className="font-readex text-4xl text-center xl:text-left md:text-5xl font-bold">Hi, I&#39;m Akhil Raj and I&#39;am a <span className="underline text-indigo-500">Web developer</span> & Freelancer.</div>
            <div className="font-readex text-center xl:text-left pt-5 sm:text-lg text-gray-800">I am a web developer based out of Chennai, India. I have 2 years of experience and i specialize in web development using stacks like React Js, Node Js, Next Js and much more. I am open for new opportunities and interesting projects.</div>
            <div className="pt-5 flex justify-center xl:justify-start">
              <Link1 to="connect" spy={true} smooth={true} className="bg-white text-center cursor-pointer hover:scale-105 active:scale-95 duration-150 py-2 font-semibold px-4 rounded-md w-full md:w-max border-2 border-black font-readex">Let&#39;s Talk</Link1>
            </div>
          </div>
          <div className="flex-1 relative min-h-[300px] py-20 md:py-0 w-11/12 mx-auto xl:w-full max-w-xl xl:max-w-none">
            <Cart />
            <TeckStack />
            <UserProfile />
          </div>
        </div>
      </main>
      <About />
      <Skills />
      <Education />
      <Work />
      <Connect />
      {/* scroll to top */}
      {/* <Link1 to="home" smooth={true} spy={true} className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-lg fixed bottom-3 right-3">
        <MdKeyboardArrowUp size={20} />
      </Link1> */}
      <Footer />
    </div>
  )
}
