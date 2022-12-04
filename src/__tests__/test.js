import showHealth from '../app';

const characters = [
  [{ name: 'Маг', health: 100 }, 'healthy'],
  [{ name: 'Маг', health: 75 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 25 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'is dead'],
];

const handler = test.each(characters);

handler('get helthLevel for character %s', (character, expected) => {
  const result = showHealth(character);
  expect(result).toBe(expected);
});
