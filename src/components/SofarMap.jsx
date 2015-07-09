import React, { PropTypes } from 'react';
import { GoogleMaps, Marker, Circle } from 'react-google-maps';
import _ from 'lodash';

import * as SofarPropTypes from 'proptypes/SofarPropTypes';
import { computeLegend } from 'utils/Legend';
import { NB_MAP_LEGEND_PARTS } from 'config';


export default class SofarForm {

  static displayName = 'SofarMap';

  static propTypes = {
    center: SofarPropTypes.coordinates.isRequired,
    startLocation: SofarPropTypes.location,
    destinationLocations: PropTypes.arrayOf(SofarPropTypes.location),
    zoom: PropTypes.number,
  };

  render() {
    let { center, startLocation, destinationLocations, zoom, ...otherProps } = this.props;

    if (destinationLocations.length > 0) {
      let values = _.pluck(destinationLocations, 'estimatedDuration');
      let legendParts = computeLegend(values, NB_MAP_LEGEND_PARTS);

      destinationLocations = destinationLocations.map(location => ({
        color: _.find(legendParts, part => location.estimatedDuration <= part.max).color,
        ...location,
      }));
    }

    return (
      <GoogleMaps
        containerProps={{
          style: {
            height: '70%',
          },
          ...otherProps,
        }}
        googleMapsApi={ google.maps }
        center={ convertCoordinates(center) }
        zoom={ zoom || 11 }
      >
        { startLocation &&
          <Marker position={ convertCoordinates(startLocation.coords) } />
        }
        { destinationLocations.map(location =>
          <Circle key={ JSON.stringify(location.coords) } //@TODO find a less hacky key
                  center={ convertCoordinates(location.coords) } radius={ 1000 }
                  fillColor={ location.color } fillOpacity={0.20}
                  strokeColor={ location.color } strokeOpacity={1} strokeWeight={ 1 } />
        )}
      </GoogleMaps>
    );
  }

}

function convertCoordinates(coordinates) {
  return {
    lat: coordinates.latitude,
    lng: coordinates.longitude,
  };
}
