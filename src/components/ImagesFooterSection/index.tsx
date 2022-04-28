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
            src={srcImage}
            width="auto"
            height="auto"
            alt={altimage}
            margin="0 auto"
            objectFit="cover"
            objectPosition="bottom"
            {...rest}
        />
    );
}

export { ImagesFooterSection }