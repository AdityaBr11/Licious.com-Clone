
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
let username_element=document.getElementById("username");
let password_element=document.getElementById("password");

let log_in_element=document.getElementById("butt");
let user_element=document.getElementById("logged_in_user");
let log_out_element=document.getElementById("log_out");
log_out_element.style.display="none";
user_element.style.display="none";
let flag=false;

const getDetails =()=>{
    event.preventDefault()
    
   
  
    let username=username_element.value;
    let password=password_element.value;
    
   
    for(let i=0;i<store.length;i++){
        if(store[i].username==username&&store[i].password==password){
            flag=true;
        }
    }
    if(flag==true){
        
        // let log_in_element=document.getElementById("butt")
        // console.log(log_in_element)
        log_in_element.style.display="none";
        log_out_element.style.display="block";

        
        // let user_element=document.getElementById("logged_in_user")
        user_element.style.display="block"
        user_element.innerHTML=username;
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

// function showLogin(){
//     element.style.display = "Block";

// }

// const login=document.getElementById("btn_1")
// const logout=()=>{
//     flag=false;
//     if(flag===false){
//         log_in_element.style.display="block";
//         user_element.style.display="none";
//         log_out_element.style.display="none";
//         username_element.value="";
//         password_element.value="";
    

//     }

// }