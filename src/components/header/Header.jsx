import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import menus from "../../pages/menu";
import logo from "/samarthw.webp";
import "./styles.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [exploreSubMenuActive, setExploreSubMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleDropdown = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleExploreSubMenu = () => {
    setExploreSubMenuActive(!exploreSubMenuActive);
  };

  const location = useLocation();

  const handleCloseMenu = () => {
    setMenuActive(false);
    setActiveIndex(null);
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
      <div className="container big">
        <div className="row">
          <div className="col-12">
            <div className="header__body">
              <div className="header__logo">
                <Link to="/">
                  <img
                    id="site-logo"
                    className="custom-logo"
                    src={logo}
                    alt="logo"
                  />
                </Link>
                <Link to="/" className="logo-text" style={{ textDecoration: 'none' }}>
                  SAMARTH
                </Link>
              </div>

              <div className="header__right">
                <nav
                  id="main-nav"
                  className={`main-nav ${menuActive ? "active" : ""}`}
                  // style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <ul id="menu-primary-menu" className="menu">
                  {/* <ul id="menu-primary-menu" className="menu" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'center', padding: 0, margin: 0 }}> */}
                    {menus.map((data, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleDropdown(idx)}
                        className={`menu-item ${data.namesub ? "menu-item-has-children" : ""
                          } ${activeIndex === idx ? "active" : ""}`}
                      id={`${data.name==='Study Material' ? 'study-relative':''}`}>
                        <div className={`explore ${data.name === "Explore" ? 'flex-column':''}`}>
                          {data.name === "Explore" ? (
                            <div className="d-flex flex-row">
                            <a onClick={toggleExploreSubMenu}>
                              {data.name}
                              
                            </a>
                            {data.namesub &&
                              data.namesub.some((sub) => sub.isNew) && (
                                <span className="new-text">NEW</span>
                              )}
                            </div>
                          ) : data.external ? (
                            <a href={data.external} target="_blank" rel="noopener noreferrer">
                              {data.name}
                            </a>
                          ) : (
                            <Link to={data.links} onClick={handleCloseMenu}>
                              {data.name}
                            </Link>
                          )}
                          {data.namesub && (
                            <ul
                              className={`sub-menu ${activeIndex === idx && exploreSubMenuActive ? "active" : ""
                                }`}
                            >
                              {data.namesub.map((submenu) => (
                                <li key={submenu.id} className="menu-item">
                                  <NavLink to={submenu.links} onClick={handleCloseMenu}>
                                    {submenu.sub}
                                    {submenu.isNew ? <span className="new-text my-auto">NEW</span> : <></>}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                           {data.isNew &&
                            <span className="new-text">NEW</span>
                          }
                        </div>
                        
                      </li>
                    ))}
                  </ul>
                </nav>
                <div
                  className={`mobile-button ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <span></span>
                </div>
              </div>

              <div className="header__action">
                <Link to="#" className="search-btn">
                  {/* Search icon SVG */}
                </Link>
                <Link to="/contact" className="action-btn">
                  <span>Join Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
