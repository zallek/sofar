import React, { PropTypes } from 'react';
import { GoogleMaps } from 'react-google-maps';


const SofarForm = React.createClass({

  displayName: 'SofarMap',

  propTypes: {
    center: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    containerProps: PropTypes.object,
  },

  render() {
    let { center, containerProps, ...otherProps } = this.props;
    return (
      <GoogleMaps
        containerProps={{
          style: {
            height: '100%',
          },
          ...containerProps,
        }}
        googleMapsApi={ google.maps }
        center={ center }
        zoom={ 8 }
        { ...otherProps }
      />
    );
  },

});

export default SofarForm;
