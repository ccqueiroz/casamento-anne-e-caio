import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { ContentGifftList } from './ContentGifftList';
import { HeaderGifftList } from './HeaderGifftList';

const GifftList: React.FC = () => {
    return (
        <WrapperSections id="gifftList" padding={{base: "0.5% 4.5% 0", md: "0.5% 2% 0", lg: "0.5% 1% 0"}}>
            <HeaderGifftList />
            <ContentGifftList />
            <ImagesFooterSection
                width={{ base: "60%", lg: "auto"}}
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}
export { GifftList }