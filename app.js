const cart = document.querySelector('.fa-shopping-cart');
const images = document.querySelectorAll(`.row div`);
const  hoverImage =document.querySelectorAll(`.hoverImage`);

var sum=0;
 
console.log(hoverImage);
hoverImage.forEach(hover => hover.addEventListener('mouseover',function(e){
    var css = { " width": "102%",  " -webkit-transform":"scale(1.1)", "-moz-transform":"scale(1.1)" ,   
              "-o-transform":"scale(1.1)" ,"box-shadow":"0px 0px 30px gray","-webkit-box-shadow":"0px 0px 30px gray",
                " -moz-box-shadow  ":" 0px 0px 30px gray","opacity": "1",  "transition": "0.9s"};

 for(var prop in css) {
   hover.style[prop] = css[prop];
}  

var btn= hover.lastElementChild;
    
btn.style.display="block";
btn.addEventListener('click',addToCarts);
  
}));


hoverImage.forEach(hover => hover.addEventListener('mouseleave',function(e){

hover.style.width='100%';
hover.style.removeProperty("-webkit-box-shadow");
hover.style.removeProperty("-moz-box-shadow ");
hover.style.removeProperty("box-shadow ");
hover.style.removeProperty("opacity");
hover.style.removeProperty("-moz-transform");
hover.style.removeProperty("transition");

var btn= hover.lastElementChild;
    
btn.style.display="none";
    
    
    
    
    
    
}));







function addToCarts(){

images.forEach(image => image.addEventListener('click',function(e){

       image.classList.add('clicked');
        
        console.log(image.firstElementChild.firstElementChild.src);
        console.log(image.lastElementChild.lastElementChild.textContent);
         
         sum+=parseInt(image.lastElementChild.lastElementChild.textContent.substr(1));
         console.log(sum);
    
});}