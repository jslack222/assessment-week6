const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(shuffleArray([])).toStrictEqual([])
    })

    // test('return an array', () => {
    //     let arr = [1, 2, 3, 4, 5] 
    //     let result = shuffleArray(arr)
    //     expect(result).toHaveProperty('length')
    // })   this was added in during the review not by my own knowledge

    test('array', () => {
        expect(typeof { value: 'value' }).toBe('object')
    })
});