let data=JSON.parse(localStorage.getItem('items'));
console.log(data);

let title=JSON.parse(localStorage.getItem('title'));
console.log(title);

document.getElementById('title-name').innerText=title;
document.getElementById('title').innerText=title;


const AppendData=(data)=>{
    let main_div=document.getElementById('store');
    main_div.innerHTML=null;

    data.forEach(ele=>{
        let div=document.createElement("div");
        

        let img=document.createElement("img");
        img.src=ele.url1;
        img.onclick=()=>{
            // storeIteams(ele.data);
            console.log(ele.title1);
            console.log(ele.data2);
            localStorage.setItem('details',JSON.stringify(ele.data2));
            localStorage.setItem('title1',JSON.stringify(ele.title1));
            window.location.href="details.html"
        }
        let tit=document.createElement("h5");
        tit.innerText=ele.title1;
        let Quo=document.createElement("p");
        Quo.innerText=ele.quotes;

        let quant=document.createElement('h5');
        quant.innerText=ele.quantity;

        let div1=document.createElement('div');
        div1.setAttribute('class','div1')
        let pric=document.createElement("h4");
        pric.innerText=`MRP:₹${ele.price}`;
        let btn=document.createElement("button");
        btn.setAttribute('class','btn')
        btn.innerText="ADD TO CART";
        btn.onclick=()=>{
            console.log(ele.price);
        }


        div1.append(pric,btn);

        div.append(img,tit,Quo,quant,div1);
        main_div.append(div);
        
    })
}
AppendData(data);

document.getElementById('home').addEventListener('click',function(){
    window.location.href="index.html"
});
