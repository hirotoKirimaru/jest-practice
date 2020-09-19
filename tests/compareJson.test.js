describe('StatusCode 200', () => {
    const response = require("./resources/200/01.json");

    test('完全比較', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": "2020091910011234",
            "update_date": "2020092010023456"
        };
        expect(response).toEqual(expected);
    });
})