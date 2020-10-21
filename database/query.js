const db = require("./db");

/**
 * users 테이블의 유저를 불러 올 수 있도록 쿼리문을 작성해 주세요
 *
 * 1. limit 이 인자로 들어오지 않는 경우에는 모든 유저를 불러오게 함
 * 2. limit 이 인자로 들어올 때에는 해당하는 수만큼 유저의 정보가 불러오게 함
 *
 * 위 두가지 조건을 만족하는 하나의 쿼리문을 작성하세요
 *
 * @param {integer} limit
 */
const getUsersWithLimit = (limit = null) => {
  return db.query(`SELECT * FROM users ${limit ? `LIMIT ${limit}` : ''};`)
};

/**
 * 유저의 name, job_area 를 인자로 받아서
 * 같은 이름을 가진 유저의 job_area(데이의베이스 테이블의 필드는 snake_case가 컨벤션)를
 * 수정하는 쿼리를 작성해 주세요
 *
 * @param {string} name
 * @param {srting} job_area
 *
 */
const updateJobAreaOfUser = (name, job_area) => {
  return db.query(`UPDATE users SET job_area="${job_area}" WHERE name="${name}";`);
};

/**
 * 유저의 name 을 인자로 받아서
 * users 테이블에서 해당 name 을 가진 user row를
 * 삭제하는 쿼리를 작성해 주세요
 *
 * @param {string} name
 */
const deleteUser = (name) => {
  return db.query(`DELETE FROM users WHERE name="${name}"`);
};

/**
 * 검색을 한다고 가정하고 keyword 가 인자로 들어올 때,
 * 유저의 이름에 keyword 가 포함되어 있을 경우 (ex. keyword로 ar 이 들어올 때, Mark, Aron 이 검색되야 함)
 * 유저의 정보를 불러오는 쿼리를 작성해 주세요
 *
 * + keyword 가 빈 스트링 일때에는 빈 배열을 리턴하도록 해 주세요
 *
 * @param {string} keyword
 */
const searchUsers = (keyword) => {
  if (keyword.length > 1) {
    return db.query(`SELECT * FROM users WHERE users.name LIKE '%${keyword}%'`);
  } else {
    return [];
  }
  
};

module.exports = {
  getUsersWithLimit,
  updateJobAreaOfUser,
  deleteUser,
  searchUsers,
};
