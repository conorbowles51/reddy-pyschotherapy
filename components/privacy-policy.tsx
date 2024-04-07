import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ShieldQuestion } from 'lucide-react'

export default function PrivacyPolicy({
  className
}: {
  className?: string
}) {
  return (
    <Popover>
      <PopoverTrigger className={className}>
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
  )
}
