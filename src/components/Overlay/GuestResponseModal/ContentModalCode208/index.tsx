import { Box, Divider } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { ModalFileProps } from '..';
import { TextComponent } from '../../../TextComponent';
import { ContactsWithIcon } from '../ContactsWithIcon';

const ContentModalCode208: React.FC<Pick<ModalFileProps, 'widthScreen'  | 'guest'>> = ({ widthScreen, guest }) => {
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
    const renderPresenceText = useMemo(() => {
        if (guest && guest.presenceAtTheEvent === 'Y') {
            return {
                mainText: 'Sua presença já foi confirmada em nossa lista casamento.',
                text: 'Aguardamos você lá!'
            };
        } else {
            return {
                mainText: 'Sua resposta de não poder comparecer ao nosso casamento já está registrada em nossa lista.',
                text: 'Agradecemos o preenchimento do formulário.'
            }
        }
    }, [guest]);

    return (
        <Box mb="0.5rem">
            <TextComponent
                text={renderPresenceText.mainText}
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
                text={renderPresenceText.text}
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