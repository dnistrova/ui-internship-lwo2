/* eslint max-len: ["error", { "code": 100 }] */

export function telephoneCheck(str) {
  const phoneUSregEx = /^\s*1?\s*((\(\d{3}\))|(\d{3}))\s*-?\s*(\d{3})\s*-?\s*(\d{4})\s*$/;
  return Boolean(str.match(phoneUSregEx));
}
