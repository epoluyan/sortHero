import orderByProps from '../sortHero';

test('should sort characters hero', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { level: 2 },
    { name: 'мечник' },
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
  ];

  expect(result).toEqual(orderByProps(obj, ['level', 'name']));
});

test('should sort characters hero', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { health: 10 },
    { attack: 80 },
    { defence: 40 },
    { level: 2 },
    { name: 'мечник' },
  ];

  expect(result).toEqual(orderByProps(obj, ['health']));
});

test('should sort characters if properties not in objects', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ];

  expect(result).toEqual(orderByProps(obj, ['test']));
});


test('should sort characters if properties empty', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = [
    { attack: 80 },
    { defence: 40 },
    { health: 10 },
    { level: 2 },
    { name: 'мечник' },
  ];

  expect(result).toEqual(orderByProps(obj, []));
});
