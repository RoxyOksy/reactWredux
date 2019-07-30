import {Image} from "../modules/image";
import {User} from "../modules/user"

export const pages = [
  {
    route: "/",
    title: "Users",
    component: User
  },

  {
    route: "/users",
    title: "Users",
    component: User,
    menuItem: "Users"
  },

  {
    route: "/images",
    title: "Images",
    component: Image,
    menuItem: "Images"
  },

];
