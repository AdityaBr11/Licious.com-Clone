document.getElementById('home').addEventListener('click',function(){
    window.location.href="index.html"
});

let total=0;
let data=JSON.parse(localStorage.getItem('details'));
let title=JSON.parse(localStorage.getItem('title'));
let title1=JSON.parse(localStorage.getItem('title1'));
console.log(data);
console.log(title);
console.log(title1);

document.getElementById('title-name').innerText=title;
document.getElementById('title1-name').innerText=title1;

// console.log(data[0].des)

let imag=document.getElementById('imag');
let img=document.createElement('img');
img.src=data[0].url;
imag.append(img);

let des=document.getElementById('des');
let tit=document.createElement('h3');
tit.innerText=title1;
tit.style.fontSize="20px";

let des0=document.createElement('p');
des0.innerText=data[0].des;
let des1=document.createElement('p');
des1.innerText=data[0].des1
let des2=document.createElement('p');
des2.innerText=data[0].des2
let des3=document.createElement('p');
des3.innerText=data[0].des3;

let img1=document.createElement('img');
img1.src="https://i.postimg.cc/NGkMxTtq/quantity.png";
let div1=document.createElement('div');
div1.setAttribute('class','div1')
let pric=document.createElement("h3");
pric.innerText=`MRP:₹${data[0].price}`;
pric.style.color="#d11243"
let btn=document.createElement("button");
btn.setAttribute('class','btn')
btn.innerText="ADD TO CART";
div1.append(pric,btn);

let hr=document.createElement('hr');
// let a=document.createElement('a');

// let div2=document.createElement('div');
// let div20=document.createElement('div');
// a.innerText='Only the Safest Chicken!'
// let img2=document.createElement('img');
// img.src='https://www.licious.in/img/rebranding/play_icon.svg';
// div20.append(img2,a);

// let div21=document.createElement('div');
// let img3=document.createElement('img');
// img.src='https://www.licious.in/img/rebranding/express_delivery.svg';
// let pp=document.createElement('p');
// pp.innerText='Tomorrow 7 AM - 10 AM';
// div21.append(img3,pp);
// div2.append(div20,div21)



des.append(tit,des0,des1,des2,des3,img1,div1,hr);

let cart_data=JSON.parse(localStorage.getItem('cart-items'));
let z=cart_data.length;
console.log(z);
// console.log(cart_data);
cart_data.forEach(ele=>{
    total+=ele.price;
    
})
let x=document.getElementById("price");
x.innerText=`₹${total}`;
let y=document.querySelector('.no');
y.innerText=z;

console.log(cart_data);