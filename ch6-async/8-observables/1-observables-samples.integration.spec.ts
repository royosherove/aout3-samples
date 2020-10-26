import { ingredients, pizzaCookBook$ } from "./A-observables-samples";

describe("delayed observable", () => {
  test("this test takes 2 seconds", (done) => {
    const obs = pizzaCookBook$();
    let found = 0;
    obs.subscribe((val) => {
      console.log(val);
      found++;
      if (found === ingredients.length) {
        done();
      }
    });
  });
});
