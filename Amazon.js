
function amazonshipping(){
  let inputElement=document.getElementById("js-input");  
    console.log(inputElement);
    let cost=Number(inputElement.value);
    console.log(cost);
    if(cost<100)
    {
        cost=cost+10;
    }
    console.log(cost);  
    document.getElementById("amazoncost").innerHTML=`${cost}/-`;
};
function events(e){
    if(event.key==="Enter")
    {
        amazonshipping();
    }
}
