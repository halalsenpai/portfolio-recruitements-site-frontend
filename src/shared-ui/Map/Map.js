import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { getLat, getLng } from "../../utils/helper";

export const Map = ({ location, data }) => (
  <MapContainer zoom={13} scrollWheelZoom={false} center={[getLat(location), getLng(location)]}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {data && (
      <Marker position={[getLat(location), getLng(location)]}>
        <Popup>{data.companyName}</Popup>
      </Marker>
    )}
  </MapContainer>
);
