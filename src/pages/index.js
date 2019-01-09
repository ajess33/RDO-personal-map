import React from 'react'
import {
  Map,
  ImageOverlay,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Circle,
} from 'react-leaflet'
import L from 'leaflet'
import RDRMapFull from '../images/rdr2-map-full.png'
import '../styles/index.css'
// import { HideoutsOverlay } from '../components/layers'

// credit: https://www.gtabase.com/red-dead-redemption-2/locations/red-dead-redemption-2-map-full-official-world-map-of-rdr2-in-hd

const { Overlay } = LayersControl
const bounds = [[-400, -600], [2400, 3800]]

const IndexPage = () => (
  <div>
    <h1 className="title">RDO CUSTOM MAP</h1>
    <h2>
      Interactive map for Red Dead Online. Browse various pre-set markers or
      create your own!
    </h2>
    <MainMap />
    <p>
      Map credit:
      https://www.gtabase.com/red-dead-redemption-2/locations/red-dead-redemption-2-map-full-official-world-map-of-rdr2-in-hd
    </p>
  </div>
)

class MainMap extends React.Component {
  state = {
    markers: [],
  }

  addMarker = e => {
    const { markers } = this.state
    markers.push(e.latlng)
    console.log(e)

    this.setState({ markers })
  }

  deleteMarker = e => {
    console.log(e)
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
            <LayersControl position="topright">
              <ImageOverlay
                bounds={bounds}
                maxBounds={bounds}
                url={RDRMapFull}
              />
              <Overlay name="Gang Hideouts">
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
              <Overlay name="Fishing Locations">
                <LayerGroup>
                  <Circle center={[1300, 1800]} fill-color="blue" radius={100}>
                    <Popup>Sockeye Salmon</Popup>
                  </Circle>
                  <Circle center={[1200, 2100]} fill-color="blue" radius={100}>
                    <Popup>Steelhead Trout</Popup>
                  </Circle>
                </LayerGroup>
              </Overlay>
              <Overlay name="Best Hunting Location">
                <LayerGroup>
                  <Circle center={[1031, 3212]} fill-color="red" radius={200}>
                    <Popup>
                      Heron, Whooping Crane, Spoonbill Plume, Alligators (best
                      money making method){' '}
                    </Popup>
                  </Circle>
                </LayerGroup>
              </Overlay>
              {this.state.markers.map((position, idx) => (
                <Marker key={`marker-${idx}`} position={position}>
                  <Popup>
                    <span>Description will go here</span>
                    <button onClick={this.deleteMarker}>Delete</button>
                  </Popup>
                </Marker>
              ))}
            </LayersControl>
          </Map>
        </div>
      )
    }
    return null
  }
}

export default IndexPage
