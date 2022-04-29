import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { ModalFileProps } from '..';
import { TextComponent } from '../../../TextComponent';
import { ContactsWithIcon } from '../ContactsWithIcon';

const ContentModalCodeDontGo: React.FC<Pick<ModalFileProps, 'widthScreen'>> = ({ widthScreen }) => {
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
                text={`É uma pena que você não possa estar conosco durante este dia tão especial.`}
                fontSize={{
                    base: "md",
                    md: "lg"
                }}
                letterSpacing={{
                    base: "0.03rem",
                    md: "0.2rem"
                }}
                textIndent={widthScreen && widthScreen < 500 ? 25 : 50}
            />
            <TextComponent
                text="Agradecemos o preenchimento do formulário."
                fontSize={{
                    base: "md",
                    md: "lg"
                }}
                letterSpacing={{
                    base: "0.03rem",
                    md: "0.2rem"
                }}
            />
            <Divider bg="text.secondary" height="0.2px" margin="0.8rem"/>
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

export { ContentModalCodeDontGo }