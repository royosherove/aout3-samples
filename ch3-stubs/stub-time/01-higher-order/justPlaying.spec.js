const _ = require('lodash');

// (function tests() {
//     // fixtures
//     var fakeRepo = {
//         fetch(userId) {
//             return { id: userId, name: "Andrew" };
//         }
//     };
//     (function should_fetch_user_from_user_repository() {
//         // arrange
//         var context = {
//             fetchUser1: fetchUser1(fakeRepo) // curried function
//         };
//         // act
//         var user = context.fetchUser1(1234);
//         // assert
//         assert.equal(user.name === "Andrew");
//     }());
// }());
//
//
//
//
// (function should_fetch_user_from_user_repository() {
//     // arrange
//     const fetch = userId => ({ id: userId, name: "Andrew" });
//     const sut = fetchUser2({ fetch });
//     // act
//     const user = sut(1234);
//     // assert
//     assert.equal(user.name === "Andrew");
// }());
//
test('fetchUser1 - currying example 1', () => {
  const fakeRepo = {
    fetch: function (userId) {
      return { id: userId, name: 'Andrew' };
    }
  };
  const preCOnfiguredFetch = fetchUser1(fakeRepo);
  const user = preCOnfiguredFetch(1234);
  // assert
  expect(user.name).toBe('Andrew');
});

function fetchUser1 (userRepo, userId) {
  if (arguments.length === 1) // currying
  {
    return function (userId) {
      return fetchUser1(userRepo, userId);
    };
  }
  return userRepo.fetch(userId);
}

//
function fetchUser2 ({ fetch }, userId) { // destructured function dependency
  return arguments.length === 1
    ? uid => fetchUser2({ fetch }, uid)
    : fetch(userId);
}

test('fetchUser2', () => {
  const fetch = userId => ({ id: userId, name: 'Andrew' });
  const preConfiguredFetchFn = fetchUser2({ fetch });
  // act
  const user = preConfiguredFetchFn(1234);
  // assert
  expect(user.name).toBe('Andrew');
});

/// /EXAMPLE 3
const fetchUser3 = _.curry(function (userRepo, userId) {
  return userRepo.fetch(userId);
});

test('fetchUser with lodash currying', () => {
  const fakeRepo = { fetch: (id) => ({ name: 'some name' }) };

  const preConfiguredFetch = fetchUser3(fakeRepo);
  const result = preConfiguredFetch(1234);

  expect(result.name).toBe('some name');
});
