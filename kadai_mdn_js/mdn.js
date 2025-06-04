// 今日の日付を取得  
const today = new Date();  
  
// 年を取得（例: 2024）  
const year = today.getFullYear();  
  
// 月を取得（月は0〜11なので、1を足す、例: 10）  
const month = today.getMonth() + 1;  
  
// 日を取得（例: 12）  
const date = today.getDate();  
  
// 指定の形式でコンソール出力（例: 2024年10月12日）  
console.log(`${year}年${month}月${date}日`);  