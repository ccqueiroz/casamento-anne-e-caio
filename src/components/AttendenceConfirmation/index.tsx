import React from 'react';
import { ImagesFooterSection } from '../ImagesFooterSection';
import { WrapperSections } from '../WrapperSections';
import { FormAttendenceConfirmation } from './FormAttendenceConfirmation';
import { HeaderAttendenceConfirmation } from './HeaderAttendenceConf';

const AttendenceConfirmation: React.FC = () => {

    return (
        <WrapperSections>
            <HeaderAttendenceConfirmation />
            <FormAttendenceConfirmation />
            <ImagesFooterSection
                srcImage="/images/layout/conchas-top.png"
                altimage="imagens de conchas"
            />
        </WrapperSections>
    );
}

export { AttendenceConfirmation }