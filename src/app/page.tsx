import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Home() {
  return (
    <main className="">
      <nav className='flex justify-between bg-gray-600'>
        <RxHamburgerMenu/>
        <img className="self-center" src="/zillow-logo-white.svg" alt="Zillow Logo" />
        <img className="w-10 h-10 rounded-full"  src="/Otter.jpg" alt="Profile Picture" />
      </nav>
      <div className="relative bg-white"> 
        <div><img className="" src="/Lighthouse.jpg" alt="Background Image" /></div>
        <div className="absolute left-1/2 top-1/2">
            <h3>HelloWorld
              Hello Again
            </h3>
        </div>
      </div>
    </main>
  )
}
