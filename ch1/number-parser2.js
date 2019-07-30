


class NumberParser2 {
    wasCalled =false;

    /**
     *
     * @returns {boolean}
     */
    wasSumCalled() {
        return this.wasCalled;
    }

    /**
     * Our "production" code to be tested.
     * @param {string} numbers
     * @returns {number}
     */
    sum(numbers) {
        this.wasCalled = true;
        let [a, b] = numbers.split(",");
        return Number.parseInt(a) +
            Number.parseInt(b);
    }

}

/*
I'm using the module.exports for comparability with Node syntax for modules.
 This way we won't have to use any transpiler to run this code.
*/
module.exports = NumberParser2;
