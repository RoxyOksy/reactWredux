import {Image} from "../modules/image";
import {User} from "../modules/user"

export const pages = [
  {
    route: "/",
    title: "USERS_TITLE",
    component: User,
    //params = {content for 404 page} => text constants
  },

  {
    route: "/users",
    title: "USERS_TITLE",
    component: User,
    menuItem: "USERS_MENU"
  },

  {
    route: "/images",
    title: "IMAGES_TITLE",
    component: Image,
    menuItem: "IMAGES_MENU"
  },

];
