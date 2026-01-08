//Button text change
let btn=document.getElementById("press");
let button=btn.addEventListener("click",()=>{
    btn.textContent="clicked";
    
})
// div size change
let div=document.getElementById("box");
let divtag=div.addEventListener("click",()=>{
    div.style.width="120px";
    div.style.height="80px";
})
//like button toogle
let btncolor=document.getElementById("heart");
let count=0;
let btnheart=btncolor.addEventListener("click",()=>{
    if(count%2===0){
    btncolor.textContent="💓";;
    }
    else{
        btncolor.textContent="🖤";
    }
    count++;    
})
//count the paragraph
let counter = 0;
const btnn = document.getElementById("counterBtn");
const display = document.getElementById("display");

btnn.addEventListener("click", () => {
    counter++; // Increment the variable
    display.innerText = counter; // Update the UI
});
///blur the image
let image=document.getElementById("car");
let imageblur=image.addEventListener("mouseover",()=>{
   image.style.filter="blur(5px)";
});
image.addEventListener("mouseleave", () => {
    image.style.filter = "blur(0px)";
});
//mouse inside /outside
let divtext=div.addEventListener("mouseenter",()=>{
    div.textContent="Mouse  inside";
})
let divtext1=div.addEventListener("mouseleave",()=>{
    div.textContent="Mouse  outside";
})
//Background color on hover
let buttonhover=btn.addEventListener("mouseover",()=>{
     document.body.style.background="Yellow";
})
let buttonLeave=btn.addEventListener("mouseleave",()=>{
     document.body.style.background="White";
})
//ctrl+s and shortcut theme
let input=document.getElementById("name");
let press=input.addEventListener("keydown",(x)=>{
    console.log(x.key);
    if(x.key==="s"&&"Control"){
     alert("saved");
     }
     else if(x.key==="Shift"&&"T")
     {
        document.body.style.background="black";
     }
     else if(x.key==="L")
     {
        document.body.style.background="white";
     }
     
})
//double click action
let box=document.getElementById("container");
let container=box.addEventListener("dblclick",()=>{
    document.body.style.background="purple";
})
//Block number
let blockNumber=input.addEventListener("keydown",(e)=>{
if (e.key >= "0" && e.key <= "9") {
    e.preventDefault();
    alert("Numbers not allowed");
  }
})
//Press detection
let longpress=btn.addEventListener("mouseover",()=>{
    btn.textContent= "holding";
})
let pressremove=btn.addEventListener("mouseleave",()=>{
    btn.textContent= "Released";
})
//mouse cooridnates
let coordinate=box.addEventListener("mouseover",()=>{
    box.textContent="X position  Y Position";
    
})
//Escape key clear
const inputfield=document.getElementById("rightclick");
inputfield.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if (e.key ==="Escape"){inputfield.value =""};
})

//uppercase convert
let upper=input.addEventListener("input",(e)=>{
    e.target.value=e.target.value.toUpperCase();
})

//character limit
inputfield.addEventListener("keydown",(e)=>{
    
    const keysToAllow = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    if(inputfield.value.length>="10"&& !keysToAllow.includes(e.key)){
        e.preventDefault(); }
})
//login enter key
const username=document.getElementById("user");
let msg=document.getElementById("msg");
username.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
    msg.textContent="welcome"+" "+e.target.value;
    }
});
//Disable paste

inputfield.addEventListener('paste', (e) => {
    e.preventDefault();
    alert("Paste is not allowed here!");
});

//Disable right click
inputfield.addEventListener("contextmenu", (e) => { 
    e.preventDefault(); 
    alert("Right-click is disabled!");

});
// show the length
let countChara=(e)=>{
    
    document.getElementById("count").textContent=e.target.value.length;
    
};
