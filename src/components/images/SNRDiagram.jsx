import React from 'react';
import img from '../../images/snr_diagram.png'
import ImageLightbox from './Lightbox';

const WorkflowDiagram = () => {
    return <ImageLightbox src={img.src} alt="Scenario Diagram" width={1200} height={800} />
};

export default WorkflowDiagram;