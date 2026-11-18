test('badly named test', () => {
    const fakeRule = input => ({passed: false, reason: 'fake reason'});

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toMatch('fake reason');
});