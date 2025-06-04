// 現在の日時を1つのDateオブジェクトで取得  
const today = new Date();  
  
// ローカル時刻の年、月、日を取得  
const year = today.getFullYear();     // 4桁の西暦年を取得  
const month = today.getMonth() + 1;   // 0〜11の月を1〜12に変換  
const date = today.getDate();          // 1〜31の日にちを取得  
  
// YYYY年M月D日 の形式でコンソール表示  
console.log(`${year}年${month}月${date}日`);  