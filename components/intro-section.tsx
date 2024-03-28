import Image from "next/image";
import Link from "next/link";

const IntroSection = () => {
  return ( 
    <section className="mt-[50px] lg:mt-[200px] flex flex-col lg:flex-row justify-around items-center relative">
      <Image 
        className="rotate-90 absolute left-[-300px] sm:left-[-360px] md:left-[-400px] lg:left-[-600px] xl:left-[-700px] top-[-100px]"
        src="/assets/Semi_Circle_1.svg"
        alt="semi circle image"
        width={900}
        height={900}
      />

      <Image 
        src="/assets/headshot.jpg"
        alt="eva headshot"
        width={350}
        height={350}
      />

      <div className="flex flex-col justify-center items-center">
        <p className="font-heading text-[#2B3349] mt-[50px] lg:mt-[0px]">
          My name is Eva Reddy. <br /><br />
          I am a qualified therapist based working in Limerick, Ireland. <br /><br />
          My approach to counselling and psychotherapy is integrative <br />
          although, my training focused on psychodynamic, Jungian,<br />
          person-centred, and existentialist approaches.<br /><br />
          I believe every person is different and would benefit from a<br />
          tailored approach. No one is the same so no one way of working<br />
          with people exists.<br /><br />
          I aim to collaborate with my clients to find the best path to<br />
          working together.
        </p>

        <Link href="/about" className="mt-5 p-5 bg-[#D4491D] border-[#D4491D] w-[300px] text-center text-white font-heading text-2xl rounded-sm hover:text-[#D4491D] hover:cursor-pointer border hover:bg-white transition">
          Learn more...
        </Link>
      </div>
    </section>
  );
}
 
export default IntroSection;