export const calcRoute = (
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer,
    startLocation: string | undefined,
    centerControlDiv: HTMLDivElement
) => {
    const start = startLocation;
    const end = 'R. Otaviano Laurindo, 580 - Parque Leblon, Caucaia - CE, 61631-290';
    const request: google.maps.DirectionsRequest = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode['DRIVING'],
        drivingOptions: {
            departureTime: new Date(),
            trafficModel: google.maps.TrafficModel['PESSIMISTIC']
        },
        unitSystem: google.maps.UnitSystem.METRIC
    };
    directionsService.route(request, function (result: google.maps.DirectionsResult, status: google.maps.DirectionsStatus) {
        if (status === 'OK') {
            centerControlDiv.style.display = "none"
            directionsRenderer.setDirections(result);
        }
    });
}