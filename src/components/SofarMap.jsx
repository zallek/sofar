import React, { PropTypes } from 'react';
import { GoogleMaps } from 'react-google-maps';


const SofarForm = React.createClass({

  displayName: 'SofarMap',

  propTypes: {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    zoom: PropTypes.number,
  },

  render() {
    let { center, zoom, ...otherProps } = this.props;
    return (
      <GoogleMaps
        containerProps={{
          style: {
            height: '70%',
          },
          ...otherProps,
        }}
        googleMapsApi={ google.maps }
        center={ center }
        zoom={ zoom || 8 }
      />
    );
  },

});

export default SofarForm;
