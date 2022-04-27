import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { ModalFileProps } from '..';
import { TextComponent } from '../../../TextComponent';
import { ContactsWithIcon } from '../ContactsWithIcon';

const ContentModalCode208: React.FC = () => {
    const iconsProps = {
        width: {
            base: "1rem",
            md:"1.3rem"
            
        },
        height: {
            base: "1rem",
            md: "1.3rem"
        },
        marginRight: {
            base: "10px",
            md: "15px"
        }
    }
    
    return (
        <Box mb="0.5rem">
            <TextComponent
                text={`Sua presença já foi confirmada em nosso casamento.`}
                fontSize={{
                    base: "md",
                    md: "lg"
                }}
            />
            <TextComponent
                text="Aguardamos você lá!"
                fontSize={{
                    base: "md",
                    md: "lg"
                }}
            />
            <Divider bg="text.secondary" height="0.2px" margin="0.5rem"/>
            <Box width="100%">
                <ContactsWithIcon
                    name="85 9 8894-1319 - Anne Queiroz"
                    iconsProps={iconsProps}
                    textFontSize={{
                        base: '0.7rem',
                        md: "1.0rem"
                    }}
                />
                <ContactsWithIcon
                    name="85 9 9973-7179 - Caio Queiroz"
                    iconsProps={iconsProps}
                    textFontSize={{
                        base: '0.7rem',
                        md: "1.0rem"
                    }}
                />
            </Box>
        </Box>
    );
};

export { ContentModalCode208 }