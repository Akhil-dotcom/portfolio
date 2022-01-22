import Head from 'next/head'
import Connect from '../components/Connect'
import Cart from '../components/Diagrams/Cart'
import TeckStack from '../components/Diagrams/TeckStack'
import UserProfile from '../components/Diagrams/UserProfile'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-20">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
          <div className="p-5 py-20 flex-1">
            <div className="font-readex text-4xl text-center md:text-left md:text-5xl font-bold">Hi, I'm Akhil Raj and I'am a <span className="">Web developer & Freelancer.</span></div>
            <div className="font-readex text-center md:text-left pt-5 sm:text-lg text-gray-800">I am a web developer based out of Chennai, India. I have 2 years of experience and i specialize in web development using stacks like React Js, Node Js, Next Js and much more. I am open for new opportunities and interesting projects.</div>
            <div className="pt-5 flex justify-center md:justify-start">
              <button className="bg-white py-2 font-semibold px-4 rounded-md w-full md:w-max border-2 border-black font-readex">Let's Talk</button>
            </div>
          </div>
          <div className="flex-1 relative py-20 md:py-0 w-11/12 mx-auto md:w-full overflow">
            <Cart />
            <TeckStack />
            <UserProfile />
          </div>
        </div>
      </main>
      <Connect />
    </div>
  )
}
