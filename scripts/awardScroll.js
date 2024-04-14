const track = document.getElementById("image-track");

window.ontouchstart = e => {
    track.dataset.mouseDownAt=e.clientX;
    document.querySelector("#home > button").innerHTML = e.clientX;
}

window.ontouchmove = e =>{
    document.querySelector("body").style.backgroundColor = "white";
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    if(nextPercentage < -100){nextPercentage = -100;}
    if(nextPercentage > 0){ nextPercentage = 0;}
    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage+50}%, 0%)`},
        { duration: 1200, fill: "forwards"});



    const images = track.querySelectorAll(".image");

    images.forEach((image) => {
        // image.style.objectPosition = `${nextPercentage+100}% 50%`
        image.animate({
            objectPosition: `${nextPercentage+100}% 50%`},
        { duration: 1200, fill:"forwards"});
    });
}

window.ontouchend = () =>{
    track.dataset.mouseDownAt = "0";
    if(track.dataset.percentage){
    track.dataset.prevPercentage = track.dataset.percentage;
    }
}

window.onmousedown = e => {
    track.dataset.mouseDownAt=e.clientX;
}
window.onmousemove = e =>{
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    let    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    if(nextPercentage < -100){nextPercentage = -100;}
    if(nextPercentage > 0){ nextPercentage = 0;}
    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage+50}%, 0%)`},
        { duration: 1200, fill: "forwards"});



    const images = track.querySelectorAll(".image");

    images.forEach((image) => {
        // image.style.objectPosition = `${nextPercentage+100}% 50%`
        image.animate({
            objectPosition: `${nextPercentage+100}% 50%`},
        { duration: 1200, fill:"forwards"});
    });
}

window.onmouseup = () =>{
    track.dataset.mouseDownAt = "0";
    if(track.dataset.percentage){
    track.dataset.prevPercentage = track.dataset.percentage;
    }
}

const borderButton = document.querySelector("#home > button");
borderButton.onclick = (params) => {
    const images = track.querySelectorAll(".image");
    if(borderButton.dataset.active==="0"){
        
        borderButton.dataset.active = "1";
        images.forEach((image) => {
            // image.animate({border: "none"}, { duration: 1200, fill:"forwards", easing: "linear"});
            image.style.border = "none";
    });
    }
    else if(borderButton.dataset.active==="1"){
        borderButton.dataset.active = "2";
        images.forEach((image) => {
            image.animate({boxShadow: "none"}, { duration: 1200, fill:"forwards", easing: "ease-in"});
            // image.style.boxShadow = "none";
    });
}
    else if(borderButton.dataset.active==="2"){
        borderButton.dataset.active = "3";
        images.forEach((image) => {
            image.style.border = "0.3vw solid currentColor";
    });
    }
    else if(borderButton.dataset.active==="3"){
        borderButton.dataset.active = "0";
        images.forEach((image) => {
            image.animate({boxShadow: "0 0 1rem 0.3vw #39d4ff"}, { duration: 1000, fill:"forwards", easing: "ease-out"});
            // image.style.boxShadow = "0 0 1rem 4px #39d4ff";    
        });
        
    }
}