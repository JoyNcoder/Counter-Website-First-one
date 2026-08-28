const increaseBtn = document.getElementById("Increase");
const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");
const increaseMoreBtn = document.getElementById("IncreaseMore");
const decreaseMoreBtn = document.getElementById("DecreaseMore");
const spawnBtn = document.getElementById("Spawn");
const submitBtn = document.getElementById("Submit");
const label = document.getElementById("label")
const showBtn = document.getElementById("Show")
let count = 0, newNumber=0, click=1;

spawnBtn.onclick = function(){
    newNumber = Math.floor(Math.random() * 500) + 1;
    showBtn.classList.remove("guessedRight");
    showBtn.classList.add("show");
    showBtn.textContent = "Guess Away";
    label.textContent = 0;
    increaseBtn.disabled=false;
    decreaseBtn.disabled=false;
    resetBtn.disabled=false;
    increaseMoreBtn.disabled=false;
    decreaseMoreBtn.disabled=false;
    submitBtn.disabled=false;
}
increaseBtn.onclick = function(){
    count++;
    label.textContent = count;
}
increaseMoreBtn.onclick = function(){
    count+=10;
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
decreaseMoreBtn.onclick = function(){
    if(Number(label.textContent)>=10) count-=10;
    else if(Number(label.textContent)<10) count=0;
    label.textContent = count;
}

submitBtn.onclick = function(){
    if(Number(label.textContent) == newNumber){
        showBtn.classList.add("guessedRight");
        showBtn.textContent = "Congratulations! You got it right in "+String(click)+" tries.";
        count=0, click=1;
        increaseBtn.disabled=true;
        decreaseBtn.disabled=true;
        resetBtn.disabled=true;
        increaseMoreBtn.disabled=true;
        decreaseMoreBtn.disabled=true;
        submitBtn.disabled=true;
    }
    else if(Number(label.textContent)> newNumber){
        showBtn.textContent = "Guess Lower";
        click++;
    }
    else{
        showBtn.textContent = "Guess Higher";
        click++;
    }
}
