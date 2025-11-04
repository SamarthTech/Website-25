import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import img from '/images2/new/whitelogo.webp';

Project8.propTypes = {
  data: PropTypes.array,
};

function Project8(props) {
  const { data } = props;
  const [likedItems, setLikedItems] = useState([]);

  const handleLikeClick = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter((id) => id !== itemId));
    } else {
      setLikedItems([...likedItems, itemId]);
    }
  };

  return (
    <section className="nft">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter">
              {/* Removed the "All categories" box */}
            </div>
          </div>

          {data.map((item) => (
            <div key={item.id} className="col-xl-3 col-md-6">
              <div className="nft-item">
                <div className="card-media">
                  <Link to="#">
                    <img src={item.img} alt="Cyfonii" />
                  </Link>
                </div>
                <div className="card-title" style={{ textAlign: 'center' }}>
                  <Link to="#" className="h5">
                    {item.title}
                  </Link>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={item.avt || img} alt="Cyfonii" />
                    </div>
                    <div className="info">
                      <span>Organized By</span>
                      <Link to="#" className="h6">
                        {item.ownedBy || item.name || 'Team Samarth'}
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className={`wishlist-button heart ${likedItems.includes(item.id) ? 'red' : ''}`}
                    onClick={() => handleLikeClick(item.id)}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill={likedItems.includes(item.id) ? 'red' : 'none'}
                      xmlns="http://www.w3.org/2000/svg"
                      stroke={likedItems.includes(item.id) ? 'red' : 'white'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z"
                        stroke={likedItems.includes(item.id) ? 'red' : 'white'}
                      />
                    </svg>
                    {item.likes && <span className="number-like"> {item.likes}</span>}
                  </Link>
                </div>
                {/* Registration Button Logic */}
                {(item.link || item.registrationLink || item.isLive !== undefined) && (
                  <div className="card-bottom style-explode flex-wrap">
                    {/* Check if item has isLive property (from dataCard) */}
                    {item.isLive !== undefined ? (
                      // Logic for dataCard items with isLive property
                      item.isLive && item.registrationLink ? (
                        // Active registration
                        <div className="button-place-bid" style={{ width: '100%' }}>
                          <a 
                            href={item.registrationLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="action-btn"
                            style={{ 
                              width: '100%', 
                              justifyContent: 'center',
                              background: 'transparent',
                              border: 'none',
                              padding: '0',
                              backdropFilter: 'none'
                            }}
                          >
                            <span>Register Now</span>
                          </a>
                        </div>
                      ) : item.comingSoon ? (
                        // Coming Soon
                        <div className="button-place-bid" style={{ width: '100%' }}>
                          <div 
                            className="action-btn" 
                            style={{ 
                              cursor: 'default',
                              width: '100%',
                              justifyContent: 'center',
                              background: 'transparent',
                              border: 'none',
                              padding: '0',
                              backdropFilter: 'none'
                            }}
                          >
                            <span style={{ 
                              background: 'linear-gradient(264.28deg, #FFA500 -38.2%, #FF8C00 103.12%)',
                              cursor: 'default'
                            }}>
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Registration Closed
                        <div className="button-place-bid" style={{ width: '100%' }}>
                          <div 
                            className="action-btn" 
                            style={{ 
                              cursor: 'not-allowed', 
                              opacity: '0.7',
                              width: '100%',
                              justifyContent: 'center',
                              background: 'transparent',
                              border: 'none',
                              padding: '0',
                              backdropFilter: 'none'
                            }}
                          >
                            <span style={{ 
                              background: 'linear-gradient(264.28deg, #6B7280 -38.2%, #4B5563 103.12%)',
                              cursor: 'not-allowed'
                            }}>
                              Registration Closed
                            </span>
                          </div>
                        </div>
                      )
                    ) : (
                      // Original logic for other items (dataItem6, etc.)
                      <>
                        <div className={`button-place-bid ${item.rulebook ? 'me-3' : ''}`}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="sc-button">
                            <span>Register</span>
                          </a>
                        </div>
                        {item.rulebook && (
                          <div className="button-place-bid me-auto">
                            <a href={item.rulebook} target="_blank" rel="noopener noreferrer" className="sc-button">
                              <span>Rulebook</span>
                            </a>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project8;
