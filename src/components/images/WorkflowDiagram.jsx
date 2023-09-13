import React from 'react';
import workflowImg from '../../images/snr_workflow.jpg'
import ImageLightbox from './Lightbox';

const WorkflowDiagram = () => {
    return <ImageLightbox src={workflowImg.src} alt="Scenario Workflow" width={1080} height={1080} />
};

export default WorkflowDiagram;