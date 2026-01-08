
let msg=document.getElementById("msg");
let msgKey=(e)=>{
    if(e.key==="Enter"){
    msg.textContent="welcome"+" "+e.target.value;
    }
};
let countChar=(e)=>{
    
    document.getElementById("count").textContent=e.target.value.length+1;
    
};
let color=(e)=>{
    if(e.key==="r")
    {
        document.body.style.background="red";
    }
    else if(e.key==="g")
    {
        document.body.style.background="green";
    }
    else if(e.key==="b")
    {
        document.body.style.background="blue";
    }
    else{
        document.body.style.background="white";
    }
}