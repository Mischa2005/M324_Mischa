const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case orange light`, () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });
});
