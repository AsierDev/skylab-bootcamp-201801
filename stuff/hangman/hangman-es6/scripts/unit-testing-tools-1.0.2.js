/**
 * Unit Testing Tools
 * 
 * @version 1.0.2
 * @author manuelbarzi
 */

/**
 * Evaluates a value against an expected result.
 * 
 * @param {*} value - A value to test against an expectation.
 */
function should(value) {
    return {
        be: function(expected) {
            if (value !== expected) throw new Error('condition not accomplished, expected ' + expected + ' but got ' + value);
        }
    };
}

/**
 * Runs a unit test.
 * 
 * @param {function} unit - A unit test.
 */
function test(unit) {
    try {
        unit();

        console.log('TEST', unit.name, 'PASSED');
    } catch(err) {
        console.error('TEST', unit.name, 'NOT PASSED', err.message);
    }
}