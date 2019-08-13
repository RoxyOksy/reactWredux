import {Image} from "../modules/image";
import {User} from "../modules/user"

export const pages = [
  {
    route: "/",
    title: "USERS",
    component: User,
    //params = {content for 404 page} => text constants
  },

  {
    route: "/users",
    title: "USERS",
    component: User,
    menuItem: "USERS"
  },

  {
    route: "/images",
    title: "IMAGES",
    component: Image,
    menuItem: "IMAGES"
  },

];
