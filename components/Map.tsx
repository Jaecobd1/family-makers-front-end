import * as React from 'react'
import mapboxgl, { Marker } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

function Map(libraries) {


    const [selectedLibrary, setSelectedLibrary] = React.useState(null);


    const [map, setMap] = React.useState<mapboxgl.Map>();

    const mapNode = React.useRef(null);

    React.useEffect(() => {
        const node = mapNode.current;

        if (typeof window === "undefined" || node === null) return;

        const Map = new mapboxgl.Map({
            container: node,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 5,

        });

        // save the map object to React.useState

        setMap(Map);

        return () => {
            Map.remove();
        };
    }, []);

    return (
        <div ref={mapNode} style={{ width: "100%", height: "100%" }} >
            {/* {libraries.long.map(library => (
                <Marker key={library.name}
                    latitude={library.latitude}
                    longitude={library.longitude}
                >
                <div>Library</div>
           </Marker>
            ))} */}
        </div>);
        }

export default Map