import sensitiveWords from '.';

test('Says hello world', () => {
  expect(sensitiveWords()).toBe('Hello world');
});
