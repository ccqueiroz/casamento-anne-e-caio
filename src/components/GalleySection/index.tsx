import React from 'react';
import { Gallery } from '../Gallery';
import { WrapperSections } from '../WrapperSections';
import { photos } from './photos';

const GallerySection: React.FC = () => {

    return (
        <WrapperSections
            padding={{
                base: "3% 10% 3%",
                lg:"3% 15% 3%"
            }}
            height="auto"
        >
            <Gallery photos={photos}/>
        </WrapperSections>
    );
}

export { GallerySection }