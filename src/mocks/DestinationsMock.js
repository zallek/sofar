const LOCATIONS_SPACING = 0.1;
const LOCATIONS_COMPUTE_MAX = 3;

/**
 * @param  {RawLocation} startLocation
 * @return {Array<RawLocation>}
 */
export function computeDestinationLocations(startLocation) {
  let destinationsLocations = [];
  for (let i = -LOCATIONS_COMPUTE_MAX; i < LOCATIONS_COMPUTE_MAX; i++) {
    for (let j = -LOCATIONS_COMPUTE_MAX; j < LOCATIONS_COMPUTE_MAX; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      destinationsLocations.push({
        location: {
          latitude: startLocation.latitude + i * LOCATIONS_SPACING,
          longitude: startLocation.longitude + j * LOCATIONS_SPACING,
        },
      });
    }
  }
  return destinationsLocations;
}
