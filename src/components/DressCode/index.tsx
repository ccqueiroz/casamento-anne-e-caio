import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { DressCodeInformations } from './DressCodeInformations';
import { HeaderDressCode } from './HeaderDressCode';

const DressCode: React.FC = () => {

    return (
        <WrapperSections
            as="section"
            width="100vw"
            height="auto"
            padding="0.5% 5% 0"
        >
            <HeaderDressCode />
            <DressCodeInformations />
            <ImagesFooterSection
                srcImage="/images/layout/conchas-top.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}

export { DressCode }