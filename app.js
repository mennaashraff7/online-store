
const cart = document.querySelector('.navbar-nav .cart');
const images = document.querySelectorAll(`.row `);
const hoverImage = document.querySelectorAll(`.hoverImage`);
const buttons = document.querySelectorAll(`.btn2`);
const tbody = document.getElementById('tbody');
const cartBox = document.getElementById("carts");
const sumDiv=document.querySelector(`.sum`);



var sum=0;


hoverImage.forEach(hover => hover.addEventListener('mouseover',function(e){
 btn= hover.lastElementChild;
btn.style.display="block";    
}));

hoverImage.forEach(hover => hover.addEventListener('mouseleave',function(e){
var btn= hover.lastElementChild;
btn.style.display="none";  
}));

buttons.forEach(btn => btn.addEventListener('click',function(e){
    var quantity =1;
    
    var clickedbtn = e.target;
   var item = clickedbtn.parentElement.parentElement;
   
    //create table content
    
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
     var span1 = document.createElement('span');
     var i2= document.createElement('i');
     i2.classList.add('fas');
     i2.classList.add('fa-minus-circle');
     i2.classList.add('minus');
     span1.appendChild(i2);
     td1.appendChild(span1);
     var span2 = document.createElement('span');
     span2.classList.add('quantity');
     span2.textContent=quantity;
     td1.appendChild(span2)
     var span3 = document.createElement('span');
     var i3= document.createElement('i');
     i3.classList.add('fas');
     i3.classList.add('fa-plus-circle');
    i3.classList.add('plus');
      span3.appendChild(i3);
     td1.appendChild(span3);
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
      sum+=parseInt(item.lastElementChild.lastElementChild.textContent.substr(1));
     
     clickedbtn.style.background = "grey";
     clickedbtn.textContent =  "added to cart";
     clickedbtn.classList.add("disabled");

    }));

function plus(){
          
     const plus = document.querySelectorAll(`.plus`); 
    plus.forEach(p => p.addEventListener('click',function(e){
         var selectedSpan = e.target.parentElement.previousElementSibling;
    
         var price = e.target.parentElement.parentElement.nextElementSibling.textContent.substr(1);
   
      
          selectedSpan.textContent= parseInt(selectedSpan.textContent)+1;
         
         sum+=parseInt(price);
        console.log("sum:" + sum);
        sumDiv.textContent="sum: $"+sum;
        
    })); 
}
 function minus(){
     
     const minus = document.querySelectorAll(`.minus`); 
      minus.forEach(m => m.addEventListener('click',function(e){
        
         var selectedSpan = e.target.parentElement.nextElementSibling;
 
         var price = e.target.parentElement.parentElement.nextElementSibling.textContent.substr(1);

           if(selectedSpan.textContent=="1")return;
         
          selectedSpan.textContent= parseInt(selectedSpan.textContent)-1;
          sum-=parseInt(price);
          
        console.log("sum:" + sum);
        
          sumDiv.textContent="sum: $"+sum;
    })); 
}

function deleteItem(){
    const deleteBtns = document.querySelectorAll(`.fa-trash-alt`);
    deleteBtns.forEach(d => d.addEventListener('click',function(e){
      e.target.parentElement.parentElement.remove(); 
     var price =  e.target.parentElement.previousElementSibling.textContent.substr(1);
        
    var quantity =e.target.parentElement.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling.textContent;
        
     console.log("quantity:" + quantity); 
         console.log("price:" + price); 
     sum-=parseInt(price)*parseInt(quantity);
       console.log("sum:" + sum);  
        sumDiv.textContent="sum: $"+sum;
      
    }));
    
      
    buttons.forEach(btn =>{
      if(btn.classList[1] == "disabled" ){
         btn.style.background = "pink";
         btn.textContent =  "add to cart";
         btn.classList.remove("disabled");
        }
    });
}


cart.addEventListener('click',function(e){
    
     cartBox.classList.add('active'); 
    plus();
    minus();
    deleteItem();
    console.log("sum:" + sum);
    sumDiv.textContent="sum: $"+sum;
    
});



 cartBox.firstElementChild.firstElementChild.addEventListener('click',function(e){
    
     cartBox.classList.remove('active'); 
    
});



























    