import React, { useState,useEffect} from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import PageTitle from "../components/pagetitle/PageTitle_Explore";
import { Link } from "react-router-dom";

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
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

  const galleryData = [
    
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

    const startIndex = 0;
    const endIndex = Math.min(startIndex + itemsPerPage, galleryData.length);
    const initialImages = galleryData.slice(startIndex, endIndex);

    setTotalImages(galleryData.length);
    setDisplayedImages(initialImages);
  }, []);

  const handleViewMore = () => {
    const nextPageStartIndex = displayedImages.length;
    const nextPageEndIndex = Math.min(nextPageStartIndex + itemsPerPage, totalImages);
    const nextPageImages = galleryData.slice(nextPageStartIndex, nextPageEndIndex);

    setDisplayedImages((prevImages) => [...prevImages, ...nextPageImages]);
    setCurrentPage((prevPage) => (prevPage % Math.ceil(totalImages / itemsPerPage)) + 1);

    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
      galleryContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper">
      <PageTitle title="Gallery" desc="Our Glorious Galleria" />

      <section className="participants">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h3 className="heading"> Our Gallery </h3>
              </div>
            </div>

            <div className="image1 gallery-container">
              <LightGallery plugins={[lgThumbnail, lgZoom]}>
                {displayedImages.map((item) => (
                  <a key={item.id} href={item.img}>
                    <img
                      alt={item.alt}
                      src={item.img}
                      data-src={item.img}
                      className="lg-object"
                    />
                  </a>
                ))}
              </LightGallery>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          {totalImages > itemsPerPage && (
            <button className="action-btn to" onClick={handleViewMore} style={{ width: 'auto' }}>
              <span style={{ padding: '15px 24px' }}>View More</span>
            </button>
          )}
        </div>
      </section>
      <style>
        {`
          
         .view-more-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
          }
          @media (max-width: 767px) {
            .gallery-container {
              text-align:center;
              width:100%;
              display:block;
              margin:auto;
              overflow-x:hidden;
              overflow-y: auto;
            }
            .gallery-container::-webkit-scrollbar {
              display: none;
              overflow-x:hidden;
          }
            .gallery-image {
              width:300px;
              height:300px;
            }
            .image1{
              height:auto;
            }
            .image1 img{
              width:300px;
              height:250px;
              margin-right:0px;
            }
          }
        `}</style>
    </div>
  );
}

export default Gallery;
