function createWatch(){
    const watch = document.querySelector('.watch');
    let second = 0;
    let timerSecond;

    function startwatch(){
        timerSecond = setInterval( ()=>{
            second++;
            watch.innerHTML = createTimerSecond(second);
        },1000)
    };

    function createTimerSecond(secondTimer){
        const data = new Date(secondTimer * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone:'GMT'
        })
    };

    document.addEventListener('click', (ev)=>{
        const elements = ev.target;

        if(elements.classList.contains('iniciar')){
            watch.classList.remove('pouse');
            clearInterval(timerSecond)
            startwatch()
        };
        if(elements.classList.contains('pausar')){
            watch.classList.add('pouse');
            clearInterval(timerSecond)
        };
        if(elements.classList.contains('zerar')){
            watch.classList.remove('pouse');
            clearInterval(timerSecond)
            second = 0;
            watch.innerHTML = '00:00:00';
        };
    })
}
createWatch()
