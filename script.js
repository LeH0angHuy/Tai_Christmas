let count = 200;
    for (var i = 0; i < 200;i++){
    let leftSnow = Math.floor(Math.random()*map.clientWidth);
    let topSnow= Math.floor(Math.random()*map.clientWidth);
    let widthSnow = Math.floor(Math.random()*55);
    let timeSnow = Math.floor((Math.random()*5)+5);
    let blurSnow = Math.floor(Math.random()*20);
    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left= leftSnow+'px';
    div.style.top= topSnow+'px';
    div.style.width=widthSnow+'px';
    div.style.height=widthSnow+'px';
    div.style.animationDuration=timeSnow+'s';
    div.style.filter = "blur("+blurSnow+"px)";
    map.appendChild(div);
}


const audio = new Audio();
audio.src = "jinglebell.mp3";