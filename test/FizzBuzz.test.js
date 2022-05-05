const FizzBuzzService = require('../models/FizzBuzzService');

describe("Unit Tests for FizzBuzz class", () => {

    test('1) Test', () => {
        const explorer1 = {name: "Explorer1", score: 1}
        expect(FizzBuzzService.appliValidationInExplorer(explorer1)).toEqual({name: "Explorer1", score: 1, trick: 1} );
    })

    test('2) Test', () => {
        const explorer3 = {name: "Explorer3", score: 3}
        expect(FizzBuzzService.appliValidationInExplorer(explorer3)).toEqual({name: "Explorer3", score: 3, trick: 'FIZZ'} );
    })

    test('3) Test', () => {
        const explorer5 = {name: "Explorer5", score: 5}
        expect(FizzBuzzService.appliValidationInExplorer(explorer5)).toEqual({name: "Explorer5", score: 5, trick: 'BUZZ'} );
    })

    test('4) Test', () => {
        const explorer15 = {name: "Explorer15", score: 15}
        expect(FizzBuzzService.appliValidationInExplorer(explorer15)).toEqual({name: "Explorer15", score: 15, trick: 'FIZZBUZZ'} );
    })

    test('5) Test Fail', () => {
        const explorer0 = {name: "Explorer0", score: 100}
        expect(FizzBuzzService.appliValidationInExplorer(explorer0)).toEqual({name: "Explorer0", score: 100, trick: 100} );
    })

});