import { Box } from '@chakra-ui/react';
import React from 'react';

const BannerSection: React.FC = () => {
    return (
        <Box
            id="content-img-parallaxy"
            width="100%"
            height="50vh"
            maxWidth="1300px"
            margin="0 auto"
            marginBottom="2rem"
            position="relative"
            overflow="hidden"
            borderRadius="20px"
            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
        >
            <Box
                id="img-parallaxy"
                backgroundImage="/images/casal1.JPG"
                backgroundSize={{
                    base: "cover",
                    '2xl': "contain"
                }}
                backgroundAttachment={{base: 'local', lg: "fixed"}}
                backgroundPosition={{
                    base: "10% 50%",
                    lg:"50% 30%"
                }}
                backgroundRepeat="no-repeat"
                height="50vh"
                width="100%"
            />
        </Box>
    );
}

export {BannerSection}