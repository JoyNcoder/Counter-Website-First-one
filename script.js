const increaseBtn = document.getElementById("Increase");
const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");
const label = document.getElementById("label")
let count = 0;

increaseBtn.onclick = function(){
    count++;
    label.textContent = count;
}
resetBtn.onclick = function(){
    if(Number(label.textContent)==0) window.alert(`Counter is already at Zero`);
    count=0;
    label.textContent = count;
}
decreaseBtn.onclick = function(){
    if(Number(label.textContent)>0) count--;
    label.textContent = count;
}