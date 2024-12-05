import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import img from '/images2/new/whitelogo.webp';

Project9.propTypes = {
  data: PropTypes.array,
};

function Project9(props) {
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
                <div className="card-title">
                  <Link to="#" className="h5">
                    {item.title}
                  </Link>
                </div>
                <div className="meta-info">
                  <div className="author">
                    <div className="avatar">
                      <img src={img} alt="Cyfonii" />
                    </div>
                    <div className="info">
                      <span>Organized By</span>
                      <Link to="#" className="h6">
                        {item.ownedBy}
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
                    <span className="number-like"> {item.likes}</span>
                  </Link>
                </div>
                {item.link && (
                  <div className="card-bottom style-explode">
                    <div className="button-place-bid">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="sc-button">
                        <span>Register</span>
                      </a>
                    </div>
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

export default Project9;
