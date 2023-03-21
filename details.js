document.getElementById('home').addEventListener('click',function(){
    window.location.href="index.html"
});

let arr=JSON.parse(localStorage.getItem('cart-items'))||[];;
let total=0;
let disPrice=0;


let data=JSON.parse(localStorage.getItem('details'));
let singleItem=JSON.parse(localStorage.getItem('data'));

let title=JSON.parse(localStorage.getItem('title'));
let title1=JSON.parse(localStorage.getItem('title1'));
console.log(data);
console.log(title);
console.log(title1);
function loginPage(){
    window.location.href="login.html"
}

let user=JSON.parse(localStorage.getItem("user"))
let USER=document.querySelector(".USER")
let logIn=document.querySelector(".logIn")
let LOGOUT=document.querySelector(".LOGOUT")

console.log(user,"userrr")

USER.innerText=(user==null?"":user.name)
logIn.innerText=(user==null?"Login":"")
LOGOUT.style.display=(user==null?"none":"block")

function logout(){
    localStorage.removeItem("user")
    alert("Logout Successfull!")
    window.location.reload();
}


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
btn.onclick=()=>{ 
    arr.push(singleItem);
    // console.log(arr);
    // console.log(total);
    // console.log(data)
    localStorage.setItem('cart-items',JSON.stringify(arr));
    alert("Added to Cart successfully")
    window.location.reload();
}
div1.append(pric,btn);

let hr=document.createElement('hr');



des.append(tit,des0,des1,des2,des3,img1,div1,hr);

let cart_data=JSON.parse(localStorage.getItem('cart-items'));
let z=cart_data.length;
console.log(z);
// console.log(cart_data);
cart_data.forEach(ele=>{
    total+=ele.price;
    
})
cart_data.forEach(ele=>{
    disPrice+=ele.price-40;
    
})
let x=document.getElementById("price");
{total>0?x.innerText=`₹${total}`:""}
let y=document.querySelector('.no');
{z>0?y.innerText=z:y.innerText="";}


//cart fn
let amount = document.getElementById("amount");
amount.innerText = `₹${disPrice}`;

let del = document.querySelector(".del");
del.innerText = total > 0 ? "₹40" : 0;

let Subtotal = document.getElementById("Subtotal");
Subtotal.innerText = `₹${total}`;

let Total = document.getElementById("Total");
Total.innerText = `₹${disPrice}`;

console.log(cart_data, "cart_data");
function cartIteams() {
  let itms = document.getElementById("itms");

  if (cart_data == null || cart_data == []) {
    let main= document.querySelector(".MAIN-CART");
    main.innerHTML="Cart is Empty"
  } else {
    cart_data.forEach(function (ele, k) {
      let ma = document.createElement("div");
      ma.setAttribute("class", "main-div");

      let div1 = document.createElement("div");
      div1.setAttribute("class", "fdiv");
      let p = document.createElement("p");
      p.innerText = k + 1;
      p.style.fontSize = "20px";
      p.style.fontWeight = "bold";
      p.style.color = "gray";

      let div2 = document.createElement("div");
      div2.setAttribute("class", "mid-div");
      let tit = document.createElement("h5");
      tit.innerText = ele.title1;
      tit.style.color = "gray";

      let div20 = document.createElement("div");
      div20.style.display = "flex";
      div20.style.justifyContent = "start";
      div20.style.alignItems = "center";

      let pric = document.createElement("h4");
      pric.innerText = `₹${ele.price}`;

      let Q = document.createElement("button");
      Q.innerText = ele.quantity;
      Q.style.padding = "2px 3px";
      div20.append(Q, pric);

      let div3 = document.createElement("div");
      div3.setAttribute("class", "last-div");
      let i = document.createElement("i");
      i.setAttribute("class", "ri-close-line");
      i.addEventListener("click", del);
      function del() {
        event.target.parentNode.remove();
        cart_data.splice(k, 1);
        localStorage.setItem("cart-items", JSON.stringify(cart_data));
        x.innerText = Number(x.innerText) - Number(ele.price);
        window.location.reload();
      }

      let div30 = document.createElement("div");
      let plus = document.createElement("button");
      plus.innerText = "-";
      let no = document.createElement("p");
      no.innerText = "1";
      let minus = document.createElement("button");
      minus.innerText = "+";
      div30.append(plus, no, minus);

      div1.append(p);
      div2.append(tit, div20);
      div3.append(i, div30);
      ma.append(div1, div2, div3);
      itms.append(ma);
      // console.log(ele.title1);
    });
  }
}
cartIteams();

function openNav() {
  if(cart_data==null||cart_data.length<=0){
    alert("Cart is Empty ! please add")
  }else{
    let cart_div = document.getElementById("mySidenav");
  cart_div.style.width = "30%";
  document.getElementById("cut").style.marginLeft = "-46px";
  cart_div.style.backgroundColor = "white";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let array = [
  {
    Image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/eb0de06a-d96a-c786-1de9-1bd9cadbb89b/original/ChickenLollipopPiecesHeroShot.jpg",
    title: "Chicken Lollipop - Pack of 10",
    price: "10Pieces |  ₹166  ",
    s: "₹175",
  },
  {
    Image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1803f01a-2f09-e768-897e-7c9707e5c5ed/original/Classic-Eggs---Pack-Of-30-Hero-Shot.jpg",
    title: "Classic Eggs - Pack Of 30",
    price: "30Pieces |  ₹280 ",
    s: "₹310",
  },
  {
    Image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4d08a6f1-998d-66c8-16e7-fb9efec195ed/original/Afghani-Murgh-Seekh-Kebab(1).jpg",
    title: "Afghani Murgh Seekh Kebab | Ready in 8 Minutes",
    price: "4Pieces |  ₹256",
    s: "₹300",
  },
  {
    Image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
    title: "Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
    price: "6Pieces |  ₹359",
    s: "₹380",
  },
];

for (let i = 0; i < array.length; i++) {
  let new_div = document.createElement("div");

  let image = document.createElement("img");
  image.src = array[i].Image;

  let title = document.createElement("h5");
  title.innerText = array[i].title;

  let price_div = document.createElement("div");
  price_div.setAttribute("id", "st");

  let price = document.createElement("p");
  price.innerText = array[i].price;

  let strick = document.createElement("strike");
  strick.innerText = array[i].s;
  strick.setAttribute("id", "str");

  price_div.append(price, strick);

  let btn = document.createElement("button");
  btn.innerText = "ADD";
  btn.style.borderRadius = "5px";
  new_div.append(image, title, price_div, btn);
  document.getElementById("product").append(new_div);
}

function cut() {
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("cut").style.marginLeft = "46px";
}


