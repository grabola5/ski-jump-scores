const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('all factors', () => {
    it('should return total points for hill size, K-Point, distance, styleNotes, windFactor, gateFactor', () => {
      const test = {
        distance: 133,
        hillSize: 134,
        kPoint: 120,
        styleNotes: [18.5, 18.5, 19, 19, 19],
        windFactor: -5.1,
        gateFactor: 0,
      }
      const actual = calculateTotalPoints(test.distance, test.hillSize, test.kPoint, test.styleNotes, test.windFactor, test.gateFactor);

      const expected = '134.8';

      assert.equal(actual, expected);
    });

    it('should return total points for hill size, K-Point, distance, styleNotes, windFactor, gateFactor', () => {
      const test = {
        distance: 222,
        hillSize: 225,
        kPoint: 200,
        styleNotes: [18, 18, 18, 17.5, 18.5],
        windFactor: -5.9,
        gateFactor: 8.7,
      }
      const actual = calculateTotalPoints(test.distance, test.hillSize, test.kPoint, test.styleNotes, test.windFactor, test.gateFactor);

      const expected = '203.2';

      assert.equal(actual, expected);
    });

    it('should return total points for hill size, K-Point, distance, styleNotes, windFactor, gateFactor', () => {
      const test = {
        distance: 109,
        hillSize: 109,
        kPoint: 98,
        styleNotes: [17, 16.5, 18.5, 17.5, 18.5],
        windFactor: -17.8,
        gateFactor: 0,
      }
      const actual = calculateTotalPoints(test.distance, test.hillSize, test.kPoint, test.styleNotes, test.windFactor, test.gateFactor);

      const expected = '117.2';

      assert.equal(actual, expected);
    });
  });
});
