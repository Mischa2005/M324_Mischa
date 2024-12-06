const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case green light`, () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });
});
