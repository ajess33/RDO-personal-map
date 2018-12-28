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
    <h1 className="title">RDO CUSTOM MAP</h1>
    <MainMap />
  </div>
)

class MainMap extends React.Component {
  state = {
    markers: [],
    // setDesc: false,
  }

  addMarker = e => {
    const { markers } = this.state
    markers.push(e.latlng)
    this.setState({ markers })
  }

  addDesc = () => {
    this.setState({ setDesc: true })
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <div>
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
                  <span>Description will go here</span>
                  <button>Delete</button>
                </Popup>
              </Marker>
            ))}
          </Map>
        </div>
      )
    }
    return null
  }
}
// <MarkerList markers={this.state.markers} />

// class MarkerList extends React.Component {
//   render() {
//     return (
//       <div>
//         <ul>
//           {markers.map((marker, index) => {
//             return <li key={index}>{marker}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

export default IndexPage
