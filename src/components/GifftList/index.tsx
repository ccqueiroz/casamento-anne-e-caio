import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { ContentGifftList } from './ContentGifftList';
import { HeaderGifftList } from './HeaderGifftList';

const GifftList: React.FC = () => {
    return (
        <WrapperSections>
            <HeaderGifftList />
            <ContentGifftList />
            <ImagesFooterSection
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}
export { GifftList }