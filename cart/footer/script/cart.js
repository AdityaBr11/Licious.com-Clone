function openNav() {
    let cart_div= document.getElementById("mySidenav")
   cart_div.style.width = "30%";
   document.getElementById("cut").style.marginLeft="-46px"
   
   
   cart_div.style.backgroundColor="white"
   }
   
   function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
   }
   
   
   
   let arr=[
       {
           Image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/eb0de06a-d96a-c786-1de9-1bd9cadbb89b/original/ChickenLollipopPiecesHeroShot.jpg",
           title:"Chicken Lollipop - Pack of 10",
           price:"10Pieces |  ₹166  ",
           s:"₹175",
       },
       {
           Image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/1803f01a-2f09-e768-897e-7c9707e5c5ed/original/Classic-Eggs---Pack-Of-30-Hero-Shot.jpg",
           title:"Classic Eggs - Pack Of 30",
           price:"30Pieces |  ₹280 ",
           s:"₹310",
       },
       {
           Image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4d08a6f1-998d-66c8-16e7-fb9efec195ed/original/Afghani-Murgh-Seekh-Kebab(1).jpg",
           title:"Afghani Murgh Seekh Kebab | Ready in 8 Minutes",
           price:"4Pieces |  ₹256",
           s:"₹300",
       },
       {
           Image:"https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/715d4156-cae5-f3c5-ef78-a6e5c129ed5c/original/Lucknowi-Mutton-Galouti-Kebab-Hero-Shot-Uncooked_(1).jpg",
           title:"Lucknowi Mutton Galouti Kebab | Ready in 8 Minutes",
           price:"6Pieces |  ₹359",
           s:"₹380",
       },
   ]
   
   
   for(let i=0;i<arr.length;i++)
   {
       let new_div=document.createElement("div");
   
           let image=document.createElement("img")
          image.src=arr[i].Image;
   
          let title=document.createElement("h5");
          title.innerText=arr[i].title;
         
          let price_div=document.createElement("div");
          price_div.setAttribute("id","st")
   
          let price=document.createElement("p");
          price.innerText=arr[i].price;
          

          let strick=document.createElement("strike");
          strick.innerText=arr[i].s
          strick.setAttribute("id","str");

          price_div.append(price,strick);
   
          let btn=document.createElement("button");
          btn.innerText="ADD";
         
       
        
   
          new_div.append(image,title,price_div,btn);
          document.getElementById("product").append(new_div)
   }

   function cut()
   {
    document.getElementById("mySidenav").style.width="0%"
    document.getElementById("cut").style.marginLeft="46px"
   }
   
   