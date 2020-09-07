import {PasswordVerifier} from "./password-verifier-time03";
import {RealTimeProvider} from "./real-time-provider";

export const makeVerifier = (rules: any[]):PasswordVerifier => {
    return new PasswordVerifier(rules, new RealTimeProvider());
};
