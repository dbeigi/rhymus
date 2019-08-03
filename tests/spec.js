const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
// const should = chai.should()

const puzzlesArray = require('../src/js/puzzles')

describe('Rhymus Test Suite', () => {
    describe('Puzzles Tests', () => {
        it('should exists', () => {
            expect(puzzlesArray).to.not.be.null
            expect(puzzlesArray).to.not.be.undefined
        })
        it('should have required properties', () => {
            puzzlesArray.forEach((e) => {
                expect(e.id).to.not.be.undefined
                expect(e.sentence).to.not.be.undefined
                expect(e.word).to.not.be.undefined
                expect(e.hint).to.not.be.undefined
                expect(e.answer).to.not.be.undefined
            })
        })
        it('should have properties with the correct types', () => {
            puzzlesArray.forEach((e) => {
                expect(typeof e.id).to.equal('number')
                expect(typeof e.sentence).to.equal('string')
                expect(typeof e.word).to.equal('string')
                expect(typeof e.hint).to.equal('string')
                expect(typeof e.answer).to.eql('string')
            })
        })
    })

    describe('Game Logic Tests', () => {
        it('should eventually have tests', () => {
            expect(1).to.equal(1)
        })
    })
})