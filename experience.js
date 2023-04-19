function load(){
let head = document.getElementsByTagName("h3");
for (let i = 0; i < head.length; i++){
  if(i % 2 == 0){
    head[i].setAttribute("style", "background-image: linear-gradient(to left, rgba(255,0,0,0), rgb(31, 151, 160))");
    head[i].style.backgroundSize = "50% 100px";
    head[i].style.backgroundRepeat = "no-repeat";
    head[i].style.marginBottom = "0px";
    head[i].style.paddingLeft = "6px";
  }
}





}
document.addEventListener("DOMContentLoaded", load);