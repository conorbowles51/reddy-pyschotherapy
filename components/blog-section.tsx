import BlogCard from "./blog-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Anxiety: Signs, Symptoms & Treatment",
      blurb: `Anxiety is one of the most common
              mental health issues in our modern
              hustle and bustle world, and if you
              don\'t take care of...`,
      date: "14/4/24",
      src: "/assets/test.svg"
    },
    {
      title: "Your child is irritated and retreating from the world?",
      blurb: `Anxiety is one of the most common
              mental health issues in our modern
              hustle and bustle world, and if you
              don\'t take care of...`,
      date: "02/4/24",
      src: "/assets/Sitting_Person.svg"
    },
    {
      title: "Trauma - What it is and what it does to the human brain",
      blurb: `Anxiety is one of the most common
              mental health issues in our modern
              hustle and bustle world, and if you
              don\'t take care of...`,
      date: "29/3/24",
      src: "/assets/25.svg"
    },
  ]

  return ( 
    <section className="mt-[100px] xl:mt-[200px] mx-[50px] scroll-my-24" id="advice">
      <div className="flex flex-col xl:flex-row items-center justify-between font-heading text-[#2B3349]">
        <div className="w-[1200px] xl:mr-[70px]">
          <h2 className="text-4xl md:text-5xl text-center xl:text-left">
            Don&apos;t know <span className="text-[#D4491D]">where</span> to<br /> start?
          </h2>
          <p className="mt-10 md:text-2xl font-thin text-center xl:text-left mb-[50px] xl:mb-0">
            We know that the complex<br />
            world of mental health can<br />
            sometimes get a bit confusing,<br />
            so feel free to take a moment<br />
            and explore these articles which<br />
            cover some common mental<br />
            health issues.<br />
          </p>
        </div>

        <Carousel
          className="max-w-[200px] md:max-w-[400px]"
        >
          <CarouselContent>
            {blogPosts.map((item, index) => (
              <CarouselItem key={index}>
                <BlogCard 
                  title={item.title}
                  blurb={item.blurb}
                  date={item.date}
                  src={item.src}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#D4491D] text-white"/>
          <CarouselNext className="bg-[#D4491D] text-white"/>
        </Carousel>

        {/* <div className="flex gap-[75px]">
          {blogPosts.map((item, index) => (
            <BlogCard 
              key={index}
              title={item.title}
              blurb={item.blurb}
              date={item.date}
              src={item.src}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
 
export default BlogSection;