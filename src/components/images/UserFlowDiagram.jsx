import React from 'react';
import img from '../../images/userflow.png'
import ImageLightbox from './Lightbox';

const UserFlowDiagram = () => {
    return <ImageLightbox src={img.src} alt="User and notification flow for Scenario Protocol" className="w-full" width={1200} height={1200} />
};

export default UserFlowDiagram;