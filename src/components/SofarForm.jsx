import React, { PropTypes } from 'react';
import { Input, Button } from 'react-bootstrap';


export default class SofarForm {

  static displayName = 'SofarForm';

  static propTypes = {
    startingPoint: PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
    geolocate: PropTypes.func.isRequired,
  };

  render() {
    let {
      startingPoint,
      geolocate,
    } = this.props;

    const GeolocationButton = <Button title="Geolocation" onClick={ geolocate }><i className="fa fa-map-marker"></i></Button>;

    return (
      <form className="SofarForm">
        <div className="form-group">
          <label htmlFor="position">Start Position</label>
          <Input type="text" className="form-control" id="position"
                 placeholder="Position" buttonAfter={ GeolocationButton } value={ startingPoint.label } />
        </div>
      </form>
    );
  }

}
