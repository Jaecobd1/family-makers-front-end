import "mapbox-gl/dist/mapbox-gl.css"
import ReactMapGL, {Marker, Popup, ViewState } from 'react-map-gl' 
import { useState, useEffect, useRef } from 'react'


interface IProps { }

function Map({ }: IProps) {
    const [viewport, setViewport] = useState<ViewState>({
        latitude: 43,
        longitude: -79,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        padding: {top:0, bottom: 0, left: 0, right: 0},
    });
    return (
        <div className="text-black relative  w-screen h-96">
            <ReactMapGL {...viewport}  
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN} 
            ></ReactMapGL>
        </div>
    )
}

export default Map
