const bowlingCalculator = require('./');
const expect = require('expect');

describe("Bowling calculator",()=>{
    it('should calculate total score without bonuses',()=>{
        const input = [[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0],[1,0]];
        expect(bowlingCalculator(input)).toBe(10);
    });

    it('should get a bonus score from next frame when there is a strike', () => {
        const input = [[0,0],[0,0],[10,0],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowlingCalculator(input)).toBe(14);
    });

    it('should calculate total score when there is a spare involved', () => {
        const input = [[5,5],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowlingCalculator(input)).toBe(13);
    });

    it('should ignore any frames after 10 frame when there is no bonus',()=>{
        const input = [[5,5],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,3]];
        expect(bowlingCalculator(input)).toBe(13);
    });

    it('should count the 11th frame when there is a bonus and the bonus is a strike',()=>{
        const input = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[10,0,1]];
        expect(bowlingCalculator(input)).toBe(12);
    });

    it("Should handle 2 spares in a row", () => {
        const input = [[5,5],[5,5],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowlingCalculator(input)).toBe(28);
    });

    it("Should handle 2 strikes in a row", () => {
        const input = [[10,0],[10,0],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowlingCalculator(input)).toBe(34);
    });

    it("Should handle two stikes and two spares in a row", () => {
        const input = [[10,0],[10,0],[5,5],[5,5],[1,1],[0,0],[0,0],[0,0],[0,0],[0,0]];
        expect(bowlingCalculator(input)).toBe(68);

    });

    it("Should handle two stikes and two spares in a row", () => {
        const input = [[0,0],[0,0],[0,0],[0,0],[0,0],[10,0],[10,0],[5,5],[5,5],[5,5, 10]];
    
        expect(bowlingCalculator(input)).toBe(100);
    });
})