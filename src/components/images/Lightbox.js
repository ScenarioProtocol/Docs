import Image from 'next/image';
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageLightbox = ({
    src,
    height,
    width,
    ...props
}) => {

    const [open, setOpen] = useState(false)

    return (
        <>
        <Lightbox 
            slides={[{ src, height, width }]}
            open={open}
            close={() => setOpen(false)}
            controller={{ closeOnBackdropClick: true }}
            className='bg-background/80 backdrop-blur-sm'
            styles={{ 
                container: {
                    backgroundColor: 'rgba(9, 9, 11, 0.6)',
                    '--tw-backdrop-blur': 'blur(4px);',
                    WebkitBackdropFilter: 'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);',
                    backdropFilter: 'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);'
                } 
            }}
            render={{ 
                buttonNext: null, 
                buttonPrev: null,
                iconNext: () => <span></span>,
                iconPrev: () => <span></span>
            }}
        />
        <div className='flex justify-center items-center relative cursor-pointer' onClick={() => setOpen(!open)}>
            <Image
                src={src}
                width={width || 600}
                height={height || 600}
                className='h-auto w-auto max-w-full'
                {...props}
            />
            <div className='absolute group flex justify-center items-center inset-0 transition-all duration-200 bg-transparent hover:bg-black/30'/>
        </div>
        </>
    );
};

export default ImageLightbox;