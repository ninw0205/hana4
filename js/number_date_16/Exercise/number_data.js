const x = new Date("1970-01-01");
const y = new Date("1970-01-02");
console.log((y - x) / 1000);

const z = new Date("2025-09-03");
const week = ["일", "월", "화", "수", "목", "금", "토"];
console.log("🚀 ~ z.getDay", week[z.getDay()] + "요일");

const today = new Date(2024, 8, 104);
console.log(today.toDateString());
