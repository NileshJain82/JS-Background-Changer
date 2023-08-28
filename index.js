const btn = document.getElementById("btn");
const body = document.querySelector("body")

const color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
function random(){
    let colorVal = "#" ;
for(let i=0;i<6;i++){
   let val = Math.floor(Math.random()*16);
   colorVal +=color[val];
}
body.style.backgroundColor = colorVal;
}

btn.addEventListener("click",random);