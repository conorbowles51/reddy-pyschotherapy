import Image from "next/image";

const BlogCard = ({
  title,
  blurb,
  src,
  date
}: {
  title: string,
  blurb: string,
  src: string,
  date: string
}) => {
  return ( 
    <div className="flex flex-col gap-5 justify-around text-black items-center text-center hover:scale-90 transition">
      <div>
        <Image 
          src={src}
          alt={title}
          width={300}
          height={300}
        />

        <p className="text-2xl">{date}</p>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{blurb}</p>

      <div className="px-6 py-2 text-white border border-[#D4491D] bg-[#D4491D] rounded-sm hover:text-[#D4491D] hover:cursor-pointer hover:bg-white transition">
        Learn more
      </div>
    </div>
  );
}
 
export default BlogCard;