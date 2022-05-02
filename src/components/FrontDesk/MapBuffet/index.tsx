import React, { useCallback, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { alertDialogWithAdress } from './alertDialogWithAdress'
import {CenterControl} from './CenterControl'
import { google } from "google-maps";

declare var google: google;

const MapBuffet: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const coordAtlantis: google.maps.LatLng | google.maps.LatLngLiteral = { lat: -3.693676673767132, lng: -38.59859212762528 }
    const initialMap = useCallback((): void => {
        const map = new google.maps.Map(
            ref.current as HTMLElement,
            {
                zoom: 16,
                center: coordAtlantis,
                disableDefaultUI: true,
                zoomControl: false
            }
        );
        const marker = new google.maps.Marker({ map, position: coordAtlantis, title: 'Atlantis Buffet' });
        const infowindow = new google.maps.InfoWindow({ content: alertDialogWithAdress });
        const centerControlDiv = document.createElement("div");
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
    }, [])

    useEffect(() => {
        initialMap()
    }, [ref, initialMap]);

    return (
        <Box
            width={{
                base: "90%",
                md:"60%"
            }}
            maxWidth="600px"
            margin="0 auto 2.5rem"
            height="350px"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="1px 2px 9px 2px rgba(74, 97, 97, 0.5)"
        >
            <div ref={ref} id="map" style={{height:'100%'}}/>
        </Box>
    );
}

export { MapBuffet }