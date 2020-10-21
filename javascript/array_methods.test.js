const { usersHandler, wordCount } = require("./array_methods");
const lorem = require("../data/lorem.json");
const users = require("../data/users.json");

describe("map, filter 사용하는 usersHandler 함수 테스트", () => {
  test("함수 동작 확인", () => {
    const result = usersHandler(users, "Data");
    expect(result.length).toBe(5);
    expect(result[3]).toHaveProperty("language", "JavaScript");

    const result2 = usersHandler(users, "Marketing");
    expect(result2.length).toBe(2);
    expect(result2[0]).toHaveProperty("language", "JavaScript");
  });

  test("filter 되지 않은 경우", () => {
    const result = usersHandler(users, "askdlfjklsadjf");
    expect(result.length).toBe(0);
  });
});

describe("wordCount 함수 테스트", () => {
  test("object return", () => {
    expect(typeof wordCount("good great. as 9")).toEqual("object");
  });

  test("함수 동작 확인", () => {
    const wordsCounted = wordCount(lorem);

    expect(wordsCounted.qui).toBe(17);
    expect(wordsCounted["qui."]).toBe(3);
    expect(wordsCounted.veniam).toBe(11);
    expect(wordsCounted.Commodo).toBe(2);
    expect(wordsCounted.Et).toBe(4);
    expect(wordsCounted.asdf).toBeUndefined();
  });

  test("빈 문자열 예외처리", () => {
    expect(wordCount("")).toEqual({});
  });
});
