import { Box, Image, Flex } from '@chakra-ui/react';
import React from 'react';

const DressCodeImages: React.FC = () => {

    return (
        <Flex
            width="auto"
            minWidth={{
                base: '45%',
                xl:'40%'
            }}
            height={{
                base: "auto",
                lg:'350px',
                xl:"450px"
            }}
            justifyContent="flex-end"
            margin={{
                base: "0 auto",
                lg:"0 2% 0 auto"
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
                    base: "38%",
                    lg:"35%",
                    xl:"160px"
                },
                height: {
                    base: "53%",
                    md:"53%",
                    lg:"200px",
                    xl: "230px"
                },
                backgroundImage: "linear-gradient(270deg, #93c2c2, #aadae9, #93d1e4, #d6eef5)",
                zIndex: -1,
                filter:"opacity(0.8)",
                position: "absolute",
                top: {
                    base: "-4%",
                    xl:"-15px"
                },
                boxShadow:"1px 3px 5px 2px rgba(74, 97, 97, 0.5)",
                right: {
                    base: "-4.5%",
                    lg:"-13px",
                    xl:"-15px"
                },
            }}
        >
            <Box
                height={{
                    base: "300px",
                    lg:"400px",
                    xl:"444px"
                }}
                position="relative"
                margin={{
                    base: "0",
                    lg: "2rem 1rem 0 0"
                }}
                _before={{
                    content: "''",
                    width: {
                        base:"81%",
                        lg:"78%",
                    },
                    maxWidth:"175px",
                    height: {
                        base:"53%",
                        lg:"55%",
                    },
                    maxHeight:"240px",
                    backgroundImage: "linear-gradient(45deg, #0c6a6b, #93c2c2, #aadae9, #d6eef5)",
                    zIndex: -1,
                    filter:"opacity(0.8)",
                    position: "absolute",
                    bottom: {
                        base: "1%",
                        lg:"2%",
                        xl:"2%"
                    },
                    boxShadow:"1px 3px 5px 2px rgba(74, 97, 97, 0.5)",
                    left: {
                        base: "-10%",
                        lg:"-13px",
                        xl:"-15px"
                    },
                }}
            >
                <Image
                    src="/images/dresscode-ele.png"
                    alt="dress code para ele"
                    height="95%"
                    objectFit="contain"
                    objectPosition="top"
                    boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                    borderRadius="5px"
                />
            </Box>
            <Box
                height={{
                    base: "300px",
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
                    boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
                    borderRadius="5px"
                />
            </Box>
        </Flex>
    );
}

export { DressCodeImages }