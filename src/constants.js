import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoCart } from "react-icons/io5";

export const OFFER_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/";

export const MIND_PRODUCT_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

export const SWEEGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2775063&lng=70.774087&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const SEARCH_CUISINES_URL =
  "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=22.2775063&lng=70.774087";

export const headerData = [
  {
    path: "/search-food",
    Icon: FaSearch,
    text: "Search",
    id: 1,
  },
  {
    path: "/",
    Icon: BiSolidOffer,
    text: "Offers",
    id: 2,
  },
  {
    path: "/",
    Icon: FaHandsHelping,
    text: "Help",
    id: 3,
  },
  {
    path: "/",
    Icon: IoIosContact,
    text: "Sign In",
    id: 4,
  },
  {
    path: "/",
    Icon: IoCart,
    text: "Cart",
    id: 5,
  },
];
