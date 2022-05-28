import aboutImg1 from "../../assets/images/aboutUs/aboutImg-1.png";
import aboutImg2 from "../../assets/images/aboutUs/aboutImg-2.png";
import aboutImg3 from "../../assets/images/aboutUs/aboutImg-3.png";
import aboutImg4 from "../../assets/images/aboutUs/aboutImg-4.png";
import constants from "../../constants/AboutUs";

const {
  GET_CONNECTED,
  CREATE_YOUR_EVENT,
  HAVE_FUN_TOGETHER,
  NEW_CONTACTS,
  MEMBER1,
  MEMBER2,
  MEMBER3,
  ...TEXT
} = constants;

export const INFO_CARDS = [
  { img: aboutImg1, text: GET_CONNECTED },
  { img: aboutImg2, text: CREATE_YOUR_EVENT },
  { img: aboutImg3, text: HAVE_FUN_TOGETHER },
  { img: aboutImg4, text: NEW_CONTACTS },
];

export const MEMBERS = [MEMBER1, MEMBER2, MEMBER3];

export const PARAGRAPHS_HEADINGS_TEXT = TEXT;
