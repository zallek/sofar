import React, { PropTypes } from 'react';
import { Input } from 'react-bootstrap';


const SofarForm = React.createClass({

  displayName: 'SofarForm',

  propTypes: {
    startPosition: PropTypes.string,
  },

  render() {
    let { startPosition } = this.props;
    return (
      <form className="SofarForm">
        <div className="form-group">
          <label htmlFor="startPosition">Start Position</label>
          <Input type="text" className="form-control" id="startPosition" placeholder="Position" value={startPosition} />
        </div>
      </form>
    );
  },

});

export default SofarForm;
