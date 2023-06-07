const spanSeeAll = document.querySelectorAll('.toggle');
const btnSeeAll = document.getElementById('ver-mais');

function showAll() {
  spanSeeAll.forEach(item => item.classList.toggle('hidden'));
  if (btnSeeAll.textContent === 'VER MENOS') {
    return btnSeeAll.textContent = 'VER MAIS'
  } else {
    return btnSeeAll.textContent = 'VER MENOS'
  }
}

btnSeeAll.addEventListener('click', showAll());


const images = document.querySelectorAll(".img-modal");
let imgSrc;
console.log(images)
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".main").append(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};
