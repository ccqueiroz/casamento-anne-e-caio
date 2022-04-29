import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { BuffetPresentation } from './BuffetPresentation';
import { HeaderFrontDesk } from './HeaderFrontDesk';
import { MapBuffet } from './MapBuffet';

const FrontDesk: React.FC = () => {

    return (
        <WrapperSections id="frontDesk" padding ="0.5% 5% 0%">
            <HeaderFrontDesk />
            <BuffetPresentation />
            <MapBuffet />
            <ImagesFooterSection
                width={{ base: "60%", lg: "auto"}}
                srcImage="/images/layout/concha-titulo.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}

export { FrontDesk }