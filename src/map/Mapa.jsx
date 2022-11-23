import React from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "../map/mapa.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;



const MapaRender = () => {
  return (
    <MapContainer center={[19.4343942, -99.1330824]} zoom={13} scrollWheelZoom={false} className="estiloMapa">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[19.4343942, -99.1330824]}>
        <Popup>
          LA PODEROSÍSIMA CDMX. <br /> 
        </Popup>
      </Marker>
      <Marker position={[40.640771, -74.016133]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>
{/*       <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>      <Marker position={[ ,
]}>
        <Popup>
          TIENDAS <br />
        </Popup>
      </Marker>
 */}

    </MapContainer>
  )
}

export default MapaRender;
