const rules = require('../password-rules');

describe('one upppercase rule', function () {
  test('given no uppercase, it fails', () => {
    const result = rules.oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });
  test('given one uppercase, it passes', () => {
    const result = rules.oneUpperCaseRule('Abc');
    expect(result.passed).toEqual(true);
  });
  test('given a different uppercase, it passes', () => {
    const result = rules.oneUpperCaseRule('aBc');
    expect(result.passed).toEqual(true);
  });
});

describe('v2 one upppercase rule', function () {
  test('given no uppercase, it fails', () => {
    const result = rules.oneUpperCaseRule('abc');
    expect(result.passed).toEqual(false);
  });
  test.each`
    input
    ${'Abc'}
    ${'aBc'}
    `('given one uppercase, it passes', (params) => {
    const result = rules.oneUpperCaseRule(params.input);
    expect(result.passed).toEqual(true);
  });
});

describe('v3 one upppercase rule', function () {
  test.each`
    input | expected
    ${'Abc'} | ${true}
    ${'aBc'} | ${true}
    ${'abc'} | ${false}
    `('given one uppercase, it passes', ({ input, expected }) => {
    const result = rules.oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});
