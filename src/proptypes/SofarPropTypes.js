import { PropTypes } from 'react';

export const coordinates = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
});

export const location = PropTypes.shape({
  label: PropTypes.string,
  coords: coordinates.isRequired,
});
