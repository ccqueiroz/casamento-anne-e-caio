import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { Box, Button, Flex, FormControl } from '@chakra-ui/react';
import { alertDialogWithAdress } from './alertDialogWithAdress'
import {CenterControl} from './CenterControl'
import { google } from "google-maps";
import { TextComponent } from '../../TextComponent';
import { Input } from '../../Form/Input';
import { MdAddLocation } from 'react-icons/md';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form'
import { DirectionsParams } from '../../../data/model/Maps';
import { calcRoute } from './calcRoute';

declare var google: google;

const MapBuffet: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [departurePlace, setDeparturePlace] = useState<string | undefined>(undefined);
    const searchDeparturePlaceFormSchema = yup.object().shape({origin: yup.string()});
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<DirectionsParams>({
        resolver: yupResolver<yup.AnyObjectSchema>(searchDeparturePlaceFormSchema),
    });

    const handleDisabledButtonSubmit = useMemo(() => {
        return !watch('origin') || watch('origin') === '';
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('origin')]);

    const handleFillDeparturePlace: SubmitHandler<DirectionsParams> = useCallback(async (data) => {
        setDeparturePlace(data.origin);
        setValue('origin', '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initialMap = useCallback((startLocation: string | undefined): void => {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: '#41849d'
            }
        });
        const coordAtlantis: google.maps.LatLng | google.maps.LatLngLiteral = { lat: -3.693676673767132, lng: -38.59859212762528 };
        const map = new google.maps.Map(
            ref.current as HTMLElement,
            {
                zoom: 16,
                center: coordAtlantis,
                disableDefaultUI: true,
                zoomControl: false
            }
        );
        directionsRenderer.setMap(map);
        const marker = new google.maps.Marker({ map, position: coordAtlantis, title: 'Atlantis Buffet' });
        const infowindow = new google.maps.InfoWindow({ content: alertDialogWithAdress });
        const centerControlDiv = document.createElement("div");
        calcRoute(
            directionsService,
            directionsRenderer,
            startLocation,
            centerControlDiv
        );
        CenterControl(centerControlDiv);
        marker.addListener("click", () => {
            infowindow.open(map, marker);
            centerControlDiv.style.display = "none"
        })
        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [departurePlace]);

    useEffect(() => {
        initialMap(departurePlace);
    }, [ref, initialMap, departurePlace]);

    return (
        <Box
            width={{
                base: "90%",
                md:"60%"
            }}
            maxWidth="600px"
            margin="1rem auto 2.5rem"
        >
            <Flex flexDirection="column">
                <TextComponent
                    text="Como chegar"
                    textIndent={0}
                    fontWeight="bold"
                    fontStyle="italic"
                    marginBottom="0.5rem"
                    fontSize={{
                        base: "1.3rem",
                        lg:"1.7rem"
                    }}
                />
                <FormControl as="form" display="flex" alignItems="flex-end" gap="3"  onSubmit={handleSubmit(handleFillDeparturePlace)}>
                    <Input
                        placeholder="Local de partida."
                        IconType={MdAddLocation}
                        error={errors.origin}
                        {...register('origin')}
                    />
                    <Button
                        type="submit"
                        margin="0 auto"
                        fontWeight="bold"
                        letterSpacing="0.2rem"
                        color="#0c6a6b"
                        fontSize={{ base: "0.75rem", md: "0.95rem" }}
                        background="linear-gradient(45deg, #aadae9, #d6eef5)"
                        transition="background 300ms easy-in-out"
                        boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
                        isLoading={false}
                        _hover={{
                            backgroundImage: "linear-gradient(45deg, #93c2c2, #93c2c2, #aadae9, #d6eef5, #93c2c2)"
                        }}
                        disabled={handleDisabledButtonSubmit}
                    >
                        Calcular             
                    </Button>
                </FormControl>
            </Flex>
            <Box
                width="100%"
                maxWidth="600px"
                margin="1rem auto 2.5rem"
                height="350px"
                borderRadius="20px"
                overflow="hidden"
                boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
            >
                <div ref={ref} id="map" style={{height:'100%'}}/>
            </Box>
        </Box>
    );
}

export { MapBuffet }