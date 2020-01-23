import Validator from '../validator';

test.each([
  ['good case vova', 'vova', true],
  ['bad case 123', '123', false],
  ['bad case vova_', 'vova_', false],
  ['bad case vovaЁмаё', 'vovaЁмаё', false],
  ['bad case Zhukovvlad', 'Zhukovvlad', true],
  ['bad case _hackerPlace', '_hackerPlace', false],
])(
  ('should calculate %s'),
  (userCase, name, expected) => {
    const valName = new Validator(name);
    const result = valName.validateUsername();

    expect(result).toBe(expected);
  },
);
