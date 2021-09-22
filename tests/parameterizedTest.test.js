// コピペ
// https://jestjs.io/docs/api#describeeachtablename-fn-timeout

describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });
  
    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });
  
    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  });

  // イケてない。
  describe.each([
    {aa: 1, b: 1, expected: 2},
    {aa: 1, b: 2, expected: 3},
    {aa: 2, b: 1, expected: 3},
  ])('table .add($aa, $b)', ({aa, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(aa + b).toBe(expected);
    });
  
    test(`returned value not be greater than ${expected}`, () => {
      expect(aa + b).not.toBeGreaterThan(expected);
    });
  
    test(`returned value not be less than ${expected}`, () => {
      expect(aa + b).not.toBeLessThan(expected);
    });
  });

  describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});