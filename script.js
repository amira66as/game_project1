/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const puzzles = document.querySelectorAll('.puzzle');
    puzzles.forEach(puzzle => {
      puzzle.addEventListener('click', function() {
        const puzzleNumber = puzzle.getAttribute('data-puzzle');
        // نمایش یک پیام ساده؛ این بخش می‌تواند به یک مدال یا صفحه اختصاصی تبدیل شود.
        alert('شما معمای ' + puzzleNumber + ' را انتخاب کرده‌اید. جزئیات معما به زودی نمایش داده می‌شود.');
      });
    });
  });
  