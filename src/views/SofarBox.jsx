import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import SofarForm from 'components/SofarForm';
import SofarMap from 'components/SofarMap';
import * as SofarActions from 'actions/SofarActions';
import { DEFAULT_MAP_CENTER } from 'config';

import './SofarBox.css';

@connect(state => ({
  startingPoint: state.sofar.startingPoint,
}))
export default class SofarBox {

  static displayName = 'SofarBox';

  static propTypes = {
    startingPoint: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { startingPoint, dispatch } = this.props;
    let mapCenter = startingPoint || DEFAULT_MAP_CENTER;

    return (
      <div className="SofarBox">
        <SofarForm
          startingPoint={ startingPoint }
          { ...bindActionCreators(SofarActions, dispatch) }
        />
        <SofarMap
          center={{
            lat: mapCenter.position.latitude,
            lng: mapCenter.position.longitude,
          }}
        />
      </div>
    );
  }

}
