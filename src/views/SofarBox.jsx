import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import SofarForm from 'components/SofarForm';
import SofarMap from 'components/SofarMap';
import * as SofarActions from 'actions/SofarActions';


@connect(state => ({
  startingPoint: state.sofar.startingPoint,
}))
export default class SofarBox {

  static displayName = 'SofarBox';

  static propTypes = {
    startingPoint: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { startingPoint, dispatch } = this.props;

    return (
      <div className="SofarBox">
        <SofarForm
          startingPoint={ startingPoint }
          { ...bindActionCreators(SofarActions, dispatch) }
        />
        <SofarMap
          center={{
            lat: startingPoint.position.latitude,
            lng: startingPoint.position.longitude,
          }}
        />
      </div>
    );
  }

}
