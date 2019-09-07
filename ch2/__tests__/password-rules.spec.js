const rules = require('../password-rules');

describe('one uppercase rule', function () {
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

describe('v2 one uppercase rule', function () {
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

describe('v3 one uppercase rule', function () {
  test.each`
    input | expected
    ${'Abc'} | ${true}
    ${'aBc'} | ${true}
    ${'abc'} | ${false}
    `('given $input', ({ input, expected }) => {
    const result = rules.oneUpperCaseRule(input);
    expect(result.passed).toEqual(expected);
  });
});
