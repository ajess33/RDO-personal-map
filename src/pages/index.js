import React from 'react'
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import RDRMap from '../images/rdr2-map.png'
import RDRMapFull from '../images/rdr2-map-full.png'
import '../styles/index.css'

// width: 7200 height: 5400
// credit: https://www.gtabase.com/red-dead-redemption-2/locations/red-dead-redemption-2-map-full-official-world-map-of-rdr2-in-hd

const bounds = [[-400, -600], [2400, 3800]]

const IndexPage = () => (
  <div>
    <MainMap />
  </div>
)

class MainMap extends React.Component {
  state = {
    markers: [],
  }

  addMarker = e => {
    const { markers } = this.state
    markers.push(e.latlng)
    this.setState({ markers })
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <Map
          id="mapid"
          crs={L.CRS.Simple}
          minZoom={-2}
          onClick={this.addMarker}
          bounds={bounds}
        >
          <ImageOverlay bounds={bounds} maxBounds={bounds} url={RDRMapFull} />
          {this.state.markers.map((position, idx) => (
            <Marker key={`marker-${idx}`} position={position}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
          ))}
        </Map>
      )
    }
    return null
  }
}

export default IndexPage
