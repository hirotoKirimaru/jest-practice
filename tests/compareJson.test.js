describe('OKStatus', () => {
    test('完全比較', () => {
        const response = require("./resources/_200statusBody.json");
        const expected = 
        { "hello":"Hello, Tom!"

        };
        expect(response).toEqual(expected);
    });
})