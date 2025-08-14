module.exports = {
  testEnvironmentOptions: { url: "http://localhost/" },
  preset: "ts-jest",
  testEnvironment: "node",
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    "url": "http://localhost/"
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
