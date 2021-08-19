window.addEventListener("load",function(){
    let pads = document.querySelectorAll(".pads div");
    let sound = document.querySelectorAll(".sound");
    const visual = document.querySelector(".visual");
    const color = [
        "red",
        "yellow",
        "green",
        "blue",
        "blueviolet",
        "goldenrod"
    ];



    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
            sound[index].currentTime= 0 ;
            sound[index].play();
            creatBubble(index);
        });
    });
    const creatBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation ="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        });
    }
});
