import React from 'react';
import img from '../../images/notifications.svg'
import ImageLightbox from './Lightbox';

const NotificationsFlow = () => {
    return <ImageLightbox src={img.src} alt="Notification flow for Scenario Protocol" className="w-full" width={1200} height={1200} />
};

export default NotificationsFlow;