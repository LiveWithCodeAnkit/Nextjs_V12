import { MdAccountCircle } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const profileNavbar = [
  {
    icon: <MdAccountCircle />,
    label: "My Profile",
    url: "/Profile",
  },
  {
    icon: <TbLogout />,
    label: "Log Out",
    url: "/login",
  },
];
export default profileNavbar;
