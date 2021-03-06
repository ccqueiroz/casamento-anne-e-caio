import {
    Box,
    Flex,
    Image,
    Link,
    Menu as MenuContent,
    MenuButton,
    MenuList as ListMenu,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MenuList, MenuListProps } from './menuList';
import { excludeHashLink } from '../../data/utils/excludeHashLink';
const textShadow = `0.1rem 0.1rem 0.6rem`;

const Menu: React.FC = () => {
    const { width } = useWindowSize()
    
    return (
        (width || 1000) < 900 ? (
            <Box
                width="100%"
                position="relative"
                display="flex"
                justifyContent="flex-end"
                height={{base: "60px", md: "90px"}}
                margin="3% auto"                
            >
                <Box flex={1} position="relative" marginTop="2%">
                    <Image
                        position="absolute"
                        left={{base: "54%"}}
                        top={{base: "0px", md: "5px"}}
                        transform="translateX(-50%)"
                        src="/images/brasao-main.svg"
                        alt="logo do casal Anne e Caio"
                        width={{base: "165px", md: "30%"}}
                        height="100%"
                        objectFit="cover"
                        objectPosition="center"
                        margin="0 auto"
                        filter="drop-shadow(0px 0px 3px #93c2c2)"
                    />
                </Box>
                <Box height="100%" display="flex" alignItems="center">
                    <MenuContent colorScheme="">
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<GiHamburgerMenu color="#0c6a6b"/>}
                            variant='outline'
                            backgroundImage="linear-gradient(205deg, #93d1e4, #e5f4f9, #edf8fb)"
                            borderColor="#93c2c2"
                            _focus={{
                                backgroundImage: "linear-gradient(205deg, #93d1e4, #e5f4f9, #edf8fb)"
                            }}
                        />
                        <ListMenu>
                            {MenuList?.map((item: MenuListProps) => (
                                <MenuItem key={item.name}
                                    fontFamily="TimesRoman"
                                    fontSize="1rem"
                                    color="text.secondary"
                                    position="relative"
                                >
                                    <Link
                                        letterSpacing="0.05rem"
                                        onClick={() => excludeHashLink(item.href)}
                                        title={`link ??ncora para ir ?? sess??o ${item.name}`}
                                        aria-describedby={`link ??ncora para ir ?? sess??o ${item.name}`}
                                        aria-labelledby={item.name}
                                    >
                                        {item.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </ListMenu>
                    </MenuContent>
                </Box>
            </Box>
        ) :
            (
            <Box
                width="80%"
                margin={{
                    base: "2% auto",
                    md: "2% auto 0.6%",
                    lg:'3% auto 0.8%'
                    }}
                padding="0 2%"
            >
                <Image
                    src="/images/brasao-main.svg"
                    alt="logo do casal Anne e Caio"
                    width={{
                        base:"135px",
                        '2xl':"170px"
                    }}
                    maxHeight={{
                        base:"60px",
                        lg: "72px",
                        '2xl': "90px"
                    }}
                    transform={{
                        base:"scale(1.0)", 
                        lg: 'scale(1.3)',
                        '2xl': 'scale(1.4)',
                    }}
                    objectFit="none"
                    margin="0 auto"
                    filter="drop-shadow(0px 0px 2px #93c2c2)"
                />
                <Flex
                    as="ul"
                    width="100%"
                    margin="-5px auto 0"
                    justifyContent="space-between"
                    alignItems="center"
                    height="40px"
                >
                    {MenuList?.map((item: MenuListProps) => (
                        <Box key={item.name}
                            fontFamily="TimesRoman"
                            fontSize="1.2rem"
                            color="text.secondary"
                            position="relative"
                        >
                            <Link
                                letterSpacing="0.07rem"
                                onClick={() => excludeHashLink(item.href)}
                                textShadow={textShadow}
                                transitionDuration="all 0.2s easy-in-out"
                                _hover={{
                                    textDecoration: "none",
                                    filter: "opacity(0.6)",
                                }}
                                title={`link ??ncora para ir ?? sess??o ${item.name}`}
                                aria-describedby={`link ??ncora para ir ?? sess??o ${item.name}`}
                                aria-labelledby={item.name}
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

export default memo(Menu)