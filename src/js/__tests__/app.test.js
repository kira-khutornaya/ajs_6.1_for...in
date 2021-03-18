import orderByProps from '../app';

describe('orderByProps:', () => {
  const object = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  test('should return object', () => {
    expect(orderByProps(object, ['level', 'name', 'attack'])).toMatchObject([
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('should work correctly if there are no keys with this name in the object', () => {
    expect(orderByProps(object, ['health', 'type', 'level'])).toMatchObject([
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  test('should work correctly with empty array', () => {
    expect(orderByProps(object, [])).toMatchObject([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});
