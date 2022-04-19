import { Box, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const DressCodeImages: React.FC = () => {

    return (
        <Flex
            width="auto"
            minWidth="48%"
            height={{
                base: "auto",
                lg:'350px',
                xl:"450px"
            }}
            justifyContent="flex-end"
            margin={{
                base: "0 auto",
                xl:"0 auto"
            }}
            gap={{
                base: "1rem",
                lg:"0"
            }}
            position="relative"
            zIndex={2}
            _before={{
                content: "''",
                width: {
                    base: "80%",
                    lg:"35%",
                    xl:"160px"
                },
                height: {
                    base: "calc(100% + 2.5%)",
                    md:"calc(100% + 2.5%)",
                    lg:"200px",
                    xl: "230px"
                },
                backgroundImage: "linear-gradient(45deg, #93c2c2, #aadae9, #d6eef5, #aadae9)",
                zIndex: -1,
                filter:"opacity(0.8)",
                position: "absolute",
                top: {
                    base: "-4%",
                    md:"-4%",
                    xl:"-15px"
                },
                boxShadow:"1px 3px 5px 2px rgba(74, 97, 97, 0.5)",
                right: {
                    base: "0%",
                    lg:"-10px",
                    xl:"-15px"
                },
            }}
        >
            <Box
                height={{
                    base: "auto",
                    lg:"400px",
                    xl:"444px"
                }}
                margin={{
                    base: "0",
                    lg: "2rem 1rem 0 0"
                }}
            >
                <Image
                    src="/images/dresscode-ele.png"
                    alt="dress code para ele"
                    height="95%"
                    objectFit="cover"
                    objectPosition="top"
                />
            </Box>
            <Box
                height={{
                    base: "auto",
                    lg:"400px",
                    xl:"444px"
                }} 
            >
                <Image
                    src="/images/dresscode-ela.png"
                    alt="dress code para ela"
                    height="95%"
                    objectFit="contain"
                    objectPosition="top"
                />
            </Box>
        </Flex>
    );
}

export { DressCodeImages }