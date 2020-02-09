import {TimeProviderInterface} from "./time-provider-interface";
import {PasswordVerifierTime03, SUNDAY} from "./password-verifier-time03";

class FakeTimeProvider implements TimeProviderInterface{
    fakeDay: number;
    getDay(): number {
        return this.fakeDay;
    }
}

describe('inject interface through constructor', () => {
    describe('password verifier with interfaces', () => {
        test('on weekends, throws exceptions', () => {
            const stubTimeProvider = new FakeTimeProvider();
            stubTimeProvider.fakeDay = SUNDAY;
            const verifier = new PasswordVerifierTime03([], stubTimeProvider);

            expect(()=> verifier.verify('anything'))
                .toThrow("It's the weekend!");
        });
    });
});
