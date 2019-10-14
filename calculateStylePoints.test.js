const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  it('should work for diffrent notes', () => {
    const testNotes = [17, 16.5, 18.5, 17.5, 18.5]
    const actual = calculateStylePoints(testNotes);

    const expected = '53';

    assert.equal(actual, expected);
  });
  it('should work for the same notes', () => {
    const testNotes = [19, 19, 19, 19, 19]
    const actual = calculateStylePoints(testNotes);

    const expected = '57';

    assert.equal(actual, expected);
  });
  it('should work for notes in integers', () => {
    const testNotes = [17.5, 17, 17.5, 18, 17.5]
    const actual = calculateStylePoints(testNotes);

    const expected = '52.5';

    assert.equal(actual, expected);
  });
  it('should work for notes not only in integers', () => {
    const testNotes = [18.5, 18, 18.5, 18.5, 18.5]
    const actual = calculateStylePoints(testNotes);

    const expected = '55.5';

    assert.equal(actual, expected);
  });

});
