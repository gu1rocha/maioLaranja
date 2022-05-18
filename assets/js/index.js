var partes = document.querySelectorAll("a");

for(parte of partes){
    let audio = document.createElement("audio")
    parte.appendChild(audio)
    if(parte.matches(".nao")){
        audio.src = "assets/music/errado.mp3"
    }else if(parte.matches(".pode")){
        audio.src = "assets/music/certo.mp3"
    }else{
        audio.src = "assets/music/atenção.mp3"
    }
    parte.addEventListener('click',()=>{
        for(toque of partes){toque.querySelector('audio').pause()}
        audio.currentTime = 0;
        audio.play();
    });
}