'use client';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
interface Course{
    title:string,
    description: string,
}
export default function  Courses() {
  const [courses,setCourses] = useState<Course[] | null>([])
  useEffect(()=>{
    try{
      const fetchCourses = async () =>{
        const response = await fetch("http://localhost:3000/api/featured-courses",{
          cache: "no-cache"
      })
      const data = await response.json();
      setCourses(data);
      }
     fetchCourses();
    }catch(error){
      console.log(error);
    } 
  },[]);
  
  return (
   <BackgroundBeamsWithCollision >
     <div id="courses" className="w-full h-min-screen bg-stone-950 flex flex-col  items-center py-36">
        <p className="text-2xl text-green-300 mt-16 mb-4">Featured Courses</p>
        <h1 className="text-4xl mb-16 text-white">Learn With The Best!</h1>
        <div className="cards w-full h-auto  flex flex-wrap gap-24 justify-center">
            {
                courses?.map((course) =>{
                    return   <BackgroundGradient
                    className=" flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-pretty font-semibold sm:text-xl mt-4 mb-4 text-neutral-200">{course.title}</p>
                            <p className="text-sm text-neutral-400 flex-grow">{course.description}</p>
                            <Link href={`courses`} className="mt-8">
                            <button className="p-[3px] relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                  Learn More
                                </div>
                              </button>
                            </Link>
                        </div>
                    </BackgroundGradient>
          
                })
            }
        </div>
    </div>
    </BackgroundBeamsWithCollision>
  )
}
