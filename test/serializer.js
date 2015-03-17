/* globals describe, it */

describe('Serializer', function() {
    describe('wrapper', function() {
        it('should be added on a single object', function () {
        });
        it('should be added on a list', function () {
        });
        it('should not add be added on every objects for list', function () {
        });
    });
    describe('field', function() {
        it('should not be present if they start with _', function () {
        });
        it('should transform _id to id', function () {
        });
    });
    describe('type', function() {
        it('should be conserved for numbers', function () {
        });
        it('should be conserved for booleans', function () {
        });
        it('should be conserved for strings', function () {
        });
        it('should be transformed to iso string for date', function () {
        });
        it('should convert mongoose id to string', function () {
        });
    });
});
