let skip = document.getElementById('skip');
let score = document.getElementById('score');
let totaldePontos = document.getElementById('totaldePontos');
let countdown = document.getElementById('countdown');
let count = 0;
let scoreCount = 0;
let duration = 0;
let qaSet = document.querySelectorAll('.qa-set');
let qaAnsRow = document.querySelectorAll('.qa-set .qa_ans_row input');

skip.addEventListener('click', function(){
    step();
    duration = 10;
});

qaAnsRow.forEach(function(qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            duration = 10;
        }, 500);

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount +=10;
            score.innerHTML = scoreCount;
            totaldePontos.innerHTML = scoreCount;
        } else {
            scoreCount -=10;
            score.innerHTML = scoreCount;
            totaldePontos.innerHTML = scoreCount;
        }
    });
});

function step(){
    count += 1;
    for(var i = 0; i < qaSet.length; i++){
        qaSet[i].className = 'qa-set';
    }
    qaSet[count].className = 'step';
    if(count == 5){
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

let durationTime = setInterval(function(){
    if(duration == 10){
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == "60"){
        step();
    }
}, 1000);
