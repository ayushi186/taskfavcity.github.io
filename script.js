const images =["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg"];
let currentImageIndex = 0;

const previousBtn  = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const img = document.querySelector("img");

previousBtn.addEventListener("click" ,  function(){
  currentImageIndex = currentImageIndex === 0 ? images.length -1 : currentImageIndex-1 ;
  img.src = images[currentImageIndex] ;
});
nextBtn.addEventListener("click" , function( ) {
  currentImageIndex = (currentImageIndex +1 ) % images.length;
  img.src = images[currentImageIndex];
  console.log(currentImageIndex)

});


const darkLghtbtn = document.querySelector('#dark');
darkLghtbtn.addEventListener("click" , function(){
    document.body.classList.toggle("dark");});