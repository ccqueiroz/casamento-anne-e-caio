import React from 'react';
import { Gallery } from '../Gallery';
import { WrapperSections } from '../WrapperSections';
import { photos } from './photos';

const GallerySection: React.FC = () => {

    return (
        <WrapperSections
            padding={{
                base: "2% 10% 2%",
                lg:"1% 15% 1.5%"
            }}
            height="auto"
        >
            <Gallery photos={photos}/>
        </WrapperSections>
    );
}

export { GallerySection }