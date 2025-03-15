/* js/script.js */
document.addEventListener('DOMContentLoaded', function() {
  // رویداد فرم معمای ۱
  const puzzle1Form = document.getElementById('puzzle1-form');
  if (puzzle1Form) {
    puzzle1Form.addEventListener('submit', function(e) {
      e.preventDefault();
      const answer = puzzle1Form.answer.value.trim();
      // پاسخ صحیح نمونه برای معما ۱ (می‌توانید تغییر دهید)
      if (answer === "X9Z7Q") {
        alert("پاسخ صحیح است! به معمای بعدی بروید.");
      } else {
        alert("پاسخ نادرست. دوباره تلاش کنید.");
      }
    });
  }
  
  // رویداد فرم معمای ۲
  const puzzle2Form = document.getElementById('puzzle2-form');
  if (puzzle2Form) {
    puzzle2Form.addEventListener('submit', function(e) {
      e.preventDefault();
      const answer = puzzle2Form.answer.value.trim();
      // پاسخ صحیح نمونه برای معما ۲ (قابل تغییر)
      if (answer === "29") {
        alert("پاسخ صحیح است! ادامه دهید.");
      } else {
        alert("پاسخ نادرست. دوباره تلاش کنید.");
      }
    });
  }
});
