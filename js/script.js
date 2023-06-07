const spanSeeAll = document.querySelectorAll('.toggle');
const btnSeeAll = document.getElementById('ver-mais')

function showAll() {
  spanSeeAll.forEach(item => item.classList.toggle('hidden'));
  if (btnSeeAll.textContent === 'VER MENOS') {
    return btnSeeAll.textContent = 'VER MAIS'
  } else {
    return btnSeeAll.textContent = 'VER MENOS'
  }
}

btnSeeAll.addEventListener('click', showAll());

