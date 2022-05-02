import { Image } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { generateRenderNumbers } from '../../../../data/utils/generateRenderNumbers';
import { ChakraBox } from '../../../ChakraBox/ChakraBox';

interface FlyingHearts{
    numberOfHearts: number;
}

const FlyingHearts:React.FC<FlyingHearts> = ({numberOfHearts}) => {
    
    const renderHearts = useMemo(() => {
        const components: Array<React.ReactElement> = []
        for (let i = 0; i < numberOfHearts; i++) {
            const left = generateRenderNumbers({ min: 2, max: 96 });
            const bottom = generateRenderNumbers({ min: -13, max: -10 })
            const speed = generateRenderNumbers({ min: 20, max: 25 })
            components.push(
                < ChakraBox
                    key={i}
                    position="absolute"
                    zIndex={-1}
                    left={`${left}vw`}
                    bottom={`${bottom}%`}
                    animate={{
                        bottom: [`${bottom}vh`, '107vh',],
                        opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,],
                        scale: [1, 1.3, 1, 1.3, 1, 1.3, 1, 1.3, 1, 1.3, 1, 1.3, 1, 1.3, 1, 1.3]
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                >
                    <Image id={`heart-${i}`} src="/images/coracao.png" width="25px" height="25px" alt="corações pulsantes"/>
                </ChakraBox>
            )
        }
        return components;
    }, [numberOfHearts]);

    return (
        <>
            {renderHearts?.map((element:React.ReactElement) => element)}
        </>
    );
}

export { FlyingHearts }