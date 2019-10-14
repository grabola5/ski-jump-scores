const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should work for distance in integers', () => {
            const actual = calculateDistancePoints(111, 109, 98);

            const expected = '86';

            assert.equal(actual, expected);
        });

        it('should work for distance not only in integers', () => {
            const actual = calculateDistancePoints(106.5, 109, 98);

            const expected = '77';

            assert.equal(actual, expected);
        });
    });

    describe('hillSize', () => {
        it('should work for normal hill', () => {
            const actual = calculateDistancePoints(106, 109, 98);

            const expected = '76';

            assert.equal(actual, expected);
        });

        it('should work for large hill', () => {
            const actual = calculateDistancePoints(134, 134, 120);

            const expected = '85.2';

            assert.equal(actual, expected);
        });

        it('should work for ski flying hill', () => {
            const actual = calculateDistancePoints(227.5, 225, 200);

            const expected = '153';

            assert.equal(actual, expected);
        });
    });

    describe('kPoint', () => {
        it('should work if competitor exceeded kPoint', () => {
            const actual = calculateDistancePoints(131, 134, 120);

            const expected = '79.8';

            assert.equal(actual, expected);
        });

        it('should work if competitor did not exceed kPoint', () => {
            const actual = calculateDistancePoints(170, 225, 200);

            const expected = '84';

            assert.equal(actual, expected);
        });
    });
});
