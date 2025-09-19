import React, { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import PageTitle from "../components/pagetitle/PageTitle_Explore";
import { Link } from "react-router-dom";

// import topImg3 from "/images2/gallery/img/image1.3.webp";
// import topImg5 from "/images2/gallery/img/image1.5.webp";

import newimg1 from "/images2/gallery/samarth photos/img121.webp";
import newimg2 from "/images2/gallery/samarth photos/img122.webp";
import newimg3 from "/images2/gallery/samarth photos/img123.webp";
import newimg4 from "/images2/gallery/samarth photos/img124.webp";
import newimg5 from "/images2/gallery/samarth photos/img125.webp";
import newimg6 from "/images2/gallery/samarth photos/img126.webp";
import newimg7 from "/images2/gallery/samarth photos/img127.webp";
import newimg8 from "/images2/gallery/samarth photos/img128.webp";
import newimg9 from "/images2/gallery/samarth photos/img129.webp";
import newimg10 from "/images2/gallery/samarth photos/img130.webp";
import newimg11 from "/images2/gallery/samarth photos/img131.webp";
import newimg12 from "/images2/gallery/samarth photos/img132.webp";
import newimg13 from "/images2/gallery/samarth photos/img133.webp";
import newimg14 from "/images2/gallery/samarth photos/img134.webp";
import newimg15 from "/images2/gallery/samarth photos/img135.webp";
import newimg16 from "/images2/gallery/samarth photos/img136.webp";
import newimg17 from "/images2/gallery/samarth photos/img137.webp";
import newimg18 from "/images2/gallery/samarth photos/img138.webp";
import newimg19 from "/images2/gallery/samarth photos/img139.webp";
import newimg20 from "/images2/gallery/samarth photos/img140.webp";
import newimg21 from "/images2/gallery/samarth photos/img141.webp";
import newimg22 from "/images2/gallery/samarth photos/img142.webp";
import newimg23 from "/images2/gallery/samarth photos/img143.webp";
import newimg24 from "/images2/gallery/samarth photos/img144.webp";
import newimg25 from "/images2/gallery/samarth photos/img145.webp";
import newimg26 from "/images2/gallery/samarth photos/img146.webp";
import newimg27 from "/images2/gallery/samarth photos/img147.webp";
import newimg28 from "/images2/gallery/samarth photos/img148.webp";
import newimg29 from "/images2/gallery/samarth photos/img149.webp";
import newimg30 from "/images2/gallery/samarth photos/img150.webp";
import newimg31 from "/images2/gallery/samarth photos/img151.webp";
import newimg32 from "/images2/gallery/samarth photos/img152.webp";
import newimg33 from "/images2/gallery/samarth photos/img153.webp";
import newimg34 from "/images2/gallery/samarth photos/img154.webp";
import newimg35 from "/images2/gallery/samarth photos/img155.webp";
import newimg36 from "/images2/gallery/samarth photos/img156.webp";
import newimg37 from "/images2/gallery/samarth photos/img157.webp";
import newimg38 from "/images2/gallery/samarth photos/img158.webp";
import newimg39 from "/images2/gallery/samarth photos/img159.webp";
import newimg40 from "/images2/gallery/samarth photos/img160.webp";
import newimg41 from "/images2/gallery/samarth photos/img161.webp";
import newimg42 from "/images2/gallery/samarth photos/img162.webp";
import newimg43 from "/images2/gallery/samarth photos/img163.webp";
import newimg44 from "/images2/gallery/samarth photos/img164.webp";
import newimg45 from "/images2/gallery/samarth photos/img165.webp";
import newimg46 from "/images2/gallery/samarth photos/img166.webp";
import newimg47 from "/images2/gallery/samarth photos/img167.webp";
import newimg48 from "/images2/gallery/samarth photos/img168.webp";
import newimg49 from "/images2/gallery/samarth photos/img169.webp";
import newimg50 from "/images2/gallery/samarth photos/img170.webp";
import newimg51 from "/images2/gallery/samarth photos/img171.webp";
import newimg52 from "/images2/gallery/samarth photos/img172.webp";
import newimg53 from "/images2/gallery/samarth photos/img173.webp";
import newimg54 from "/images2/gallery/samarth photos/img174.webp";
import newimg55 from "/images2/gallery/samarth photos/img175.webp";
import newimg56 from "/images2/gallery/samarth photos/img176.webp";
import newimg57 from "/images2/gallery/samarth photos/img178.webp";
import newimg58 from "/images2/gallery/samarth photos/img179.webp";
import newimg59 from "/images2/gallery/samarth photos/img180.webp";
import newimg60 from "/images2/gallery/samarth photos/img181.webp";
import newimg61 from "/images2/gallery/samarth photos/img182.webp";
import newimg62 from "/images2/gallery/samarth photos/img183.webp";
import newimg63 from "/images2/gallery/samarth photos/img184.webp";
import newimg64 from "/images2/gallery/samarth photos/img185.webp";
import newimg65 from "/images2/gallery/samarth photos/img186.webp";
import newimg66 from "/images2/gallery/samarth photos/img187.webp";
import newimg67 from "/images2/gallery/samarth photos/img188.webp";
import newimg68 from "/images2/gallery/samarth photos/img189.webp";
import newimg69 from "/images2/gallery/samarth photos/img190.webp";
import newimg70 from "/images2/gallery/samarth photos/img191.webp";
import newimg71 from "/images2/gallery/samarth photos/img192.webp";
import newimg72 from "/images2/gallery/samarth photos/img193.webp";
import newimg73 from "/images2/gallery/samarth photos/img194.webp";
import newimg74 from "/images2/gallery/samarth photos/img195.webp";
import newimg75 from "/images2/gallery/samarth photos/img196.webp";
import newimg76 from "/images2/gallery/samarth photos/img197.webp";
import newimg77 from "/images2/gallery/samarth photos/img198.webp";

import img1 from "/images2/gallery/1.webp";
import img2 from "/images2/gallery/2.webp";
import img3 from "/images2/gallery/3.webp";
import img4 from "/images2/gallery/4.webp";
import img5 from "/images2/gallery/5.webp";
import img6 from "/images2/gallery/6.webp";
import img7 from "/images2/gallery/7.webp";
import img8 from "/images2/gallery/9.webp";
import img9 from "/images2/gallery/10.webp";
import img10 from "/images2/gallery/14.webp";
import img11 from "/images2/gallery/12.webp";
import img12 from "/images2/gallery/13.webp";

import img13 from "/images2/gallery/27.webp";
import img14 from "/images2/gallery/28.webp";
import img15 from "/images2/gallery/29.webp";
import img16 from "/images2/gallery/30.webp";
import img17 from "/images2/gallery/32.webp";
import img18 from "/images2/gallery/26.webp";
import img19 from "/images2/gallery/21.webp";
import img20 from "/images2/gallery/53.webp";
import img21 from "/images2/gallery/g21.webp";
import img22 from "/images2/gallery/g22.webp";
import img23 from "/images2/gallery/g23.webp";
import img24 from "/images2/gallery/g23.webp";
import img25 from "/images2/gallery/g25.webp";
import img26 from "/images2/gallery/g26.webp";
import img27 from "/images2/gallery/g27.webp";
import img28 from "/images2/gallery/g28.webp";
import img29 from "/images2/gallery/g29.webp";
import img30 from "/images2/gallery/g30.webp";
import img31 from "/images2/gallery/g31.webp";
import img32 from "/images2/gallery/g32.webp";
import img33 from "/images2/gallery/g33.webp";
import img34 from "/images2/gallery/g34.webp";
import img35 from "/images2/gallery/g35.webp";
import img36 from "/images2/gallery/g36.webp";
import img37 from "/images2/gallery/g37.webp";
import img38 from "/images2/gallery/g38.webp";
import img39 from "/images2/gallery/g39.webp";
import img40 from "/images2/gallery/g40.webp";
import img41 from "/images2/gallery/g41.webp";
import img42 from "/images2/gallery/g42.webp";
import img43 from "/images2/gallery/g43.webp";
import img44 from "/images2/gallery/g44.webp";
import img45 from "/images2/gallery/g45.webp";
import img46 from "/images2/gallery/g46.webp";
import img47 from "/images2/gallery/g47.webp";
import img48 from "/images2/gallery/g48.webp";
import img49 from "/images2/gallery/g49.webp";
import img50 from "/images2/gallery/g50.webp";
import img51 from "/images2/gallery/g51.webp";
import img52 from "/images2/gallery/g52.webp";
import img53 from "/images2/gallery/g53.webp";
import img54 from "/images2/gallery/g54.webp";
import img55 from "/images2/gallery/g55.webp";
import img56 from "/images2/gallery/g56.webp";
import img57 from "/images2/gallery/g57.webp";
import img58 from "/images2/gallery/g58.webp";
import img59 from "/images2/gallery/g59.webp";
import img60 from "/images2/gallery/g60.webp";
import img61 from "/images2/gallery/g61.webp";
import img62 from "/images2/gallery/g62.webp";
import img63 from "/images2/gallery/g63.webp";
import img64 from "/images2/gallery/g64.webp";
import img65 from "/images2/gallery/g65.webp";
import img66 from "/images2/gallery/g66.webp";
import img67 from "/images2/gallery/g67.webp";
import img68 from "/images2/gallery/g68.webp";
import img69 from "/images2/gallery/g69.webp";
import img70 from "/images2/gallery/g70.webp";
import img71 from "/images2/gallery/g71.webp";
import img72 from "/images2/gallery/g72.webp";
import img73 from "/images2/gallery/g73.webp";
import img74 from "/images2/gallery/g74.webp";
import img75 from "/images2/gallery/g75.webp";
import img76 from "/images2/gallery/g76.webp";
import img77 from "/images2/gallery/g77.webp";
import img78 from "/images2/gallery/g78.webp";
import img79 from "/images2/gallery/g79.webp";
import img80 from "/images2/gallery/g80.webp";
import img81 from "/images2/gallery/g81.webp";
import img82 from "/images2/gallery/g82.webp";
import img83 from "/images2/gallery/g83.webp";
import img84 from "/images2/gallery/g84.webp";
import img85 from "/images2/gallery/g85.webp";
import img86 from "/images2/gallery/g86.webp";
import img87 from "/images2/gallery/g87.webp";
import img88 from "/images2/gallery/g88.webp";
import img89 from "/images2/gallery/eduhub-1.webp";
import img90 from "/images2/gallery/event-1.webp";
import img91 from "/images2/gallery/g89.webp";
import img92 from "/images2/gallery/g90.webp";
import img93 from "/images2/gallery/g91.webp";
import img94 from "/images2/gallery/g92.webp";
import img95 from "/images2/gallery/g93.webp";
import img96 from "/images2/gallery/g94.webp";
import img97 from "/images2/gallery/g95.webp";
import img98 from "/images2/gallery/g96.webp";
import img99 from "/images2/gallery/g97.webp";
import img100 from "/images2/gallery/g98.webp";
import img101 from "/images2/gallery/g99.webp";
import img102 from "/images2/gallery/g100.webp";
import img103 from "/images2/gallery/g101.webp";
import img104 from "/images2/gallery/g102.webp";
import img105 from "/images2/gallery/g103.webp";
import img106 from "/images2/gallery/g104.webp";
import img107 from "/images2/gallery/g105.webp";
import img108 from "/images2/gallery/g106.webp";
import img109 from "/images2/gallery/g107.webp";
import img110 from "/images2/gallery/g108.webp";
import img111 from "/images2/gallery/g109.webp";
import img112 from "/images2/gallery/g110.webp";
import img113 from "/images2/gallery/g111.webp";
import img114 from "/images2/gallery/g112.webp";
import img115 from "/images2/gallery/g113.webp";
import img116 from "/images2/gallery/g114.webp";
import img117 from "/images2/gallery/g115.webp";
import img118 from "/images2/gallery/g116.webp";
import img119 from "/images2/gallery/g117.webp";
import img120 from "/images2/gallery/g118.webp";

function Gallery(props) {
  const [displayedImages, setDisplayedImages] = useState([]);
  const lightGalleryRef = useRef(null);
  
  const breakpointColumnsObj = {
    default: 6,
    1800: 5,
    1500: 4,
    1200: 3,
    900: 3,
    700: 2,
    480: 2,
    320: 1
  };

  const galleryData = [
    // { id: 303,
    //   img: topImg3,
    //   alt:"Event@Samarth",
    // },
    // { id: 305,
    //   img: topImg5,
    //   alt:"Event@Samarth",
    // },
    { id: 201,
      img: newimg1,
      alt:"Event@Samarth",
    },
    { id: 202,
      img: newimg2,
      alt:"Event@Samarth",
    },
    { id: 203,
      img: newimg3,
      alt:"Event@Samarth",
    },
    { id: 204,
      img: newimg4,
      alt:"Event@Samarth",
    },
    { id: 205,
      img: newimg5,
      alt:"Event@Samarth",
    },
    { id: 206,
      img: newimg6,
      alt:"Event@Samarth",
    },
    { id: 207,
      img: newimg7,
      alt:"Event@Samarth",
    },
    { id: 208,
      img: newimg8,
      alt:"Event@Samarth",
    },
    { id: 209,
      img: newimg9,
      alt:"Event@Samarth",
    },
    { id: 210,
      img: newimg10,
      alt:"Event@Samarth",
    },
    { id: 211,
      img: newimg11,
      alt:"Event@Samarth",
    },
    { id: 212,
      img: newimg12,
      alt:"Event@Samarth",
    },
    { id: 213,
      img: newimg13,
      alt:"Event@Samarth",
    },
    { id: 214,
      img: newimg14,
      alt:"Event@Samarth",
    },
    { id: 215,
      img: newimg15,
      alt:"Event@Samarth",
    },
    { id: 216,
      img: newimg16,
      alt:"Event@Samarth",
    },
    { id: 217,
      img: newimg17,
      alt:"Event@Samarth",
    },
    { id: 218,
      img: newimg18,
      alt:"Event@Samarth",
    },
    { id: 219,
      img: newimg19,
      alt:"Event@Samarth",
    },
    { id: 220,
      img: newimg20,
      alt:"Event@Samarth",
    },
    { id: 221,
      img: newimg21,
      alt:"Event@Samarth",
    },
    { id: 222,
      img: newimg22,
      alt:"Event@Samarth",
    },
    { id: 223,
      img: newimg23,
      alt:"Event@Samarth",
    },
    { id: 224,
      img: newimg24,
      alt:"Event@Samarth",
    },
    { id: 225,
      img: newimg25,
      alt:"Event@Samarth",
    },
    { id: 226,
      img: newimg26,
      alt:"Event@Samarth",
    },
    { id: 227,
      img: newimg27,
      alt:"Event@Samarth",
    },
    { id: 228,
      img: newimg28,
      alt:"Event@Samarth",
    },
    { id: 229,
      img: newimg29,
      alt:"Event@Samarth",
    },
    { id: 230,
      img: newimg30,
      alt:"Event@Samarth",
    },
    { id: 231,
      img: newimg31,
      alt:"Event@Samarth",
    },
    { id: 232,
      img: newimg32,
      alt:"Event@Samarth",
    },
    { id: 233,
      img: newimg33,
      alt:"Event@Samarth",
    },
    { id: 234,
      img: newimg34,
      alt:"Event@Samarth",
    },
    { id: 235,
      img: newimg35,
      alt:"Event@Samarth",
    },
    { id: 236,
      img: newimg36,
      alt:"Event@Samarth",
    },
    { id: 237,
      img: newimg37,
      alt:"Event@Samarth",
    },
    { id: 238,
      img: newimg38,
      alt:"Event@Samarth",
    },
    { id: 239,
      img: newimg39,
      alt:"Event@Samarth",
    },
    { id: 240,
      img: newimg40,
      alt:"Event@Samarth",
    },
    { id: 241,
      img: newimg41,
      alt:"Event@Samarth",
    },
    { id: 242,
      img: newimg42,
      alt:"Event@Samarth",
    },
    { id: 243,
      img: newimg43,
      alt:"Event@Samarth",
    },
    { id: 244,
      img: newimg44,
      alt:"Event@Samarth",
    },
    { id: 245,
      img: newimg45,
      alt:"Event@Samarth",
    },
    { id: 246,
      img: newimg46,
      alt:"Event@Samarth",
    },
    { id: 247,
      img: newimg47,
      alt:"Event@Samarth",
    },
    { id: 248,
      img: newimg48,
      alt:"Event@Samarth",
    },
    { id: 249,
      img: newimg49,
      alt:"Event@Samarth",
    },
    { id: 250,
      img: newimg50,
      alt:"Event@Samarth",
    },
    { id: 251,
      img: newimg51,
      alt:"Event@Samarth",
    },
    { id: 252,
      img: newimg52,
      alt:"Event@Samarth",
    },
    { id: 253,
      img: newimg53,
      alt:"Event@Samarth",
    },
    { id: 254,
      img: newimg54,
      alt:"Event@Samarth",
    },
    { id: 255,
      img: newimg55,
      alt:"Event@Samarth",
    },
    { id: 256,
      img: newimg56,
      alt:"Event@Samarth",
    },
    { id: 257,
      img: newimg57,
      alt:"Event@Samarth",
    },
    { id: 258,
      img: newimg58,
      alt:"Event@Samarth",
    },
    { id: 259,
      img: newimg59,
      alt:"Event@Samarth",
    },
    { id: 260,
      img: newimg60,
      alt:"Event@Samarth",
    },
    { id: 261,
      img: newimg61,
      alt:"Event@Samarth",
    },
    { id: 262,
      img: newimg62,
      alt:"Event@Samarth",
    },
    { id: 263,
      img: newimg63,
      alt:"Event@Samarth",
    },
    { id: 264,
      img: newimg64,
      alt:"Event@Samarth",
    },
    { id: 265,
      img: newimg65,
      alt:"Event@Samarth",
    },
    { id: 266,
      img: newimg66,
      alt:"Event@Samarth",
    },
    { id: 267,
      img: newimg67,
      alt:"Event@Samarth",
    },
    { id: 268,
      img: newimg68,
      alt:"Event@Samarth",
    },
    { id: 269,
      img: newimg69,
      alt:"Event@Samarth",
    },
    { id: 270,
      img: newimg70,
      alt:"Event@Samarth",
    },
    { id: 271,
      img: newimg71,
      alt:"Event@Samarth",
    },
    { id: 272,
      img: newimg72,
      alt:"Event@Samarth",
    },
    { id: 273,
      img: newimg73,
      alt:"Event@Samarth",
    },
    { id: 274,
      img: newimg74,
      alt:"Event@Samarth",
    },
    { id: 275,
      img: newimg75,
      alt:"Event@Samarth",
    },
    { id: 276,
      img: newimg76,
      alt:"Event@Samarth",
    },
    { id: 277,
      img: newimg77,
      alt:"Event@Samarth",
    },
    { id: 1,
      img: img1,
      alt:"Event@Samarth",
    },
    {
      id: 2,
      img: img2,
      alt:"Event@Samarth",
    },
    {
      id: 3,
      img: img3,
      alt:"Event@Samarth",
    },
    {
      id: 4,
      img: img4,
      alt:"Event@Samarth",
    },
    {
      id: 5,
      img: img5,
      alt:"Event@Samarth",
    },
    {
      id: 6,
      img: img6,
      alt:"Event@Samarth",
    },
    {
      id: 7,
      img: img7,
      alt:"Event@Samarth",
    },
    {
      id: 8,
      img: img8,
      alt:"Event@Samarth",
    },
    {
      id: 9,
      img: img9,
      alt:"Event@Samarth",
    },
    {
      id: 10,
      img: img10,
      alt:"Event@Samarth",
    },
    {
      id: 11,
      img: img11,
      alt:"Event@Samarth",
    },
    {
      id: 12,
      img: img12,
      alt:"Event@Samarth",
    },
    {
      id: 13,
      img: img13,
      alt:"Event@Samarth",
    },
    {
      id: 14,
      img: img14,
      alt:"Event@Samarth",
    },
    {
      id: 15,
      img: img15,
      alt:"Event@Samarth",
    },
    {
      id: 16,
      img: img16,
      alt:"Event@Samarth",
    },
    {
      id: 17,
      img: img17,
      alt:"Event@Samarth",
    },
    {
      id: 18,
      img: img18,
      alt:"Event@Samarth",
    },
    {
      id: 19,
      img: img19,
      alt:"Event@Samarth",
    },
    {
      id: 20,
      img: img20,
      alt:"Event@Samarth",
    },
    {
      id: 21,
      img: img21,
      alt:"Event@Samarth",
    },
    {
      id: 22,
      img: img22,
      alt:"Event@Samarth",
    },
    {
      id: 23,
      img: img23,
      alt:"Event@Samarth",
    },
    {
      id: 24,
      img: img24,
      alt:"Event@Samarth",
    },
    {
      id: 25,
      img: img25,
      alt:"Event@Samarth",
    },
    {
      id: 26,
      img: img26,
      alt:"Event@Samarth",
    },
    {
      id: 27,
      img: img27,
      alt:"Event@Samarth",
    },
    {
      id: 28,
      img: img28,
      alt:"Event@Samarth",
    },
    {
      id: 29,
      img: img29,
      alt:"Event@Samarth",
    },
    {
      id: 30,
      img: img30,
      alt:"Event@Samarth",
    },
    {
      id: 31,
      img: img31,
      alt:"Event@Samarth",
    },
    {
      id: 32,
      img: img32,
      alt:"Event@Samarth",
    },
    {
      id: 33,
      img: img33,
      alt:"Event@Samarth",
    },
    {
      id: 34,
      img: img34,
      alt:"Event@Samarth",
    },
    {
      id: 35,
      img: img35,
      alt:"Event@Samarth",
    },
    {
      id: 36,
      img: img36,
      alt:"Event@Samarth",
    },
    {
      id: 37,
      img: img37,
      alt:"Event@Samarth",
    },
    {
      id: 38,
      img: img38,
      alt:"Event@Samarth",
    },
    {
      id: 39,
      img: img39,
      alt:"Event@Samarth",
    },
    {
      id: 40,
      img: img40,
      alt:"Event@Samarth",
    },
    {
      id: 41,
      img: img41,
      alt:"Event@Samarth",
    },
    {
      id: 42,
      img: img42,
      alt:"Event@Samarth",
    },
    {
      id: 43,
      img: img43,
      alt:"Event@Samarth",
    },
    {
      id: 44,
      img: img44,
      alt:"Event@Samarth",
    },
    {
      id: 45,
      img: img45,
      alt:"Event@Samarth",
    },
    {
      id: 46,
      img: img46,
      alt:"Event@Samarth",
    },
    {
      id: 47,
      img: img47,
      alt:"Event@Samarth",
    },
    {
      id: 48,
      img: img48,
      alt:"Event@Samarth",
    },
    {
      id: 49,
      img: img49,
      alt:"Event@Samarth",
    },
    {
      id: 50,
      img: img50,
      alt:"Event@Samarth",
    },
    {
      id: 51,
      img: img51,
      alt:"Event@Samarth",
    },

    {
      id: 52,
      img: img52,
      alt:"Event@Samarth",
    },
    {
      id: 53,
      img: img53,
      alt:"Event@Samarth",
    },
    {
      id: 54,
      img: img54,
      alt:"Event@Samarth",
    },
    {
      id: 55,
      img: img55,
      alt:"Event@Samarth",
    },
    {
      id: 56,
      img: img56,
      alt:"Event@Samarth",
    },
    {
      id: 57,
      img: img57,
      alt:"Event@Samarth",
    },
    {
      id: 58,
      img: img58,
      alt:"Event@Samarth",
    },
    {
      id: 59,
      img: img59,
      alt:"Event@Samarth",
    },
    {
      id: 60,
      img: img60,
      alt:"Event@Samarth",
    },
    {
      id: 61,
      img: img61,
      alt:"Event@Samarth",
    },
    {
      id: 62,
      img: img62,
      alt:"Event@Samarth",
    },
    {
      id: 63,
      img: img63,
      alt:"Event@Samarth",
    },
    {
      id: 64,
      img: img64,
      alt:"Event@Samarth",
    },
    {
      id: 65,
      img: img65,
      alt:"Event@Samarth",
    },
    {
      id: 66,
      img: img66,
      alt:"Event@Samarth",
    },
    {
      id: 67,
      img: img67,
      alt:"Event@Samarth",
    },
    {
      id: 68,
      img: img68,
      alt:"Event@Samarth",
    },
    {
      id: 69,
      img: img69,
      alt:"Event@Samarth",
    },
    {
      id: 70,
      img: img70,
      alt:"Event@Samarth",
    },
    {
      id: 71,
      img: img71,
      alt:"Event@Samarth",
    },
    {
      id: 72,
      img: img72,
      alt:"Event@Samarth",
    },
    {
      id: 73,
      img: img73,
      alt:"Event@Samarth",
    },
    {
      id: 74,
      img: img74,
      alt:"Event@Samarth",
    },
    {
      id: 75,
      img: img75,
      alt:"Event@Samarth",
    },
    {
      id: 76,
      img: img76,
      alt:"Event@Samarth",
    },
    {
      id: 77,
      img: img77,
      alt:"Event@Samarth",
    },
    {
      id: 78,
      img: img78,
      alt:"Event@Samarth",
    },
    {
      id: 79,
      img: img79,
      alt:"Event@Samarth",
    },
    {
      id: 80,
      img: img80,
      alt:"Event@Samarth",
    },
    {
      id: 81,
      img: img81,
      alt:"Event@Samarth",
    },
    {
      id: 82,
      img: img82,
      alt:"Event@Samarth",
    },
    {
      id: 83,
      img: img83,
      alt:"Event@Samarth",
    },
    {
      id: 84,
      img: img84,
      alt:"Event@Samarth",
    },
    {
      id: 85,
      img: img85,
      alt:"Event@Samarth",
    },
    {
      id: 86,
      img: img86,
      alt:"Event@Samarth",
    },
    {
      id: 87,
      img: img87,
      alt:"Event@Samarth",
    },
    {
      id: 88,
      img: img88,
      alt:"Event@Samarth",
    },
    {
      id: 89,
      img: img89,
      alt:"Eduhub@Samarth",
    },
    {
      id: 90,
      img: img90,
      alt:"Event@Samarth",
    },
    {
      id: 91,
      img: img91,
      alt:"Event@Samarth",
    },
    {
      id: 92,
      img: img92,
      alt:"Event@Samarth",
    },
    {
      id: 93,
      img: img93,
      alt:"Event@Samarth",
    },
    {
      id: 94,
      img: img94,
      alt:"Event@Samarth",
    },
    {
      id: 95,
      img: img95,
      alt:"Event@Samarth",
    },
    {
      id: 96,
      img: img96,
      alt:"Event@Samarth",
    },
    {
      id: 97,
      img: img97,
      alt:"Event@Samarth",
    },
    {
      id: 98,
      img: img98,
      alt:"Event@Samarth",
    },
    {
      id: 99,
      img: img99,
      alt:"Event@Samarth",
    },
    {
      id: 100,
      img: img100,
      alt:"Event@Samarth",
    },
    {
      id: 101,
      img: img101,
      alt:"Event@Samarth",
    },
    {
      id: 102,
      img: img102,
      alt:"Event@Samarth",
    },
    {
      id: 103,
      img: img103,
      alt:"Event@Samarth",
    },
    {
      id: 104,
      img: img104,
      alt:"Event@Samarth",
    },
    {
      id: 105,
      img: img105,
      alt:"Event@Samarth",
    },
    {
      id: 106,
      img: img106,
      alt:"Event@Samarth",
    },
    {
      id: 107,
      img: img107,
      alt:"Event@Samarth",
    },
    {
      id: 108,
      img: img108,
      alt:"Event@Samarth",
    },
    {
      id: 109,
      img: img109,
      alt:"Event@Samarth",
    },
    {
      id: 110,
      img: img110,
      alt:"Event@Samarth",
    },
    {
      id: 111,
      img: img111,
      alt:"Event@Samarth",
    },
    {
      id: 112,
      img: img112,
      alt:"Event@Samarth",
    },
    {
      id: 113,
      img: img113,
      alt:"Event@Samarth",
    },
    {
      id: 114,
      img: img114,
      alt:"Event@Samarth",
    },
    {
      id: 115,
      img: img115,
      alt:"Event@Samarth",
    },
    {
      id: 116,
      img: img116,
      alt:"Event@Samarth",
    },
    {
      id: 117,
      img: img117,
      alt:"Event@Samarth",
    },
    {
      id: 118,
      img: img118,
      alt:"Event@Samarth",
    },
    {
      id: 119,
      img: img119,
      alt:"Event@Samarth",
    },
    {
      id: 120,
      img: img120,
      alt:"Event@Samarth",
    },
  ];

  useEffect(() => {
    setDisplayedImages(galleryData);
  }, []);

  return (
    <div className="wrapper">
      <PageTitle title="Gallery" desc="Our Glorious Galleria" />

      <section className="participants" style={{ overflowX: 'hidden' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h3 className="heading"> Our Gallery </h3>
              </div>
            </div>

            <div className="image1 gallery-container">
              <LightGallery 
                plugins={[lgThumbnail, lgZoom]}
                ref={lightGalleryRef}
                speed={500}
                thumbnail={true}
                download={false}
                counter={true}
                closable={true}
                showZoomInOutIcons={true}
                actualSize={false}
                mode="lg-fade"
                dynamic={true}
                dynamicEl={displayedImages.map(item => ({
                  src: item.img,
                  thumb: item.img,
                  subHtml: `<h4>${item.alt}</h4>`
                }))}
              >
              </LightGallery>
              
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                enableResizableChildren
              >
                {displayedImages.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="gallery-item"
                    onClick={() => {
                      if (lightGalleryRef.current) {
                        lightGalleryRef.current.openGallery(index);
                      }
                    }}
                  >
                    <img
                      alt={item.alt}
                      src={item.img}
                      className="gallery-image fade-in"
                      style={{ marginBottom: "16px", borderRadius: "8px", maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
          .masonry-grid {
            display: flex;
            margin-left: -8px;
            width: auto;
            box-sizing: border-box;
            padding: 0 8px;
          }
          .masonry-grid_column {
            padding-left: 8px;
            padding-right: 8px;
            background-clip: padding-box;
            box-sizing: border-box;
          }
          .masonry-grid_column > a {
            display: block;
            margin-bottom: 16px;
            position: relative;
            width: 100%;
            transition: transform 0.3s ease;
          }
          .masonry-grid_column > a::before {
            content: '';
            display: block;
            padding-top: 8px;
          }
          .gallery-container {
            padding: 0 8px;
            margin: 0 -8px;
            box-sizing: border-box;
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
          }
          
          @media screen and (max-width: 768px) {
            .masonry-grid {
              padding: 0 4px;
            }
            .masonry-grid_column {
              padding-left: 4px;
              padding-right: 4px;
            }
            .masonry-grid_column > a {
              margin-bottom: 8px;
            }
            .gallery-image {
              border-radius: 6px;
            }
            .gallery-container {
              padding: 0 4px;
              margin: 0 -4px;
            }
          }

          @media screen and (max-width: 480px) {
            .masonry-grid_column > a {
              margin-bottom: 6px;
            }
            .gallery-image {
              border-radius: 4px;
            }
            .action-btn {
              padding: 8px 16px !important;
              font-size: 14px;
            }
          }

          @media screen and (max-width: 320px) {
            .masonry-grid {
              padding: 0 2px;
            }
            .masonry-grid_column {
              padding-left: 2px;
              padding-right: 2px;
            }
            .masonry-grid_column > a {
              margin-bottom: 4px;
            }
          }

          .participants {
            overflow-x: hidden;
            width: 100%;
          }

          @supports (-webkit-touch-callout: none) {
            /* CSS specific to iOS devices */
            .gallery-container {
              width: 100vw;
              -webkit-overflow-scrolling: touch;
            }
          }
          .gallery-image {
            display: block;
            margin-bottom: 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), filter 0.3s;
            max-width: 100%;
            height: auto;
            opacity: 0;
            filter: blur(8px) grayscale(30%);
            animation: fadeIn 0.8s ease forwards;
            cursor: pointer;
          }
          .gallery-item {
            display: block;
            text-decoration: none;
            outline: none;
          }
          .gallery-item:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
          }
          .masonry-lightgallery {
            width: 100%;
          }
          .gallery-image.fade-in {
            animation: fadeIn 0.8s ease forwards;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
              filter: blur(0) grayscale(0);
            }
          }
          .gallery-image:hover {
            transform: scale(1.07) rotate(-1deg);
            box-shadow: 0 8px 32px rgba(0,0,0,0.18);
            filter: brightness(1.08) saturate(1.2);
            z-index: 2;
          }
          @media (max-width: 767px) {
            .gallery-container {
              text-align: center;
              width: 100%;
              display: block;
              margin: auto;
              overflow-x: hidden;
              overflow-y: auto;
            }
            .gallery-container::-webkit-scrollbar {
              display: none;
              overflow-x: hidden;
            }
            .gallery-image {
              max-width: 100%;
              height: auto;
            }
            .image1 {
              height: auto;
            }
          }
        `}</style>
    </div>
  );
}

export default Gallery;
