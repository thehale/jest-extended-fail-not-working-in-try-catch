function invokeWithTry(callback) {
  try {
    return callback();
  } catch (err) {
    return err;
  }
}


test("fail works in a try/catch", () => {
  const result = invokeWithTry(() => expect().fail("expected failure")); // Erroneously passes
  expect(result).toBeUndefined(); // Actually fails here
});
