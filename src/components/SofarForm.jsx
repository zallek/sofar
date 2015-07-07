import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';
import { Button } from 'react-bootstrap';

import './SofarForm.css';

export default class SofarForm {

  static displayName = 'SofarForm';

  static propTypes = {
    startingPoint: PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
    geolocate: PropTypes.func.isRequired,
    setStartingPosition: PropTypes.func.isRequired,
  };

  onSuggestSelect(suggest) {
    this.props.setStartingPosition(suggest);
  }

  render() {
    let {
      startingPoint,
      geolocate,
    } = this.props;

    return (
      <form className="SofarForm">
        <div className="form-group">
          <label htmlFor="position">Start Position</label>
          <div className="form-control" id="position">
            <Geosuggest
              placeholder="Position"
              value={ startingPoint.label }
              onSuggestSelect={this.onSuggestSelect}
              location={new google.maps.LatLng(53.558572, 9.9278215)}
              radius="20" />
            <Button title="Geolocation" onClick={ geolocate }>
              <i className="fa fa-map-marker"></i>
            </Button>
          </div>
        </div>
      </form>
    );
  }

}
