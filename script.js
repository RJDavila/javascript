function changeImage(){
  var image = document.getElementById('myImage');
  if(images.src.match("bulbon")){
      image.src = "image/pic_bulboff.gif"
  }else{
    images.src= "image/pic_bulbon.gif"
}
