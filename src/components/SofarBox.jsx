import React from 'react';
import SofarForm from './SofarForm';
import SofarMap from './SofarMap';


const SofarBox = React.createClass({

  displayName: 'SofarBox',

  render() {
    return (
      <div className="SofarBox">
        <SofarForm
          startPosition=""
        />
        <SofarMap
          center={{ lat: -34.397, lng: 150.644 }}
        />
      </div>
    );
  },

});

export default SofarBox;
