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
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  // thumbnailShoe1,
  // thumbnailShoe2,
  // thumbnailShoe3,
} from "../images";

import {
  // bigSweets1,
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
    imgURL: bigSweets2,
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
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Chuck Taylor All Star", link: "/" },
      { name: "Run Star Hike Platform", link: "/" },
      { name: "Chuck 70 Tri-Color", link: "/" },
      { name: "Star Player 76", link: "/" },
      { name: "Chuck Taylor All Star Lift Platform", link: "/" },
      { name: "Run Star Legacy Chelsea CX", link: "/" },
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
      { name: "customer@converse.com", link: "mailto:customer@converse.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
