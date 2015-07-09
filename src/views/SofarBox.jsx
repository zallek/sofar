import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import SofarForm from 'components/SofarForm';
import SofarMap from 'components/SofarMap';
import * as SofarActions from 'actions/SofarActions';
import * as SofarPropTypes from 'proptypes/SofarPropTypes';
import { DEFAULT_MAP_CENTER } from 'config';

import './SofarBox.css';


@connect(state => ({
  startLocation: state.sofar.startLocation,
  destinationLocations: state.sofar.destinationLocations,
}))
export default class SofarBox {

  static displayName = 'SofarBox';

  static propTypes = {
    startLocation: SofarPropTypes.location,
    destinationLocations: PropTypes.arrayOf(SofarPropTypes.location),
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { startLocation, destinationLocations, dispatch } = this.props;

    return (
      <div className="SofarBox">
        <SofarForm
          startLocation={ startLocation }
          { ...bindActionCreators(SofarActions, dispatch) }
        />
        <SofarMap
          center={ startLocation ? startLocation.location : DEFAULT_MAP_CENTER }
          startLocation={ startLocation }
          destinationLocations={ destinationLocations }
        />
      </div>
    );
  }

}
