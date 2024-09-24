"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Personalized Learning",
    description:
      "Our music academy offers customized lessons to fit your unique needs. Whether you're a beginner or an advanced musician, our tailored approach ensures you progress at your own pace with content that aligns with your goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Personalized Learning
      </div>
    ),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from top-tier musicians and industry professionals. Our instructors bring years of experience and passion to each lesson, offering hands-on guidance, practical advice, and real-world music techniques to ensure you reach your full potential.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our academy is equipped with cutting-edge technology and instruments to provide the best environment for learning and creativity. From professional recording studios to performance spaces, you'll have everything you need to master your craft.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        State-of-the-Art Facilities
      </div>
    ),
  },
  {
    title: "Community and Networking",
    description:
      "Join a vibrant community of musicians, composers, and creators. Our academy fosters collaboration, allowing students to connect, share ideas, and grow together. You'll have opportunities to network, perform, and collaborate on projects with peers and professionals alike.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Community and Networking
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
