import { BiFileBlank, BiHomeAlt } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { MdPersonAddAlt1 } from "react-icons/md"

const sideMenu = [
  {
    url: "/dashboard",
    label: "Dashboard",
    icon: <BiHomeAlt />,
  },
  {
    label: "Assigned Projects",
    icon: <CgMicrosoft />,
    items: [
      {
        url: "/projects",
        label: "Your Projects",
      },
      {
        url: "/daily-tasks",
        label: "Daily Tasks",
      },
    ],
  },
  {
    url: "/leave",
    label: "Leave",
    icon: <BiFileBlank />,
  },
  {
    url: "/createrole",
    label: "Create Roles",
    icon: <MdPersonAddAlt1 />,
  },
];
export default sideMenu;
