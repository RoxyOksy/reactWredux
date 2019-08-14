import {Image} from "../modules/image";
import {User} from "../modules/user"
import {translate} from "../shared/helpers";

export const pages = [
  {
    route: '/',
    title: translate('PAGE_TITLE.USERS'),
    component: User,
    //params = {content for 404 page} => text constants
  },

  {
    route: '/users',
    title: translate('PAGE_TITLE.USERS'),
    component: User,
    menuItem: translate('MENU_ITEM.USERS')
  },

  {
    route: '/images',
    title: translate('PAGE_TITLE.IMAGES'),
    component: Image,
    menuItem: translate('MENU_ITEM.IMAGES')
  },

];

