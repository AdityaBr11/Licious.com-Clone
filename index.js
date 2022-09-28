let data=[
    {
        title:"Plant-Based Meat",
        url:"https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
        data1:{
            title0:"Plant Based Chick~n Seekh Kebab",
        url0:'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/b0324b74-f436-7b3a-9d4b-b54a68aea29d/original/uncooked_(2).jpg?format=webp',
        },
        data1:{
            title0:'Plant Based Mutt~n Seekh Kebab',
        url0:'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/e9be0804-b441-558d-db5b-b4ddecf726cd/original/UNCOOK.jpg?format=webp'
        }
    },

    {
        title:'Chicken',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png',
        
    },

    {
        title:'Fish & Seafood',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png',
    },

    {
        title:'Mutton',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png'
    },
    
    
    {
        title:'Ready to cook',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png'
    },
    
    {
        title:'Prawns',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png'
    },
    
    {
        title:'Cold Cuts',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png'
    },
    
    {
        title:'Spreads',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png'
    },
    
    {
        title:'Combos',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/69b72338-4180-2631-b175-04265b1e5c7a/original/Combo_(2).png'
    },
    
    {
        title:'Eggs',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png'
    },
    
    {
        title:'Biryani & Kebab',
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png'
    },
    
    {
        title:"Total's deal",
        url:'https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png'
    },
    
];
console.log(data);

const AppendData=(data)=>{
    let main_div=document.getElementById('categories-body');
    main_div.innerText=null;
    data.forEach(ele=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.url;

        let tit=document.createElement("p");
        tit.innerText=ele.title;
        div.append(img,tit);
        main_div.append(div);

    })
};
AppendData(data)
