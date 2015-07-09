import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';
import { Button } from 'react-bootstrap';

import * as SofarPropTypes from 'proptypes/SofarPropTypes';


export default class SofarForm {

  static displayName = 'SofarForm';

  static propTypes = {
    startLocation: SofarPropTypes.location,
    geolocate: PropTypes.func.isRequired,
    setStartLocation: PropTypes.func.isRequired,
  };

  onSuggestSelect(suggest) {
    this.props.setStartLocation(suggest);
  }

  render() {
    let {
      startLocation,
      geolocate,
    } = this.props;

    return (
      <form className="SofarForm">
        <div className="form-group">
          <label htmlFor="position">Start Position</label>
          <div className="input-group" id="position">
            <Geosuggest
              placeholder="Position"
              value={ startLocation ? startLocation.label : '' }
              onSuggestSelect={::this.onSuggestSelect}
            />
            <span className="input-group-btn">
              <Button title="Geolocation" onClick={ geolocate }>
                <i className="fa fa-map-marker"></i>
              </Button>
            </span>
          </div>
        </div>
      </form>
    );
  }

}
