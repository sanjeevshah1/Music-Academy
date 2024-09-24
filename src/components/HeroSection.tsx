import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"

function HeroSection() {
  return (
    <>
    <div
    className="w-full h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden  py-32 md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 overflow-hidden"
        fill="purple"
      />
        <div className="p-4 flex flex-col gap-8 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-8 md:mb-[-8rem]">
              <Link href={"#courses"}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Explore courses
                </button>
            </Link>
            </div>
        </div>
        
        </div>
  
        </>
  )
}

export default HeroSection
