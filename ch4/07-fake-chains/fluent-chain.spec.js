const sinon = require('sinon');

function verifyPasswordHierarchy (nestedObject) {
  if (nestedObject.config.settings.canWork()) {
    nestedObject.config.log.info('am working!');
  } else {
    nestedObject.config.log.info('am not working!');
  }
}

function verifyPasswordFluent (fluentObject) {
  // fluentObject.config.settings //?
  if (fluentObject.config().settings().canWork()) {
    fluentObject.config().log().info('am working!');
  } else {
    fluentObject.config().log().info('am not working!');
  }
}

describe('test somethign that uses the nested hierarchy fake chain', () => {
  test('simple hierarchy', () => {
    const fakeNested = {
      config: {
        settings: { canWork: () => true },
        log: { info: sinon.stub() }
      }
    };
    verifyPasswordHierarchy(fakeNested);

    sinon.assert.calledWith(fakeNested.config.log.info, 'am working!');
  });
});

describe('test somethign that uses a fluent fake chain', () => {
  test('fluent test', () => {
    const fakeNested = {
      info: sinon.stub(),
      canWork: () => true
    };
    fakeNested.config = () => fakeNested;
    fakeNested.settings = () => fakeNested;
    fakeNested.log = () => fakeNested;

    verifyPasswordFluent(fakeNested);

    sinon.assert.calledWith(fakeNested.info, 'am working!');
  });
});
