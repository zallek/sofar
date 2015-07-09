import React, { PropTypes } from 'react';
import { GoogleMaps, Circle } from 'react-google-maps';

import * as SofarPropTypes from 'proptypes/SofarPropTypes';


function convertRawLocation(rawLocation) {
  return {
    lat: rawLocation.latitude,
    lng: rawLocation.longitude,
  };
}

export default class SofarForm {

  static displayName = 'SofarMap';

  static propTypes = {
    center: SofarPropTypes.rawLocation.isRequired,
    startLocation: SofarPropTypes.location,
    destinationLocations: PropTypes.arrayOf(SofarPropTypes.location),
    zoom: PropTypes.number,
  };

  render() {
    let { center, startLocation, destinationLocations, zoom, ...otherProps } = this.props;
    return (
      <GoogleMaps
        containerProps={{
          style: {
            height: '70%',
          },
          ...otherProps,
        }}
        googleMapsApi={ google.maps }
        center={ convertRawLocation(center) }
        zoom={ zoom || 11 }
      >
        { startLocation ?
          <Circle center={convertRawLocation(center)} radius={2000}
                  fillColor="red" fillOpacity={0.20}
                  strokeColor="red" strokeOpacity={1} strokeWeight={1} />
        : null}
        { destinationLocations.map( location =>
          <Circle center={convertRawLocation(location.location)} radius={1000}
                  fillColor="green" fillOpacity={0.20}
                  strokeColor="green" strokeOpacity={1} strokeWeight={1} />
        )}
      </GoogleMaps>
    );
  }

}
