// Add your JavaScript code here
let currentPage = 1;
const pages = document.querySelectorAll('.page');

function showPage(pageNumber) {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  document.getElementById(`page${pageNumber}`).classList.add('active');
}

function nextPage() {
  if (currentPage < pages.length) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);
});
