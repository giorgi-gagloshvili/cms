import { RiHome2Line } from "react-icons/ri"
import { IoPersonOutline, IoPeopleOutline } from "react-icons/io5"
import { MdOutlineAlignVerticalBottom } from "react-icons/md"

export const links = [
  {
    id: 1,
    url: "/",
    name: "home",
    icon: <RiHome2Line />,
  },
  {
    id: 2,
    url: "/lecturers",
    name: "lecturers",
    icon: <IoPersonOutline />,
  },
  {
    id: 3,
    url: "/students",
    name: "students",
    icon: <IoPeopleOutline />,
  },
  {
    id: 4,
    url: "/degrees",
    name: "degrees",
    icon: <MdOutlineAlignVerticalBottom />,
  },
]
