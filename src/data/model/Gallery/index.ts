import { ImageProps } from "@chakra-ui/react";

export interface Gallery {
    photos: Array<Photo>
}

export interface Photo extends ImageProps {
    col?: {
        base?: number,
        lg: number
    }
}