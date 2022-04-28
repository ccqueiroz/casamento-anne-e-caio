import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { BuffetPresentation } from './BuffetPresentation';
import { HeaderFrontDesk } from './HeaderFrontDesk';
import { MapBuffet } from './MapBuffet';

const FrontDesk: React.FC = () => {

    return (
        <WrapperSections padding = "0.5% 5% 0%">
            <HeaderFrontDesk />
            <BuffetPresentation />
            <MapBuffet />
            <ImagesFooterSection
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}

export { FrontDesk }