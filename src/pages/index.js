import React from 'react'
import { Map, ImageOverlay } from 'react-leaflet'
import L from 'leaflet'
import RDRMap from '../images/rdr2-map.png'
import RDRMapFull from '../images/rdr2-map-full.png'
import '../styles/index.css'

// width: 7200 height: 5400
// credit: https://www.gtabase.com/red-dead-redemption-2/locations/red-dead-redemption-2-map-full-official-world-map-of-rdr2-in-hd

const bounds = [[0, 0], [2000, 2000]]

const IndexPage = () => (
  <div>
    <MainMap />
  </div>
)

class MainMap extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Map id="mapid" crs={L.CRS.Simple} minZoom={-2} bounds={bounds}>
          <ImageOverlay minZoom={-2} bounds={bounds} url={RDRMapFull} />
        </Map>
      )
    }
    return (
      <div>
        <p>Wrong</p>
      </div>
    )
  }
}

export default IndexPage
