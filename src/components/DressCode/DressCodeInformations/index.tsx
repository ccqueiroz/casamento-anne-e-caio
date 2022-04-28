import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ContentTexts } from './ContentTexts';
import { DressCodeImages } from './DressCodeImages';

const DressCodeInformations: React.FC = () => {

    return (
        <Flex
            flexDirection={{
                base: 'column',
                lg: 'row'
            }}
            justifyContent="center"
            gap={{
                base: "1.5rem",
                lg:"2rem"
            }}
            width="100%%"
            maxWidth="1200px"
            margin={{
                base: "1.25rem auto 2.5rem",
                md: "1.25rem auto 3.5rem"
            }}
        >
            <ContentTexts />
            <DressCodeImages />
        </Flex>
    )
}

export {DressCodeInformations}