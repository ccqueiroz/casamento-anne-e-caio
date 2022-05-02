import { Photo } from "../../data/model/Gallery";

export const photos: Array<Photo> = [
    {
        id:"1",
        src: "/images/casal6.JPG",
        width: "100%",
        height: {
            base: '250px',
            md:"300px",
            lg: '100%',
        },
        col: {
            lg: 6
        },
        objectFit:"cover",
        alt:"Anne e Caio com Puck"
    },
    {
        id:"2",
        src: "/images/IMG_6604.JPG",
        width: "100%",
        height: {
            base: '250px',
            md:"300px",
            lg: '100%',
        },
        col: {
            lg: 3
        },
        objectFit:"cover",
        objectPosition: {
            md:"50% 40%"
        },
        alt:"Anne e Caio casamento civil"
    },
    {
        id:'3',
        src: "/images/IMG_6602.JPG",
        width: "100%",
        height: {
            base: '250px',
            md:"300px",
            lg:'auto'
        },
        col: {
            lg: 3
        },
        objectFit:"cover",
        alt:"Anne e Caio casamento civil"
    },
    {
        id:'4',
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
        objectFit:"cover",
        alt:"Anne e Caio, foto do casamento civil"
    },
    {
        id: '5',
        src: "/images/casal4.JPG",
        width: "100%",
        height: {
            base: '250px',
            lg:'435px'
        },
        col: {
            lg: 7
        },
        objectFit:{
            base: 'cover',
            lg: 'cover'
        },
        objectPosition: {
            base:"100% 50%",
            md:"50% 40%"
        },
        alt:"Anne e Caio com puck no gramado"
    },

    {
        id: '6',
        src: "/images/IMG_6596.JPG",
        width: "100%",
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
        },
        alt:"Anne e Caio, foto do casamento civil"
    },
]