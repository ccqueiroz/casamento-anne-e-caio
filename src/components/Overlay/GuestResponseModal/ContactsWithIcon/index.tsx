import { Flex, FlexProps, Icon, IconProps } from '@chakra-ui/react';
import { Token } from '@chakra-ui/styled-system/src/utils/types';
import * as CSS from '@chakra-ui/styled-system/node_modules/csstype';
import React from 'react';
import {FaWhatsapp} from 'react-icons/fa'
import { TextComponent } from '../../../TextComponent';

interface ContactsWithIcon extends FlexProps {
    iconsProps?: IconProps
    name: string
    textFontSize?: Token<CSS.Property.FontSize | number, "fontSizes">
}

const ContactsWithIcon: React.FC<ContactsWithIcon> = ({
    iconsProps,
    name,
    textFontSize,
    ...rest
}) => {

    return (
        <Flex {...rest} alignItems="center">
            <Icon as={FaWhatsapp} color="#34af23"{...iconsProps}/>
            <TextComponent
                text={name}
                fontSize={textFontSize}
                textIndent={0}
            />
        </Flex>
    );
}

export { ContactsWithIcon }