
const cart = document.querySelector('.fa-shopping-cart');
const images = document.querySelectorAll(`.row `);
const  hoverImage =document.querySelectorAll(`.hoverImage`);
const buttons = document.querySelectorAll(`.btn2`);
const tbody = document.getElementById('tbody');
const cartBox = document.getElementById("carts");

var sum=0;
console.log(tbody);
console.log(hoverImage);
hoverImage.forEach(hover => hover.addEventListener('mouseover',function(e){
    var css = { " width": "102%",  " -webkit-transform":"scale(1.1)", "-moz-transform":"scale(1.1)" ,   
              "-o-transform":"scale(1.1)" ,"box-shadow":"0px 0px 30px gray","-webkit-box-shadow":"0px 0px 30px gray",
                " -moz-box-shadow  ":" 0px 0px 30px gray","opacity": "1",  "transition": "0.9s"};

 for(var prop in css) {
   hover.style[prop] = css[prop];
}  
    
 
 btn= hover.lastElementChild;
    
btn.style.display="block";    
}));

function createTable(){
    var tr = document.createElement('tr');
        tr.classList.add("table-danger");
    tbody.appendChild(tr);
    var th = document.createElement('th');
        th.setAttribute('scope','row');
    var td1= document.createElement('td');
    
    
    
}

buttons.forEach(btn => btn.addEventListener('click',function(e){
    
    var clickedbtn = e.target;
   var item = clickedbtn.parentElement.parentElement;
     //   console.log(item.firstElementChild.firstElementChild.src);
     //   console.log(item.lastElementChild.lastElementChild.textContent);
   sum+=parseInt(item.lastElementChild.lastElementChild.textContent.substr(1));
        // console.log(sum);
     var tr = document.createElement('tr');
        tr.classList.add("table-danger");
    tbody.appendChild(tr);
    var th = document.createElement('th');
        th.setAttribute('scope','row');
        
    var img= document.createElement('img');
        img.classList.add('img-cart');
        img.setAttribute('src',`${item.firstElementChild.firstElementChild.src}`);
    var p = document.createElement('p');
        p.textContent=item.lastElementChild.firstElementChild.textContent;
    th.appendChild(img);
    th.appendChild(p);
    tr.appendChild(th);
     var td1= document.createElement('td');
     var input =document.createElement('input');
         input.setAttribute('type','number');
         input.classList.add('cart-input');
    
    td1.appendChild(input);
        
    tr.appendChild(td1);
     var td2= document.createElement('td');
         td2.textContent=item.lastElementChild.lastElementChild.textContent;
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    var i= document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-trash-alt');
    i.classList.add('fa-lg');
    td3.appendChild(i);
    tr.appendChild(td3);
    
    var  inputSum = document.querySelector('.cart-input');
    sum+=parseInt(inputSum.value)*parseInt(item.lastElementChild.lastElementChild.textContent.substr(1));
        console.log(sum);
    
    }));

hoverImage.forEach(hover => hover.addEventListener('mouseleave',function(e){

hover.style.width='100%';
hover.style.removeProperty(" -webkit-transform");
hover.style.removeProperty(" -o-transform");   
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

images.forEach(image => {
    console.log(image);

       image.classList.add('clicked');
        
        console.log(image.firstElementChild.firstElementChild.src);
        console.log(image.lastElementChild.lastElementChild.textContent);
         
         sum+=parseInt(image.lastElementChild.lastElementChild.textContent.substr(1));
         console.log(sum);
    
});
}

cart.addEventListener('click',function(e){
    
     cartBox.classList.add('active'); 
    
});


 cartBox.firstElementChild.firstElementChild.addEventListener('click',function(e){
    
     cartBox.classList.remove('active'); 
    
});

























    