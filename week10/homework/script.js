function sayLearn (){
    console.log('Я учу JavaScript!');
}
sayLearn ();

let image = document.getElementById('elem-img');
console.log(image);

function nextImage() {
image.src = "./assets/images/gray_cat.jpg";
}
function previousImage() {
    image.src = "./assets/images/ginger-cats.jpg" ;
    }
