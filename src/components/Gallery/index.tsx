import { Box, Grid, GridItem, Image, useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { Gallery, Photo } from '../../data/model/Gallery';
import { ModalPhoto } from '../Overlay/ModalPhoto';

const Gallery: React.FC<Gallery> = ({ photos }) => {
    const [imageFocus, setImageFocus] = useState< Photo | undefined>(undefined);
    const { onOpen: onOpenModalPhoto, onClose: onCloseModalPhoto,...propsModalModalPhoto } = useDisclosure();

    const handleOpenImage = useCallback((id: string | undefined) => {
        const findPhoto = photos?.find((photo: Photo) => photo.id === id);
        setImageFocus(findPhoto)
        onOpenModalPhoto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCloseImage = useCallback(() => {
        setImageFocus(undefined)
        onCloseModalPhoto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            backgroundImage="linear-gradient(45deg, #0c6a6b, #93c2c2, #aadae9, #d6eef5, #0c6a6b)"
            borderRadius="20px"
            overflow="hidden"
            padding={{
                base: "3%",
                lg:"1%"
            }}
            boxShadow="1px 3px 5px 2px rgba(74, 97, 97, 0.5)"
        >
            <Box borderRadius="20px" overflow="hidden">
                <Grid
                    width="100%"
                    display={['flex', 'flex', 'grid']}
                    flexDir={['column', 'column', 'initial']}
                    templateColumns="repeat(12, 1fr)"
                    ml={['0']}
                    gap={3}
                >
                    {
                        photos?.map((photo: Photo) => (
                            <GridItem
                                key={photo.src}
                                colSpan={{ base: 12, lg: photo.col?.lg }}
                                overflow="hidden"
                                onClick={() => handleOpenImage(photo.id)}
                            >
                                <Image
                                    style={{
                                        transition: 'all 0.5s ease-in-out'
                                    }}
                                    src={photo.src}
                                    alt={photo.alt}
                                    objectFit={photo.objectFit}
                                    objectPosition={photo.objectPosition}
                                    width={photo.width}
                                    height={photo.height}
                                    loading="lazy"
                                    cursor="pointer"
                                    _hover={{
                                            transform: 'scale(1.05)'
                                    }}
                                        {...photo}
                                    />
                            </GridItem>
                        ))
                    }
                </Grid >
            </Box>
            <ModalPhoto photo={imageFocus} onClose={handleCloseImage} {...propsModalModalPhoto}/>
        </Box>  
    );
}

export { Gallery }
