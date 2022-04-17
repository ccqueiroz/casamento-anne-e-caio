import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { MenuList, MenuListProps } from './menuList';

const textShadow = `0.1rem 0.1rem 0.6rem`;

const Menu: React.FC = () => {
    const { width } = useWindowSize()
    return (
        (width || 1000) < 900 ? (<span>Hamburguer</span>) :
            (
            <Box
                width="643px"
                height="auto"
                margin={{
                    base: "0 auto",
                    md: "0 auto 20px",
                    lg:'50px auto 25px'
                }}
            >
                <Image
                    src="/images/brasao-teste.svg"
                    alt=""
                    width={{
                        lg: "133px",
                        '2xl':"170px"
                    }}
                    maxHeight={{
                        lg: "72px",
                        '2xl': "90px"
                    }}
                    transform={{
                        lg: 'scale(1.1)',
                        '2xl': 'scale(1.4)',
                    }}
                    objectFit="none"
                    margin="0 auto 0 auto"
                />
                <Flex
                    as="ul"
                    width="100%"
                    margin="-5px auto 0 auto"
                    justifyContent="space-between"
                    alignItems="center"
                    height="40px"
                >
                    {MenuList?.map((item: MenuListProps) => (
                        <Box key={item.name}
                            fontFamily="Abel-Regular"
                            fontSize="1.3rem"
                            color="text.secondary"
                            position="relative"
                        >
                            <Link
                                href={item.href}
                                textShadow={textShadow}
                                transitionDuration="all 0.2s easy-in-out"
                                _hover={{
                                    textDecoration: "none",
                                    filter: "opacity(0.6)",
                                }}
                            >
                                {item.name}
                            </Link>
                        </Box>
                    ))}
                </Flex>
            </Box>
        )
    )
}

export {Menu}