const {inject, verifyPassword, SATURDAY} = require('./password-verifier-time01-modular');

xdescribe('verifyPassword', () => {
    describe('when its the weekend', () => {
        it('throws an error', () => {
            const reset  = inject({
                // note that we are
                //strongly ties into the interface of the external dependency
                // when that interface changes,
                // we will have to change our tests as well.
                // and that sucks for everyone.
                moment: function(){
                    return {
                        day: () => SATURDAY
                    }
                }
            });

            expect(()=>verifyPassword('any input'))
                .toThrowError("It's the weekend!");

            reset();
        });
    });
});