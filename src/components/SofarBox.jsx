import React from 'react';
import SofarForm from './SofarForm';


const SofarBox = React.createClass({

  displayName: 'SofarBox',

  render() {
    return (
      <div className="SofarBox">
        <SofarForm
          startPosition=""
        />
      </div>
    );
  },

});

export default SofarBox;
