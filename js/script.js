// const spanSeeAll = document.querySelectorAll('.toggle');
// const btnSeeAll = document.getElementById('ver-mais');

// function showAll() {
//   spanSeeAll.forEach(item => item.classList.toggle('hidden'));
//   if (btnSeeAll.textContent === 'VER MENOS') {
//     return btnSeeAll.textContent = 'VER MAIS'
//   } else {
//     return btnSeeAll.textContent = 'VER MENOS'
//   }
// }

// btnSeeAll.addEventListener('click', showAll());


const images = document.querySelectorAll(".img-modal");
let imgSrc;
console.log(images)
// get images src onclick
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};
