const db = require("./db");
const {
  getUsersWithLimit,
  updateJobAreaOfUser,
  deleteUser,
  searchUsers,
} = require("./query");
const users = require("../data/users.json");

describe("query 테스트", () => {
  beforeAll(async () => {
    try {
      await db.query(`
        CREATE TABLE users
        (
          id INT NOT NULL AUTO_INCREMENT,
          name VARCHAR(100) NOT NULL,
          job_area VARCHAR(100) NOT NULL,
          PRIMARY KEY (id)
        );
      `);

      for ({ name, jobArea } of users) {
        await db.query(`
        INSERT INTO users
        (
          name, job_area
        )
        VALUES
        (
          '${name}',
          '${jobArea}'
        )
        `);
      }
    } catch (err) {
      console.log(err);
    }
  });

  afterAll(async () => {
    await db.query(`
      DROP TABLE users;
    `);

    await db.end();
  });

  test("유저의 정보 가져오기", async () => {
    const [allUsers] = await getUsersWithLimit();
    expect(allUsers.length).toBe(100);

    const [users] = await getUsersWithLimit(5);
    expect(users.length).toBe(5);
  });

  test("유저의 JobArea 필드 수정하기", async () => {
    await updateJobAreaOfUser("Dakota", "Programming");

    const [dakota] = await db
      .query(`SELECT * FROM users WHERE name='Dakota'`)
      .then(([data]) => data);

    expect(dakota.job_area).toBe("Programming");

    await updateJobAreaOfUser("Shannon", "Developer");

    const [shannon] = await db
      .query(`SELECT * FROM users WHERE name='Shannon';`)
      .then(([data]) => data);

    expect(shannon.job_area).toBe("Developer");
  });

  test("유저 정보 삭제하기", async () => {
    await deleteUser("Shannon");

    const [shannon] = await db
      .query(`SELECT * FROM users WHERE name='Shannon';`)
      .then(([data]) => data);

    expect(shannon).toBeUndefined();

    await deleteUser("Maida");

    const [maida] = await db
      .query(`SELECT * FROM users WHERE name='Maida';`)
      .then(([data]) => data);

    expect(maida).toBeUndefined();
  });

  test("유저의 정보 이름으로 검색하기", async () => {
    const [result1] = await searchUsers("ev");
    expect(result1.length).toBe(2);

    const result2 = await searchUsers("");
    expect(result2).toEqual([]);

    const [result3] = await searchUsers("aklsjdlkj");
    expect(result3).toEqual([]);

    const [result4] = await searchUsers("ja");
    expect(result4.length).toBe(4);
  });
});
