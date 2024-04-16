import Image from "next/image";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function About() {
    return (
      <main className="mt-[50px] relative">
        <div className="h-full z-[-100] pointer-events-none hidden xl:block">
        <Image 
          src="/assets/Trail.svg"
          alt="background decoration"
          className="z-[-1000]"
          layout="fill"
          objectFit="cover"
        />
      </div>

        <div className="mt-3 py-4 px-[50px] md:px-[100px] bg-[#f7b6aa] w-fit rounded-r-3xl">
          <h1 className="text-3xl text-[#D4491D] font-heading tracking-[10px]">
            About Eva
          </h1> 
        </div>

        <div className="absolute rotate-90 left-[-600px] top-0">
          <Image 
            src="/assets/Semi_Circle_1.svg"
            alt="Semi circle bg decoration"
            width={700}
            height={700}
          />
        </div>

        <div className="hidden lg:flex gap-10 justify-between">
          <div className="flex flex-col gap-10 font-heading text-[#2B3349] max-w-[500px]">
            <div>
              <div>
                <p className="mt-10">
                I am a qualified therapist and a pre-accredited member of the Irish Association of Counselling and Psychotherapy (IACP). I set up my private practice, Reddy Psychotherapy, in June 2022 and started working with Limerick Mental Health Association in April 2023.
                <br /><br />
                I am very passionate about creating an environment for expression and connection for those I work with. Listening to and supporting people through expression is my aim through counselling and psychotherapy, no matter their background or demographic. 
                <br /><br />
                My approach to counselling and psychotherapy is integrative, although, my training focused on psychodynamic, Jungian, existentialist, and person-centred approaches.
                <br /><br />
                I believe every person is different and would benefit from a tailored approach. No one is the same so no one way of working with people exists. I aim to collaborate with my clients to find the best path to working together.
                <br /><br />
                Prior to pursuing a career in mental health, I studied and worked as an artist. I had always felt that words and verbal communication could not fully express my thoughts or feelings to the people around me through traditional verbal conversation. This inspired me to find a way that I could communicate to the world what I needed to express. My medium is art, but many do not have access to expression this way. 
                <br /><br />
                I endeavour to support others through their own expressions in a therapeutic and supportive space. If you would be interested in working with me in a professional therapeutic working relationship, then please reach out.
                <br /><br />
                </p>
              </div>
            </div>

            <div className="flex">
              <div>
                <h3 className="text-6xl text-[#D4491D]">Experience</h3>
                <div>
                  <p className="mt-10">
                    I have been working as a counsellor and psychotherapist since I achieved my full qualification. I have worked with individual adults of all ages from various backgrounds through counselling by providing time and space where each individual can focus on themselves during each session.
                    <br /><br />
                    I worked as a volunteer counsellor for 2+ years with Let’s Get Talking who provide affordable counselling support with reduced barriers to various communities all over Ireland.
                    <br /><br />
                    I volunteered with Fatima Group United for 1 year to bring counselling and psychotherapy support to those in the community that needed support.
                    <br /><br />
                    For 1 year I volunteered with PCI Counselling Service which offered low-cost counselling as a not-for profit initiative by PCI college. 
                    <br /><br />
                    I volunteered as a play volunteer for 1+ year at Temple Street Hospital with Children in Hospital Ireland (CHI) who provide moments of play and relief in stressful situations for children and their family members. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <Image 
                src="/assets/Photo_Headshot.png"
                alt="headshot photo of eva"
                width={600}
                height={600}
              />

              <div className="absolute -bottom-[30px] left-[50px] w-[587px] h-[523px] bg-[#2B3349] z-[-1]" />
              <div className="absolute bottom-[150px] left-[250px] w-[500px] h-[500px] bg-[#DF985E] z-[-2]" />
            </div>

            <div className="mt-[150px] ml-[50px]">
              <h3 className="text-6xl text-[#D4491D] font-heading">Qualifications</h3>

              <p className="font-heading text-[#2B3349] mt-10 text-lg font-semibold">
                (On-Going) Certificate in <span className="text-[#D4491D]">Jungian Psychology and Art Therapy</span>
                <br /><br />
                (On-Going) Diploma in <span className="text-[#D4491D]">Integrative Psychotherapy with Adolescents</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Online and Telephone Counselling </span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">ASIST (Applied Suicide Intervention Skills Training)</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">LivingWorks Start Training</span>
                <br /><br />
                BSc (Honours) Degree in <span className="text-[#D4491D]">Counselling and Psychotherapy</span>
                <br /><br />
                Diploma in <span className="text-[#D4491D]">Jungian Theory and Practice</span>
                <br /><br />
                Diploma in <span className="text-[#D4491D]">Jungian Studies </span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Counselling and Psychotherapy</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Children First </span>
                <br /><br />
                BSc (Honours) Degree in <span className="text-[#D4491D]">Craft Design</span>
              </p>
            </div>

            <h3 className="mt-[75px] text-4xl font-heading font-semibold text-[#D4491D]">Reach out...</h3>
            <p  className="mt-[10px] ml-[40px] text-2xl font-heading text-[#2B3349]">Send me an email and we can chat<br />about how I can help you</p>

            <Link href="/contact" className="flex rounded-sm justify-center items-center gap-3 mt-5 ml-[100px] py-1 px-3 bg-[#D4491D] border-[#D4491D] w-[200px] text-center text-white font-heading text-2xl hover:text-[#D4491D] hover:cursor-pointer border hover:bg-white transition">
              Contact <ArrowRight />
            </Link>
          </div>
          
        </div>
      
        <div className="flex flex-col lg:hidden items-center">

          <Image 
            className="rounded-lg mt-10 border-2 border-white"
            src="/assets/Photo_Headshot.png"
            alt="headshot photo of eva"
            width={300}
            height={300}
          />

          <h2 className="mt-10 text-3xl md:text-6xl text-[#D4491D] font-heading">Background</h2>
          <ScrollArea className="mt-5 h-[400px] w-[350px] p-2 border-b border-t border-black" >
            <p className="font-heading text-[#2B3349]">
              I am a qualified therapist and a pre-accredited member of the Irish Association of Counselling and Psychotherapy (IACP). I set up my private practice, Reddy Psychotherapy, in June 2022 and started working with Limerick Mental Health Association in April 2023.
              <br /><br />
              I am very passionate about creating an environment for expression and connection for those I work with. Listening to and supporting people through expression is my aim through counselling and psychotherapy, no matter their background or demographic. 
              <br /><br />
              My approach to counselling and psychotherapy is integrative, although, my training focused on psychodynamic, Jungian, existentialist, and person-centred approaches.
              <br /><br />
              I believe every person is different and would benefit from a tailored approach. No one is the same so no one way of working with people exists. I aim to collaborate with my clients to find the best path to working together.
              <br /><br />
              Prior to pursuing a career in mental health, I studied and worked as an artist. I had always felt that words and verbal communication could not fully express my thoughts or feelings to the people around me through traditional verbal conversation. This inspired me to find a way that I could communicate to the world what I needed to express. My medium is art, but many do not have access to expression this way. 
              <br /><br />
              I endeavour to support others through their own expressions in a therapeutic and supportive space. If you would be interested in working with me in a professional therapeutic working relationship, then please reach out.
              <br /><br />
            </p>
            <ScrollBar />
          </ScrollArea>

          <h2 className=" mt-20 text-3xl md:text-6xl text-[#D4491D] font-heading">Experience</h2>
          <ScrollArea className="mt-5 h-[400px] w-[350px] p-2 border-b border-t border-black" >
            <p className="font-heading text-[#2B3349]">
              I have been working as a counsellor and psychotherapist since I achieved my full qualification. I have worked with individual adults of all ages from various backgrounds through counselling by providing time and space where each individual can focus on themselves during each session.
              <br /><br />
              I worked as a volunteer counsellor for 2+ years with Let’s Get Talking who provide affordable counselling support with reduced barriers to various communities all over Ireland.
              <br /><br />
              I volunteered with Fatima Group United for 1 year to bring counselling and psychotherapy support to those in the community that needed support.
              <br /><br />
              For 1 year I volunteered with PCI Counselling Service which offered low-cost counselling as a not-for profit initiative by PCI college. 
              <br /><br />
              I volunteered as a play volunteer for 1+ year at Temple Street Hospital with Children in Hospital Ireland (CHI) who provide moments of play and relief in stressful situations for children and their family members. 
            </p>
            <ScrollBar />
          </ScrollArea>

          <h2 className=" mt-20 text-3xl md:text-6xl text-[#D4491D] font-heading">Qualifications</h2>
          <ScrollArea className="mt-5 h-[400px] w-[350px] p-2 border-b border-t border-black" >
            <p className="font-heading text-[#2B3349] text-lg font-semibold">
                (On-Going) Certificate in <span className="text-[#D4491D]">Jungian Psychology and Art Therapy</span>
                <br /><br />
                (On-Going) Diploma in <span className="text-[#D4491D]">Integrative Psychotherapy with Adolescents</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Online and Telephone Counselling </span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">ASIST (Applied Suicide Intervention Skills Training)</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">LivingWorks Start Training</span>
                <br /><br />
                BSc (Honours) Degree in <span className="text-[#D4491D]">Counselling and Psychotherapy</span>
                <br /><br />
                Diploma in <span className="text-[#D4491D]">Jungian Theory and Practice</span>
                <br /><br />
                Diploma in <span className="text-[#D4491D]">Jungian Studies </span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Counselling and Psychotherapy</span>
                <br /><br />
                Certificate in <span className="text-[#D4491D]">Children First </span>
                <br /><br />
                BSc (Honours) Degree in <span className="text-[#D4491D]">Craft Design</span>
              </p>
              <ScrollBar />
          </ScrollArea>
          
          <h3 className="mt-[75px] text-4xl font-heading font-semibold text-[#D4491D]">Reach out...</h3>
            <p  className="mt-[10px] ml-[40px] text-2xl font-heading text-[#2B3349]">Send me an email and we can chat<br />about how I can help you</p>

            <Link href="/contact" className="flex justify-center items-center gap-3 mt-5 ml-[100px] p-3 bg-[#D4491D] border-[#D4491D] w-[200px] text-center text-white font-heading text-2xl hover:text-[#D4491D] hover:cursor-pointer border hover:bg-white transition">
              Contact <ArrowRight />
            </Link>
        </div>
      </main>
    );
  }
  