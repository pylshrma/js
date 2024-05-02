//color change using btn

// var box=document.querySelector("#box")

// var btn=document.querySelector("button")


// btn.addEventListener("click",function(){
//   var a1=Math.floor(Math.random()*255)
//   var a2=Math.floor(Math.random()*255)
//   var a3=Math.floor(Math.random()*255)

//   console.log(a1,a2,a3)

//   box.style.backgroundColor=`rgb(${a1},${a2},${a3})`

// })

// var box = document.querySelector("#box")
// box.addEventListener("dblclick",function(){
//     console.log("event performed")
// })


//add frnd and unfrnd
var btn = document.querySelector("button")
var istatus = document.querySelector("h2")
var flag =0

btn.addEventListener("click", function () {
    var a = Math.floor(Math.random()*5000)
    
    if(flag==0){
    istatus.innerHTML = "request sending...";
    istatus.style.color = "rgb(255, 183 ,0";
    btn.innerHTML = "sending"


    setTimeout(function () {
        istatus.innerHTML = "friends";
        istatus.style.color = "green";
        btn.innerHTML = "remove friend"
    },a)
    flag=1
}else{
    istatus.innerHTML = "stranger";
    istatus.style.color = "red";
    btn.innerHTML = "add friend"
    flag=0
}
})