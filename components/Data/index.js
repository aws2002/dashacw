import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter ,AiFillYoutube,AiOutlineInstagram} from "react-icons/ai";
const data = {
  footerLinks: {
    social: [
      {
        id: 1,
        href: "#",
        icon: <AiOutlineTwitter className=" inline text-xl -mt-1" />,
      },
      {
        id: 2,
        href: "#",
        icon: <AiOutlineInstagram className=" inline text-xl -mt-1" />,
      },
      { id: 3, href: "#", icon: <AiFillYoutube className=" inline text-xl -mt-1" /> },
      { id: 4, href: "#", icon: <FaDiscord className="inline text-xl -mt-1" /> },
      
      
    ],
  },
};
export default data;
