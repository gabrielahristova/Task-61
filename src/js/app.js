import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let priceElements = document.querySelectorAll('.price');
  for(var i=0; i<=priceElements.length; i++){
    if(priceElements[i].classList.contains("hot")){
      priceElements[i].innerHTML+= '🔥';
    }
  }
});
