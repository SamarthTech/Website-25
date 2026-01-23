import React, { useState } from 'react';
import './notification.scss';

function Notification({ message, link, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

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
        </div>
    );
}

export default Notification;
