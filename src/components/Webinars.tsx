import { HoverEffect } from "./ui/hover-effect";

export function Webinars() {
  return (
    <div className="w-full px-16 bg-stone-950 ">
      <HoverEffect items={webinars}  className="bg-stone-950 gap-12"/>
    </div>
  );
}
export const webinars = [
    {
      title: "Mastering Guitar Fundamentals",
      description:
        "Join us for an in-depth webinar on the basics of playing the guitar, tailored for beginners. Learn chords, strumming techniques, and foundational skills to kickstart your guitar journey.",
      link: "https://musicacademy.com/webinars/guitar-fundamentals",
    },
    {
      title: "Vocal Techniques for Singers",
      description:
        "Enhance your vocal range and control with our expert-led webinar. Designed for both beginners and advanced vocalists, this session covers breathing techniques, vocal warm-ups, and performance tips.",
      link: "https://musicacademy.com/webinars/vocal-techniques",
    },
    {
      title: "Music Production Basics",
      description:
        "Learn the essentials of music production, including sound mixing, mastering, and using digital audio workstations (DAWs). Perfect for aspiring producers and musicians looking to refine their production skills.",
      link: "https://musicacademy.com/webinars/music-production",
    },
    {
      title: "Jazz Piano Improvisation",
      description:
        "Unlock the secrets of jazz improvisation with this interactive webinar. Learn how to create spontaneous melodies and harmonies, and apply them to real-time piano performances.",
      link: "https://musicacademy.com/webinars/jazz-piano",
    },
    {
      title: "Recording Techniques for Home Studios",
      description:
        "Discover the best practices for recording professional-quality music from your home studio. From setting up microphones to mastering tracks, this webinar is perfect for musicians looking to produce high-quality sound on a budget.",
      link: "https://musicacademy.com/webinars/home-recording",
    },
    {
      title: "Songwriting for Beginners",
      description:
        "In this webinar, you'll explore the fundamental principles of songwriting, including melody creation, lyric writing, and song structure. Ideal for anyone looking to craft their first song or improve their existing skills.",
      link: "https://musicacademy.com/webinars/songwriting-basics",
    },
  ];
  