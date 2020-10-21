const { readFilePromise } = require("./async");

describe("fs.readFile 함수 프로미스화 구현 테스트", () => {
  test("file 읽기 성공", async () => {
    const data = await readFilePromise("./data/users.json");
    expect(JSON.parse(data).length).toBe(100);
  });

  test("file 읽기 실패 예외처리", async () => {
    try {
      const data = await readFilePromise("asdlf.json");
      const err = new Error();
      throw err;
    } catch (err) {
      expect(err).toBe("fail");
    }
  });
});
