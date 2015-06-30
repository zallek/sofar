import React from 'react';
import SofarForm from './SofarForm';
import SofarMap from './SofarMap';


const geolocation = (
  typeof window !== 'undefined' && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

const SofarBox = React.createClass({

  displayName: 'SofarBox',

  getInitialState() {
    return {
      position: '',
      center: { lat: 48.8588982, lng: 2.3460132 },
      zoom: 12,
    };
  },

  onGeolocation() {
    geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      this.setState({
        position: `Latitude: ${latitude} Longitude: ${longitude}`,
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: 14,
      });
    }); //@TODO handle fail case
  },

  render() {
    let { position, center, zoom } = this.state;

    return (
      <div className="SofarBox">
        <SofarForm
          position={ position }
          onGeolocation={ this.onGeolocation }
        />
        <SofarMap
          center={ center }
          zoom={ zoom }
        />
      </div>
    );
  },

});

export default SofarBox;
