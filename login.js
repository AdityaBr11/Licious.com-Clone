
let store=[{
    username:"shivam",
    password:"12345"
},
{
    username:"satyam",
    password:"88558"
},
{
    username:"vikash",
    password:"480136"
}

]



const getDetails =()=>{
    event.preventDefault()
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    let flag=false;
    for(let i=0;i<store.length;i++){
        if(store[i].username==username&&store[i].password==password){
            flag=true;
        }
    }
    if(flag==true){
        alert("log in succefull")
    }
    else{
        alert("something is wrong")
    }
    // console.log(username,password)
    // store.forEach(function(ele){
    //     if(ele.username==username&& ele.password==password){
    //         console.log("log in succesfully")
    //         return
        
    //     }
        
    // })

    const element = document.getElementById("store");
    element.style.display="none"
    
}

const element = document.getElementById("store");

function showLogin(){
    element.style.display = "Block";

}

const login=document.getElementById("btn")