import React from 'react'
import { Map, ImageOverlay, Marker, Popup, LayersControl } from 'react-leaflet'
import L from 'leaflet'
import '../styles/index.css'

const { Overlay } = LayersControl

const HideoutsOverlay = () => (
  <Overlay name="Gang Hideouts">
    <Marker position={[1961, 3322]}>
      <Popup>Willard's Rest</Popup>
    </Marker>
    <Marker position={[1886, 2927]}>
      <Popup>The Loft</Popup>
    </Marker>
  </Overlay>
)

export { HideoutsOverlay }

// Overlay = () => (
//   <div>

//   </div>
// )

// HideoutsOverlay = () => (
//   <div>

//   </div>
// )

// HideoutsOverlay = () => (
//   <div>

//   </div>
// )
