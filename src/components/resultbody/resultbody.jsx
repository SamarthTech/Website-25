import React, { useState } from 'react';
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
                      <img src={item.avt || img} alt="Organizer" />
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
                        backdropFilter: 'none',
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

        {/* Popup Overlay (complicated things start from here lol :)*/}
        {activeResult && (
          <div
            className="winner-popup"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(22, 18, 75, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
            }}
          >
            <div
              className="popup-card"
              style={{
                background:'#0e1122',
                borderRadius: '14px',
                padding: '35px',
                width: '90%',
                maxWidth: '500px',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 0 40px rgba(255,255,255,0.1)',
              }}
            >
              <h3 style={{ marginBottom: '15px', color: 'white' }}>
                {activeResult.title}
              </h3>
              <p style={{ color: '#ddd', marginBottom: '10px' }}>Winners</p>

              <div
                style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem',
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
                backdropFilter: 'blur(30px)',   
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
              <p
                style={{
                color: '#d19cff',
                margin: '0 0 4px 0',
                fontWeight: '600',
                }}
              >
                {winner.position}
              </p>
              <p
                style={{
                color: '#fff',
                margin: 0,
                fontWeight: '400',
                }}
              >
                {winner.name}
              </p>
            </div>
          ))
          ) : (
            <p style={{ color: '#ddd' }}>No winners data available yet.</p>
          )}
        </div>
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
                  transition: '0.3s',
                }}
                onMouseOver={(e) => (e.target.style.color = '#d19cff')}
                onMouseOut={(e) => (e.target.style.color = 'white')}
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
