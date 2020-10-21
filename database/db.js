const mysql = require("mysql2/promise");

/**
 *
 * 미리 MySQL 서버가 로컬에 설치되어 있어야 합니다.
 *
 * 다음 링크를 참조해서 로컬 MySQL 서버와 연동할 수 있도록
 * 아래 네가지 환경 변수를 작성해 주세요.
 * https://www.npmjs.com/package/mysql2
 *
 * 환경 변수 작성 후 createPool 함수의 주석을 삭제하면 됩니다.
 *
 */

const DB_HOST = "localhost";
const DB_USER = "root";
const DB_NAME = "test";
const DB_PASSWORD = "Kwonlonso14!";

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD,
});

module.exports = db;
