const LOCATIONS_SPACING = 0.1;
const LOCATIONS_COMPUTE_MAX = 3;
const BASE_ESTIMATED_DURATION = 1;
function randomEstimationDuration(deltaX, deltaY) {
  return BASE_ESTIMATED_DURATION * euclidianDistance(deltaX, deltaY) * getRandomArbitrary(0.8, 1.4);
}

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
      let deltaX = i * LOCATIONS_SPACING;
      let deltaY = j * LOCATIONS_SPACING;
      destinationsLocations.push({
        location: {
          latitude: startLocation.latitude + deltaX,
          longitude: startLocation.longitude + deltaY,
        },
        estimatedDuration: randomEstimationDuration(deltaX, deltaY),
      });
    }
  }
  return destinationsLocations;
}


function euclidianDistance(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
