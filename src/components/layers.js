import React from 'react'
import { Map, ImageOverlay, Marker, Popup, LayersControl } from 'react-leaflet'
import L from 'leaflet'
import '../styles/index.css'

const { Overlay } = LayersControl

const HideoutsOverlay = () => (
  <Overlay name="Dang Hideouts">
    <LayerGroup>
      <Marker position={[1961, 3322]}>
        <Popup>Willard's Rest</Popup>
      </Marker>
      <Marker position={[1886, 2927]}>
        <Popup>The Loft</Popup>
      </Marker>
      <Marker position={[1810, 2406]}>
        <Popup>Bacchus Station</Popup>
      </Marker>
      <Marker position={[1580, 2276]}>
        <Popup>Firewood Rise</Popup>
      </Marker>
      <Marker position={[1658, 2176]}>
        <Popup>Six Point Cabin</Popup>
      </Marker>
      <Marker position={[2038, 1696]}>
        <Popup>Colter</Popup>
      </Marker>
      <Marker position={[1690, 1485]}>
        <Popup>Ewing Basin</Popup>
      </Marker>
      <Marker position={[1493, 1370]}>
        <Popup>Hanging Dog Ranch</Popup>
      </Marker>
      <Marker position={[1404, 1811]}>
        <Popup>Cumberland Falls</Popup>
      </Marker>
      <Marker position={[1355, 3123]}>
        <Popup>???</Popup>
      </Marker>
      <Marker position={[1251, 3110]}>
        <Popup>???</Popup>
      </Marker>
      <Marker position={[1019, 3056]}>
        <Popup>Lakay</Popup>
      </Marker>
      <Marker position={[664, 2914]}>
        <Popup>Shady Bell</Popup>
      </Marker>
      <Marker position={[872, 2514]}>
        <Popup>Radley's Pasture</Popup>
      </Marker>
      <Marker position={[970, 1605]}>
        <Popup>Fort Riggs</Popup>
      </Marker>
      <Marker position={[634, 1753]}>
        <Popup>Quakers Cove</Popup>
      </Marker>
      <Marker position={[650, 1436]}>
        <Popup>Bear Claw</Popup>
      </Marker>
      <Marker position={[372, 1594]}>
        <Popup>Manteca Falls</Popup>
      </Marker>
      <Marker position={[511, 1183]}>
        <Popup>Pike's Basin</Popup>
      </Marker>
      <Marker position={[587, 701]}>
        <Popup>Twin Rocks - Ultimate Edition</Popup>
      </Marker>
      <Marker position={[552, 534]}>
        <Popup>Rattlesnake Hollow</Popup>
      </Marker>
      <Marker position={[387, 730]}>
        <Popup>Jorge's Gap</Popup>
      </Marker>
      <Marker position={[167, 620]}>
        <Popup>Fort Mercer</Popup>
      </Marker>
      <Marker position={[212, 450]}>
        <Popup>Repentance</Popup>
      </Marker>
      <Marker position={[101, 160]}>
        <Popup>Soloman's Folly</Popup>
      </Marker>
      <Marker position={[392, 0.85]}>
        <Popup>Cueva Seca</Popup>
      </Marker>
      <Marker position={[233, -56]}>
        <Popup>Gaptooth Breach</Popup>
      </Marker>
      <Marker position={[137, -145]}>
        <Popup>Sea of Coronado</Popup>
      </Marker>
      <Marker position={[1026, 2819]}>
        <Popup>???</Popup>
      </Marker>
    </LayerGroup>
  </Overlay>
)

export { HideoutsOverlay }
