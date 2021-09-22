
describe.each`
  input| expected
  ${"123"} | ${123}
  ${"-123.45"} | ${-123.45}
  ${"-123,45"} | ${NaN}
  ${"-123,45円"} | ${NaN}
`('Number: $input', ({input, expected}) => {
  test(`returns ${expected}`, () => {
    expect(Number(input)).toBe(expected);
  });
});

describe.each`
  input| expected
  ${"123"} | ${123}
  ${"-123.45"} | ${-123} // dot
  ${"-123,45"} | ${-123} // comma
  ${"-123,45円"} | ${-123}
`('parseInt: $input', ({input, expected}) => {
  test(`returns ${expected}`, () => {
    expect(parseInt(input)).toBe(expected);
  });
});

describe.each`
  input| expected
  ${"123"} | ${123}
  ${"-123.45"} | ${-123.45} // dot
  ${"-123,45"} | ${-123} // comma
  ${"-123,45円"} | ${-123}
`('parseFloat: $input', ({input, expected}) => {
  test(`returns ${expected}`, () => {
    expect(parseFloat(input)).toBe(expected);
  });
});

describe.each`
  input| expected
  ${"123"} | ${123}
  ${"-123.45"} | ${-123.45} // dot
  ${"-123,45"} | ${-12345} // comma
  ${"-123,45円"} | ${-12345}
  ${"123,456,789"} | ${123456789}
`('separator を 正しく処理する: $input', ({input, expected}) => {
  test(`returns ${expected}`, () => {
    expect(parseFloat(input.replace(/,/g, ""))).toBe(expected);
  });
});



// ついでにStringも。
test('toString: -123 -> "-123"', () => {
  expect(String(-123)).toBe("-123");
});