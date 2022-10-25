import sensitiveWords from '.';

test('Replaces a single word with asterisks', () => {
  const message = 'The name of the NX will be egghead application';
  expect(sensitiveWords(message, ['application']))
    .toBe('The name of the NX will be egghead ****');
});

test('Replaces a multiple words with asterisks', () => {
  const message = 'The name of the NX will be egghead application, The Application will be awesome';
  expect(sensitiveWords(message, ['application']))
    .toBe('The name of the NX will be egghead ****, The **** will be awesome');
});
