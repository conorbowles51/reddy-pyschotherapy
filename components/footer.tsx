import { MapPin, Mail, Phone, ShieldQuestion } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";

const Footer = () => {
  return ( 
    <footer className="w-full mt-[100px] xl:mt-[200px] px-[20px] xl:px-[300px] bg-[#2B3349] py-[60px] relative">

      <div className="flex flex-col gap-8 items-center sm:gap-0 sm:flex-row justify-between underline text-[#E67644]">
        <div className="flex flex-col gap-7 items-center sm:items-start">
          <p className="flex"> <MapPin className="mr-2"/>3 Sexton St, Prior&apos;s-Land, Limerick, V94 Y521</p>
          <p className="flex"> <Mail className="mr-2"/>reddypsychotherapy@proton.me</p>
          <p className="flex"> <Phone className="mr-2"/>086 825 5834</p>
        </div>

        <Popover>
          <PopoverTrigger>
            <p className="flex"><ShieldQuestion className="mr-2"/>Privacy policy</p>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] md:w-[500px] text-sm">
            <p className="text-[#2B3349]">
              <span className="text-[#E67644]">Data Collection: </span>
              We collect data via Google Analytics to analyze traffic. This data is anonymized and does not include personal identifiers.
              <br /><br />
              <span className="text-[#E67644]">Use of Data: </span>
              The data helps us improve user experience and service efficiency.
              <br /><br />
              <span className="text-[#E67644]">Data Sharing: </span>
              We do not share any personal data with third parties, except as required by law.
              <br /><br />
              <span className="text-[#E67644]">Data Security: </span>
              We strive to protect your data but cannot guarantee absolute security.
              <br /><br />
              <span className="text-[#E67644]">Your Rights: </span>
              You have rights over your data, including access and deletion requests.
              <br /><br />
              <span className="text-[#E67644]">Contact Us: </span>
              For questions or concerns about our privacy practices, please contact us at .
              <br /><br />
              <span className="text-[#E67644]">Changes to This Privacy Policy: </span>
              We may update our Privacy Policy and recommend reviewing it periodically.
            </p>
          </PopoverContent>
        </Popover>
        
      </div>
    </footer>  
  );
}
 
export default Footer;