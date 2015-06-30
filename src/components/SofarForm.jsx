import React, { PropTypes } from 'react';
import { Input, Button } from 'react-bootstrap';


const SofarForm = React.createClass({

  displayName: 'SofarForm',

  propTypes: {
    position: PropTypes.string,
    onGeolocation: PropTypes.func.isRequired,
  },

  render() {
    let { position, onGeolocation } = this.props;

    const GeolocationButton = <Button title="Geolocation" onClick={ onGeolocation }><i className="fa fa-map-marker"></i></Button>;

    return (
      <form className="SofarForm">
        <div className="form-group">
          <label htmlFor="position">Start Position</label>
          <Input type="text" className="form-control" id="position"
                 placeholder="Position" buttonAfter={ GeolocationButton } value={position} />
        </div>
      </form>
    );
  },

});

export default SofarForm;
