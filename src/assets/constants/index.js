import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../icons";
import {
  // bigShoe1,
  // bigShoe2,
  // bigShoe3,
  customer3,
  customer4,
  customer5,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  // thumbnailShoe1,
  // thumbnailShoe2,
  // thumbnailShoe3,
} from "../images";

import {
  bigSweets1,
  bigSweets2,
  bigSweetKokis1,
  bigSweetAsmi1,
  sweetMunKawum,
  sweetAluwa,
  sweetAggala,
  sweetAthirasa,
  sweetCoconutCake,
  sweetNarangKawum,
  sweetWaliThalapa
} from "../images/index"
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: bigSweets2,
    bigShoe: bigSweets2,
  },
  {
    thumbnail: bigSweetKokis1,
    bigShoe: bigSweetKokis1,
  },
  {
    thumbnail: bigSweetAsmi1,
    bigShoe: bigSweetAsmi1,
  },
];

export const sweets = [
  {
    imgURL: bigSweets1,
    name: "Kawum/කැවුම් ",
  },
  {
    imgURL: bigSweetKokis1,
    name: "Kokis/කොකිස් ",
  },
  {
    imgURL: bigSweetAsmi1,
    name: "Asmee/ආස්මී",
  },
  {
    imgURL: sweetMunKawum,
    name: "Mun Kawum/මුන් කැවුම්",
  },
  {
    imgURL: sweetAthirasa,
    name: "Athirasa/අතිරස",
  },
  {
    imgURL: sweetCoconutCake,
    name: "Coconut Cake/පොල් cake",
  },
  {
    imgURL: sweetNarangKawum,
    name: "Narang Kawum/නාරං කැවුම්",
  },
  {
    imgURL: sweetAggala,
    name: "Aggala/අග්ගලා",
  },
  {
    imgURL: sweetAluwa,
    name: "Aluwa/අලුවා ",
  },
  {
    imgURL: sweetWaliThalapa,
    name: "Vali Thalapa/වැලිතලප",
  },
];

export const statistics = [
  { value: "10+", label: "Sweets" },
  // { value: "500+", label: "Shops" },
  { value: "100+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Chuck Taylor All Star",
    price: "100.20 €",
  },
  {
    imgURL: shoe5,
    name: "Run Star Hike Sequins",
    price: "190.00 €",
  },
  {
    imgURL: shoe6,
    name: "Chuck Taylor All Star",
    price: "120.20 €",
  },
  {
    imgURL: shoe7,
    name: "Chuck 70 Y2K Heart",
    price: "130.00 €",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer3,
    customerName: "Mindula Shakith",
    rating: "4.5/5",
    feedback:
      "The first bite was pure heaven! The flavors were so authentic and delicious, reminding me of homemade treats from my childhood. This is now my go-to shop for all things Aluth Avurudda, and I can't wait to try more of their sweets!",
  },
  {
    imgURL: customer4,
    customerName: "Chamuditha Prabash",
    rating: "4.8/5",
    feedback:
      "My family raved about the freshness, taste, and quality of the sweets, saying they were the best they'd had outside Sri Lanka. This shop made my family's celebration extra special, and I'll definitely be ordering from them again!",
  },
  {
    imgURL: customer5,
    customerName: "Chamuditha Prabash",
    rating: "4.5/5",
    feedback: 
    "The first thing that impressed me was the beautiful packaging, but the real magic unfolded upon opening the box. The aroma of spices and sweetness transported me right back to Sri Lanka. Each bite was an explosion of flavor."
  }
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Kawum/කැවුම්", link: "/" },
      { name: "Kokis/කොකිස් ", link: "/" },
      { name: "Asmee/ආස්මී", link: "/" },
      { name: "Mun Kawum/මුන් කැවුම්", link: "/" },
      { name: "Athirasa/අතිරස", link: "/" },
      { name: "Coconut Cake/පොල් cake", link: "/" },
      { name: "Narang Kawum/නාරං කැවුම්", link: "/" },
      { name: "Aggala/අග්ගලා", link: "/" },
      { name: "Aluwa/අලුවා", link: "/" },
      { name: "Vali Thalapa/වැලිතලප", link: "/" },

    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "kawiligedaramail@gmail.com", link: "mailto:kawiligedaramail@gmail.com" },
      { name: "+94771128411", link: "tel:+94771128411" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
