import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ScrollableComponent from "./components/Scrollable";
import Footer_text from "./components/Footer_text";

const images  = [
  "/images/homepage/demo1.png",
  "/images/homepage/demo2.png",
  "/images/homepage/demo3.png",
];





export default function Home() {
  return (
    <>
    <NavBar/>
    <main>
      <HeroSection/>
      <ScrollableComponent 
      content={
      <>
      <div className="items-center">
      <div className="px-16 pt-32">
      <p className="font-semibold text-xl text-[#d6b149] pb-5">Clear your mind</p>
      <h1 className="font-bold text-4xl">The fastest way to get tasks out of your head.</h1>
      <p className="text-2xl text-[#a8a6a6] pt-10">
      Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.
      </p>
      </div>
      <div className="px-16 pt-96">
      <p className="font-semibold text-xl text-[#76ae5c] pb-5">Focus on what’s important</p>
      <h1 className="font-bold text-4xl">Reach that mental clarity you’ve been longing for.</h1>
      <p className="text-2xl text-[#a8a6a6] pt-10">
      Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you prioritize your most important work.
      </p>
      </div>
      <div className="px-16 pt-96 pb-40">
      <p className="font-semibold text-xl text-[#86c06b] pb-5">Organize your teamwork, too</p>
      <h1 className="font-bold text-4xl">Where all your tasks can finally coexist.</h1>
      <p className="text-2xl text-[#a8a6a6] pt-10">
      Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.
      </p>
      </div>
      </div>
      </>
      }
      images={images}/>
    </main>
    <div class="bg-gradient-to-t from-orange-100 to-white w-full ">

      <Footer_text/>
      <Footer/>

    </div>
    </>
  );
}
