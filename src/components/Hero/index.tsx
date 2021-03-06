import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import Menu  from '../Menu';
import { WrapperSections } from '../WrapperSections';
import { EngagedAndDate } from './EngagedAndDate';
import styles from './style.module.css'

const Hero: React.FC = () => {

    return (
        <WrapperSections
            id="hero"
            width="100vw"
            height="auto"
            margin="0px auto 0px auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            backgroundImage="url(/images/layout/bg-top.png)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            padding={{
                base: '0 5%'
            }}
            _before={{
                content: {
                    base: "url(/images/layout/img-top-left.png)",
                    lg: "url(/images/layout/obj-mar.png)"
                },
                position: "absolute",
                right: {
                    base: "auto",
                    lg:0
                },
                top: 0,
                left: {
                    base: 0,
                    lg:"auto"
                },
            }}
        >
            <Box
                width="100%"
                maxWidth="1200px"
                display="flex"
                flexDirection="column"
            >
                <Menu />
                <Box width="auto" position="relative" className={styles.ImageHero}>
                    <Image
                        position="relative"
                        src="/images/img-bg-min.png"
                        width={{
                            base: '90%',
                            '2xl': '100%'
                        }}
                        height={{
                            base: '150px',
                            sm:'200px',
                            md: '250px',
                            lg: '300px',
                            xl: '350px',
                            '2xl':'500px'
                        }}
                        alt="famil??a Queiroz com o Puck."
                        objectFit="cover"
                        objectPosition={{
                            base: '50%',
                            xl: "50% 40%",
                            '2xl':'50% 55%'
                        }}
                        borderRadius={{
                            base: "9px",
                            lg:"22px"
                        }}
                        boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                        margin="0 auto"
                    />
                </Box>
                <EngagedAndDate/>
            </Box>
        </WrapperSections>
    )

}

export { Hero }