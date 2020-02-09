import {RealTimeProvider} from "../03-ts-inject-interface/time-provider-interface";
const {PasswordVerifier} = require("./password-verifier-time02");

const passwordVerifierFactory = (rules) => {
    return new PasswordVerifier(new RealTimeProvider())
};

module.exports = {
    passwordVerifierFactory
};
