import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      name: "Telephone Therapy",
      desc: "Remote talk therapy sessions through 50-minute audio calls.",
      path: "/assets/Telephone_Therapy.png"
    },
    {
      name: "Counselling",
      desc: "A set amount of regular therapeutic sessions spaced over a short-term period of time.",
      path: "/assets/Councelling.png"
    },
    {
      name: "In-person Therapy",
      desc: "50-minute talk therapy sessions set face-to- face at a dedicated therapy room.",
      path: "/assets/InPerson_Therapy.png"
    },
    {
      name: "Online Therapy",
      desc: "Remote talk therapy sessions through 50-minute online video calls.",
      path: "/assets/Online_Therapy.png"
    },
    {
      name: "Pyschotherapy",
      desc: "An unrestricted amount of therapeutic sessions spaced over a long-term period of time.",
      path: "/assets/Pyschotherapy.png"
    },
  ]

  return ( 
    <section className="mt-[100px] xl:mt-[240px] flex flex-col items-center justify-center relative scroll-my-60" id="services">
      <h2 className="text-[#2B3349] text-6xl font-heading">Services</h2>

      <div className="absolute -rotate-90 right-[-700px]">
        <Image 
          src="/assets/Semi_Circle_2.svg"
          alt="background decoration"
          width={700}
          height={700}
        />
      </div>

      <div className="mt-[100px] flex gap-[25px] xl:gap-[100px] flex-wrap justify-center text-center">
        {services.map((item, index) => (
          <ServiceCard 
            key={index}
            name={item.name}
            desc={item.desc}
            path={item.path}
          />
        ))}
      </div>
    </section>
  );
}

const ServiceCard = ({
  name, 
  desc, 
  path
}: {
  name: string,
  desc: string,
  path: string
}) => {
  return (
    <div className="flex flex-col items-center font-heading">
      <Image 
        src={path}
        alt={name}
        width={100}
        height={100}
      />
      <h4 className="text-2xl text-[#D4491D]">{name}</h4>
      <p className="text-[#2B3349] max-w-[150px]">{desc}</p>
    </div>
  )
}
 
export default ServicesSection;