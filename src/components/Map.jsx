import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({center,  triangleCoords }) => {
  console.log('triangleCoords :: ', triangleCoords);
  const marks = triangleCoords.map(mark => {
    return (<LocationMarker lat={mark.lat} lng={mark.lng}/>);
  })
  return (
    <div className="map">
      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyD9J7CDhi47z7kRpvfZLkHSVZ_W7C1yCyw' }}
      defaultCenter={center}
      defaultZoom={8}
      >
      {marks}
      </GoogleMapReact>
    </div>
  )
}


export default Map
