rev = () => {
    console.log('Function is called!');
    let title = document.getElementById('title');
    title.innerText='You are good to move to advance concepts!';
    let btn = document.getElementById('btn');
    btn.style={
        display:none,
        background: 'blueViolet',
    }
}

roll = () =>{
    console.log('Rolling...');
    let random = Math.floor(Math.random()*6) + 1;
    let audio = document.getElementById('diceAudio');
    audio.play();
    let dice = document.getElementById('dice');
    dice.classList.add('spin');
    setTimeout(()=>{
        dice.classList.remove('spin');
    },1000);
    dice.innerText=random;
}

createBox = () => {
    let boxContainer = document.getElementById('box-container');
    console.log("function called!");
    let div = document.createElement('div');
    console.log(div);
    div.classList.add('box');
    boxContainer.appendChild(div);
}
