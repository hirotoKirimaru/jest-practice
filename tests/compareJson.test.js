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

    
    test('完全比較(ファイル)', () => {
        const expected = require("./resources/200/completeExpected.json");
        expect(response).toEqual(expected);
    });



    test('時間を完全無視', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": expect.anything(),
            "update_date": expect.anything()
        };
        expect(response).toEqual(expected);
    });

    test('時間を年月日まで無視(OKにさせる)', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": expect.stringMatching("2020091910.*"),
            "update_date": expect.stringMatching("2020092010.*")
        };
        // 下記ならちゃんと失敗してくれる
        // "update_date": expect.stringMatching("2020091910.*")

        expect(response).toEqual(expected);
    });


    test('時間を年月日まで無視(NGにさせる)', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": expect.stringMatching("2020091910.*"),
            "update_date": expect.stringMatching("2020091910.*")
        };
        expect(response).not.toEqual(expected);
    });

    test('順番は無視（項目数は一致）', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": expect.arrayContaining([
                "chin-pan",
                "gorilla",
                "human"
            ]),
            "generate_date": expect.anything(),
            "update_date": expect.anything()
        };

        expect(response).toEqual(expected);
    });

    test('順番は無視（項目数が少ない_NG_にならない！？）', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": expect.arrayContaining([
                "chin-pan",
                "gorilla"
            ]),
            "generate_date": expect.anything(),
            "update_date": expect.anything()
        };

        // arrayContainingつかうなら、サイズも見ておいたほうが良さそうだ
        expect(response.animals.length).toBe(3);
        expect(response).toEqual(expected);
    });


    test('項目数が多い_NG', () => {
        const expected =
        {
            "hello": "Hello, Tom!",
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": expect.anything(),
            "update_date": expect.anything(),
            "user": "aiueo"
        };

        expect(response).not.toEqual(expected);
    });


    test('項目数が少ない_NG', () => {
        const expected =
        {
            "animals": [
                "gorilla",
                "chin-pan",
                "human"
            ],
            "generate_date": expect.anything(),
            "update_date": expect.anything()
        };

        expect(response).not.toEqual(expected);
    });
})