const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(shuffleArray([])).toStrictEqual([])
    })

    test('array', () => {
        expect(typeof { value: 'value' }).toBe('object')
    })
});