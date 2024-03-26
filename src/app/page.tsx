import Intro from "@/components/intro";
import Gallery from "@/components/gallery";
import Service from "@/components/service";
import Contact from "@/components/contact";
import PhotoIntro from "../components/photo-intro/PhotoIntro";

export default function Home() {
  return (<main className="min-h-screen flex flex-col justify-center">
    <PhotoIntro/>
    <Intro/>
    <Service/>
    <Gallery/>
    <Contact/>
  </main>);
}
