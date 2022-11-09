import { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
    });
    return <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        {...viewport}
        onViewportChange={(nextViewport)=> setViewport(nextViewport)}
    ></ReactMapGL>
}