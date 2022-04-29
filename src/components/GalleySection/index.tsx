import React from 'react';
import { Gallery } from '../Gallery';
import { WrapperSections } from '../WrapperSections';
import { photos } from './photos';

const GallerySection: React.FC = () => {

    return (
        <WrapperSections
            id="anneecaio"
            padding={{
                base: "5% 10% 2%",
                lg:"2% 15% 1.5%"
            }}
            height="auto"
        >
            <Gallery photos={photos}/>
        </WrapperSections>
    );
}

export { GallerySection }