import React, { useState, useEffect } from 'react';
import './notification.scss';

function Notification({ message, link, onClose }) {
    const [isVisible, setIsVisible] = useState(true);
    const [currentRegistration, setCurrentRegistration] = useState(null);
    const [lastEventIndex, setLastEventIndex] = useState(-1);

    const events = [
        'Apti Acumen',
        'Brain Blitz',
        'Combo Package',
        'Echoes of History',
        'Innovathon',
        'Instant Ink',
        'Matrix Of Mock',
        'Model United States',
        'Reimagine Book Cover',
        'Sherlock Escape',
        'Shot A Reel',
        'Snap Flicks',
        'Suit and Strat',
        'Triathlon'
    ];

    useEffect(() => {
        let timeoutId;
        
        const showRandomRegistration = () => {
            let randomIndex;
            // Ensure we don't show the same event twice in a row
            do {
                randomIndex = Math.floor(Math.random() * events.length);
            } while (randomIndex === lastEventIndex && events.length > 1);
            
            setLastEventIndex(randomIndex);
            const randomEvent = events[randomIndex];
            setCurrentRegistration({ event: randomEvent });

            // Hide after 5 seconds
            timeoutId = setTimeout(() => {
                setCurrentRegistration(null);
                // Wait random time between 0 to 90 seconds (1.5 minutes) before showing next registration
                const randomDelay = Math.floor(Math.random() * 90000);
                timeoutId = setTimeout(showRandomRegistration, randomDelay);
            }, 5000);
        };

        // Show first registration after initial animation (2s)
        const initialTimeout = setTimeout(showRandomRegistration, 2000);

        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(timeoutId);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    return (
        <div className="notification-banner">
            <div className="notification-content">
                <span className="notification-icon">🎉</span>
                <span className="notification-message">{message}</span>
                {link && (
                    <a href={link} className="notification-link">
                        Register Now →
                    </a>
                )}
                <button className="notification-close" onClick={handleClose}>
                    ×
                </button>
            </div>
            
            {currentRegistration && (
                <div className="registration-alert">
                    <span className="alert-icon">🔥</span>
                    <span className="alert-text">
                        Someone just registered for{' '}
                        <strong>{currentRegistration.event}</strong>!
                    </span>
                </div>
            )}
        </div>
    );
}

export default Notification;
