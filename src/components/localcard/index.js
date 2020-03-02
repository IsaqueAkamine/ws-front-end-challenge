import React, { useState, useEffect } from 'react';

import GoogleMapReact from 'google-map-react';
import { Card } from '@material-ui/core';
import Loader from 'react-loader-spinner'
import { Container } from "./styles";


export default function LocalCard(props) {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const [loading, setLoading] = useState(true);
    const [center, setCenter] = useState({
        lat: -24.957777,
        lng: -53.459511
    });
    const [zoom, setZoom] = useState(11);
    const API_KEY = 'AIzaSyAsR-ewlRNbArydac_gtFO0T6p2h6vbMDs';

    useEffect(() => {
        getLocation();
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else { console.log("O seu navegador não suporta Geolocalização.") }
        setLoading(false);
    }
    function showPosition(position) {
        return (
            console.log(
                "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
            ),
            setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        )
    }

    return (
        <Container>
            {loading ?
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    style={{ justifyContent: 'center', padding: 90 }}
                />
                :
                <Card variant="contained" color="primary" style={{ flex: 1, width: '100%', paddingBottom: 20 }}>
                    <div style={{ marginLeft: 12, marginRight: 12 }}>
                        <p style={{ fontWeight: 'bold' }}>Local</p>

                        {/* <div style={{ height: '100vh', width: '100%' }}> */}
                        <div style={{ height: '250px', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: API_KEY }}
                                defaultCenter={center}
                                defaultZoom={zoom}
                            >
                                <AnyReactComponent
                                    lat={center.lat}
                                    lng={center.lng}
                                    text="Você está aqui"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </Card>
            }
        </Container>
    );
}