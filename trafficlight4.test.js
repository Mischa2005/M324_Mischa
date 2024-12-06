const app = require("./trafficlight");

describe('test suite traffic light', () => {
    it(`case undefined light`, () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });
});
