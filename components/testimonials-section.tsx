import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael",
      testimonial: `Impressed Beyond Words! XYZ Clinic goes
                    above and beyond in patient care. The staff
                    are attentive, knowledgeable, and genuinely
                    caring. The clinic's modern facilities and
                    attention to detail create an atmosphere of
                    comfort and confidence. 10/10 recommend!`
    },

    {
      name: "Mary",
      testimonial: `Exceptional Care Every Time! XYZ Clinic has
                    become my go-to for all my healthcare needs. The
                    staff are not only professional but also
                    compassionate, making each visit a positive
                    experience. The clinic's commitment to excellence
                    and patient satisfaction is unmatched. Thank you,
                    XYZ Clinic, for consistently exceeding expectations!`
    },

    {
      name: "James",
      testimonial: `Impressed Beyond Words! XYZ Clinic goes
                    above and beyond in patient care. The staff
                    are attentive, knowledgeable, and genuinely
                    caring. The clinic's modern facilities and
                    attention to detail create an atmosphere of
                    comfort and confidence. 10/10 recommend!`
    },

    {
      name: "Michael",
      testimonial: `Impressed Beyond Words! XYZ Clinic goes
                    above and beyond in patient care. The staff
                    are attentive, knowledgeable, and genuinely
                    caring. The clinic's modern facilities and
                    attention to detail create an atmosphere of
                    comfort and confidence. 10/10 recommend!`
    },

    {
      name: "Mary",
      testimonial: `Exceptional Care Every Time! XYZ Clinic has
                    become my go-to for all my healthcare needs. The
                    staff are not only professional but also
                    compassionate, making each visit a positive
                    experience. The clinic's commitment to excellence
                    and patient satisfaction is unmatched. Thank you,
                    XYZ Clinic, for consistently exceeding expectations!`
    },

    {
      name: "James",
      testimonial: `Impressed Beyond Words! XYZ Clinic goes
                    above and beyond in patient care. The staff
                    are attentive, knowledgeable, and genuinely
                    caring. The clinic's modern facilities and
                    attention to detail create an atmosphere of
                    comfort and confidence. 10/10 recommend!`
    }
  ];

  return ( 
    <section className="mt-[175px] flex flex-col items-center justify-center"> 
      <h1 className="font-heading text-center text-5xl lg:text-6xl text-[#2B3349]">What my <span className=" italic text-[#D4491D]">clients</span> say</h1>

      <div className="flex items-center justify-center mt-[70px] md:mt-[170px] w-[250px] sm:w-[400px] lg:w-[800px] xl:w-[1200px]"> 
        <Carousel className="w-full relative">
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3">
                <div className="text-center items-center justify-center p-1 font-heading">
                  <h3 className="text-3xl text-[#D4491D]">{item.name}</h3><br/>
                  <p className="text-[#2B3349]">{item.testimonial}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#D4491D] text-white"/>
          <CarouselNext className="bg-[#D4491D] text-white"/>
          {/* md:top-[-190px] lg:top-[-280px] xl: */}
          <div className="mx-[-800px] sm:mx-[-700px] md:mx-[-650px] lg:mx-[-500px] xl:mx-[-300px] absolute top-[-400px] z-[-1000]">
            <Image
              src="/assets/Background_Ripped_page.svg"
              alt="bg decoration"
              width={2000}
              height={100}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
 
export default TestimonialsSection;