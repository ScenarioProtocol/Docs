import React from 'react';
import img from '../../images/snr_diagram.png'
import ImageLightbox from './Lightbox';

const WorkflowDiagram = () => {
    return <ImageLightbox src={img.src} alt="Scenario Diagram" className="w-full" width={1500} height={1500} />
};

export default WorkflowDiagram;