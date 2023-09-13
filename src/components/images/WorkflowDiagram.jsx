import React from 'react';
import workflowImg from '../../images/snr_workflow.png'
import ImageLightbox from './Lightbox';

const WorkflowDiagram = () => {
    return <ImageLightbox src={workflowImg.src} alt="Scenario Workflow" width={900} height={1200} />
};

export default WorkflowDiagram;