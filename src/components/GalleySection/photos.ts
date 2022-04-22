import { Photo } from "../../data/model/Gallery";

export const photos: Array<Photo> = [
    {
        src: "/images/casal6.JPG",
        width: {
            base: '100%',
            lg:'100%'
        },
        height: {
            base: '250px',
            md:"300px",
            lg: '100%',
        },
        col: {
            lg: 6
        },
            objectFit:{
                base: 'cover',
                lg: 'cover'
        }
    },
    {
        src: "/images/IMG_6604.JPG",
        width: {
            base: '100%',
            lg:'100%'
        },
        height: {
            base: '250px',
            md:"300px",
            lg: '100%',
        },
        col: {
            lg: 3
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        },
        objectPosition: {
            md:"50% 40%"
        }
    },
    {
        src: "/images/IMG_6602.JPG",
        width: {
            base: '100%',
            lg:'435px'
        },
        height: {
            base: '250px',
            md:"300px",
            lg:'auto'
        },
        col: {
            lg: 3
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        }
    },
    {
        src: "/images/IMG_6601.JPG",
        width: {
            base: '100%',
            lg:'100%'
        },
        height: {
            base: '250px',
            lg:'435px'
        },
        col: {
            lg: 2
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        }
    },
    {
        src: "/images/casal4.JPG",
        width: {
            base: '100%',
            lg:'100%'
        },
        height: {
            base: '250px',
            lg:'435px'
        },        col: {
            lg: 7
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        },
        objectPosition: {
            base:"100% 50%",
            md:"50% 40%"
        }
    },

    {
        src: "/images/IMG_6596.JPG",
        width: {
            base: '100%',
            lg:'435px'
        },
        height: {
            base: '250px',
            lg:'435px'
        },
        col: {
            lg: 3
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        }
    },
]