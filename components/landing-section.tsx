import Image from "next/image";
import { Button } from "./ui/button";

const LandingSection = () => {
  return ( 
    <section className="mt-10">
      <div className="flex flex-col lg:flex-row-reverse  lg:justify-between items-center">
        <div className="w-[50%]">
          <Image 
            src="/assets/Background_Cloud.png"
            alt="bg image clouds"
            width={600}
            height={200}
          />
        </div>

        <div>
          <h1 className="font-heading font-semibold text-4xl sm:text-7xl text-[#2B3349] text-center lg:text-left">
            <span className="text-[#D4491D]">Limerick</span> based<br/>psychotherapy
          </h1>

          <p className="text-[#2B3349] mt-10 font-light text-2xl text-center lg:text-left">
            Welcome to Eva&apos;s Psychotherapy, <br />
            where accessible and affordable <br />
            care meets attentive listening. <br />
          </p>
        </div>
      </div>

      <div className=" flex flex-col mt-[50px] lg:border-[4px] border-[#D4491D] w-full p-[50px] items-center text-center justify-center rounded-sm">
        <h3 className="text-[#D4491D] text-5xl font-bold font-heading mb-10">Reach out today</h3>

        <div className="border-[#D4491D] items-center justify-center border-[2px] p-3 rounded-sm hover:bg-[#D4491D] hover:cursor-poi group transition">
          <p className="text-[#D4491D] text-2xl font-heading group-hover:text-white">Contact me</p>
        </div>
      </div>
    </section>
  );
}
 
export default LandingSection;