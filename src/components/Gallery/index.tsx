import { Box, Grid, GridItem, Image  } from '@chakra-ui/react';
import React from 'react';
import { Gallery, Photo } from '../../data/model/Gallery';

const Gallery: React.FC<Gallery> = ({photos}) => {
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
                            <GridItem key={photo.src} colSpan={{ base: 12, lg: photo.col?.lg }}>
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    objectFit={photo.objectFit}
                                    objectPosition={photo.objectPosition}
                                    width={photo.width}
                                    height={photo.height}
                                    {...photo}
                                />
                            </GridItem>
                        ))
                    }
                </Grid >
            </Box>
        </Box>  
    );
}

export { Gallery }
