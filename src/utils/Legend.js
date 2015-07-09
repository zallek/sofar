import Color from 'color';
import _ from 'lodash';


export function computeLegend(values, nbParts, { color: { minHue = 120, maxHue = 0, saturation = 60, lightness = 60 } = {} } = {}) {
  let rangeValues = createRange(_.min(values), _.max(values), nbParts);
  let rangeColors = createRange(0, 1, nbParts - 1);
  let legendColors = computeRangeColors(rangeColors, { minHue, maxHue, saturation, lightness });

  let legend = [];
  for (let i = 0; i < nbParts; i++) {
    legend.push({
      min: rangeValues[i],
      max: rangeValues[i + 1],
      color: legendColors[i],
    });
  }
  return legend;
}

/**
 * @param  {Array<Number>} range Array of number 0 <= x <= 1
 * @param  {Number} options.minHue     < 256
 * @param  {Number} options.maxHue     < 256
 * @param  {Number} options.saturation < 256
 * @param  {Number} options.lightness < 256
 * @return {Array<String>} Array of Hexa color corresponding to given range
 */
function computeRangeColors(range, { minHue, maxHue, saturation, lightness }) {
  return range.map(val => {
    let hue = minHue + ( maxHue - minHue ) * val;
    return Color().hsl(hue, saturation, lightness).hexString();
  });
}

export function createRange(min, max, nbParts) {
  let range = [];
  for (let i = 0; i < nbParts + 1; i++) {
    let newVal = min + (max - min) * i / nbParts;
    range.push(newVal);
  }
  return range;
}
