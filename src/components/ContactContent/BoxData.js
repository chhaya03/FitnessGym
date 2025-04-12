import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

const boxData = [
  {
    id: 1,
    link: "https://www.google.com/maps/place/India/@19.6900952,61.0245166,4z/data=!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
    icon: FaMapLocationDot,
    boxTitle: "Our Location",
    details: "Gujarat India",
    target: "_blank",
  },
  {
    id: 2,
    link: "tel:+1234567890",
    icon: FaPhoneVolume ,
    boxTitle: "Contact Us",
    details: "(123) 456 7890",
  },
  {
    id: 3,
    link: "mailto:chhayamishra0320@gmail.com",
    icon: LuMails ,
    boxTitle: "Email Us",
    details: "chhayamishra0320@gmail.com",
  },
];

export default boxData;
