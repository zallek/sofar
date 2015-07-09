import { PropTypes } from 'react';

export const rawLocation = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
});

export const location = PropTypes.shape({
  label: PropTypes.string,
  location: rawLocation.isRequired,
});
