import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img from '/images2/new/whitelogo.webp';

Resultbody.propTypes = {
  data: PropTypes.array,
};

function Resultbody(props) {
  const { data } = props;
  const [activeResult, setActiveResult] = useState(null);

  const handleOpenResult = (item) => {
    setActiveResult(item);
  };

  const handleCloseResult = () => {
    setActiveResult(null);
  };

  useEffect(() => {
    if (activeResult) {
      document.body.style.overflow = 'hidden'; // disable background scroll
    } else {
      document.body.style.overflow = 'auto'; // re-enable scroll
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeResult]);

  return (
    <section className="nft">
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item) => (
            <div key={item.id} className="col-xl-3 col-md-6">
              <div className="nft-item">
                <div className="card-media">
                  <Link to="#">
                    <img src={item.img} alt={item.title} />
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
                      <img src={img} alt="Organizer" />
                    </div>
                    <div className="info">
                      <span>Organized By</span>
                      <Link to="#" className="h6">
                        {item.name || 'Team Samarth'}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card-bottom style-explode flex-wrap">
                  <div className="button-place-bid" style={{ width: '100%' }}>
                    <div
                      onClick={() => handleOpenResult(item)}
                      className="action-btn"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        background: 'transparent',
                        border: 'none',
                        padding: '0',
                        cursor: 'pointer',
                      }}
                    >
                      <span>Check Out the Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popup depending on type */}
        {activeResult && (
          <div
            onClick={handleCloseResult}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(22, 18, 75, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',     // <-- popup will start from top
              paddingTop: '100px', 
              zIndex: 999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()} 
              style={{
                background: '#0e1122',
                borderRadius: '14px',
                padding: '35px',
                width: '90%',
                maxWidth: '600px',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 0 40px rgba(255,255,255,0.1)',
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>{activeResult.title}</h3>
              <p style={{ color: '#ddd', marginBottom: '15px' }}>Winners</p>

              {/* TYPE 1 → Simple Style */}
              {activeResult.type === 1 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                  }}
                >
                  {activeResult.winners?.length > 0 ? (
                    activeResult.winners.map((winner, index) => (
                      <div
                        key={index}
                        style={{
                          width: '180px',
                          height: '69px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '14px',
                          color: '#fff',
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(30px)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                        }}
                      >
                        <p style={{ color: '#d19cff', margin: 0 }}>
                          {winner.position}
                        </p>
                        <p style={{ margin: 0 }}>{winner.name}</p>
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#ddd' }}>No winners data available yet.</p>
                  )}
                </div>
              )}

              {/* TYPE 2 → Detailed Style */}
              {activeResult.type === 2 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.7rem',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    paddingRight: '5px',
                  }}
                >
                  {activeResult.winners?.length > 0 ? (
                    activeResult.winners.map((winner, index) => (
                      <div
                        key={index}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          backdropFilter: 'blur(18px)',
                          textAlign: 'left',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: '#d19cff',
                            fontWeight: '600',
                            fontSize: '15px',
                          }}
                        >
                          {winner.position}
                        </p>

                        <p
                          style={{
                            margin: '4px 0 0',
                            fontSize: '16px',
                            fontWeight: '600',
                          }}
                        >
                          Team: {winner.name}
                        </p>

                        <p
                          style={{
                            margin: '3px 0 0',
                            color: '#ccc',
                            fontSize: '14px',
                          }}
                        >
                          College: {winner.college}
                        </p>

                        
                      </div>
                    ))
                  ) : (
                    <p style={{ color: '#ddd' }}>No winners data available yet.</p>
                  )}
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={handleCloseResult}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '22px',
                  cursor: 'pointer',
                }}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Resultbody;
