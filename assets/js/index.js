var animais = document.querySelectorAll(".animal");

for(animal of animais){
    let audio = animal.querySelector('audio')
    let box = animal.querySelector('.img')
    box.style.backgroundImage = `url(./assets/img/${box.getAttribute("name")}.svg)`;
    box.addEventListener('click',()=>{
        for(animal2 of animais){animal2.querySelector('audio').pause()}
        audio.currentTime = 0;
        audio.play();
    });
}