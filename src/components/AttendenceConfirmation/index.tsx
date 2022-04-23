import React from 'react';
import { WrapperSections } from '../WrapperSections';
import { FormAttendenceConfirmation } from './FormAttendenceConfirmation';
import { HeaderAttendenceConfirmation } from './HeaderAttendenceConf';

const AttendenceConfirmation: React.FC = () => {

    return (
        <WrapperSections>
            <HeaderAttendenceConfirmation />
            <FormAttendenceConfirmation/>
        </WrapperSections>
    );
}

export { AttendenceConfirmation }