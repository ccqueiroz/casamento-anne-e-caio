import { Image, ImageProps } from '@chakra-ui/react';
import React from 'react';

interface ImagesFooterSectionProps extends ImageProps {
    srcImage: string;
    altimage: string
}

const ImagesFooterSection: React.FC<ImagesFooterSectionProps> = ({
    srcImage,
    altimage,
    ...rest
}) => {

    return (
        <Image
            src={srcImage} width={{
                base: "170px",
                xl:"280px"
            }}
            height={{
                lg:'70px',
                '2xl': '86px'
            }}
            alt={altimage}
            margin="0 auto"
            objectFit="contain"
            objectPosition="bottom"
            {...rest}
        />
    );
}

export { ImagesFooterSection }