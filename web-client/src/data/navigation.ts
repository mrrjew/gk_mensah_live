import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import { FiUser } from "react-icons/fi";

export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/plans",
    name: "Plans",
    type: "megaMenu",
  },
  {
    id: ncNanoId(),
    href: "/archives",
    name: "Archives",
    type: "dropdown",
  },
];
