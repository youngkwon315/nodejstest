const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

/**
 * 기본 내장 모듈인 fs.readFile 함수는 본래 async, await 키워드로 비동기 처리가 불가능 합니다.
 * fs.readFile 함수를 async await로 비동기 처리 할 수 있도록 구현해 주세요.
 *
 * 문제가 이해되지 않는다면 promise, async, await 에 대한 개념을 먼저 공부해 주세요.
 *
 * 필수조건: Promise 객체 사용
 *
 * @param  {...any} args
 * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
 * 상단 공식문서를 읽고, fs.readFile 함수에 어떤 인자가 들어오는지 먼저 확인하세요
 * 왜 spread syntax 로 인자를 받아야 하는지 주석으로 이유를 작성하고 push 하세요
 *
 * @returns {Promise}
 * readFile 성공시에 읽어진 데이터 리턴
 * readFile 실패시에 "fail" 문자열 반환
 */
const readFilePromise = (...args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err,data)=>{
      if (err) reject('fail');
      resolve(data);
    })
  })
};

module.exports = { readFilePromise };
