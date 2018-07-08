var question = true

while(question) {
    // get players choose
    var p = prompt('choose : rock, paper, scissors') 

    // get computer choose
    // raise random number
    var comp = Math.random()

    if(comp < 0.37){
        comp = 'rock'
    }else if(comp >= 0.37 && comp < 0.67){
        comp = 'paper'
    }else {
        comp = 'scissors'
    }

    // set rules
    var result = ''
    if(p == comp){
        result = 'DRAW'
    } else if(p == 'rock'){
        result = ( comp == 'scissors' ) ? 'WINNER' : 'LOSER'
    } else if(p == 'paper'){
        result = ( comp == 'scissors' ) ? 'LOSER' : 'WINNER'
    }  else if(p == 'scissors'){
        result = ( comp == 'rock' ) ? 'LOSER' : 'WINNER'
    } else {
        result = 'Input wrong, please select one from description'
    }

    // show result
    alert('You choose : ' + p + ' anc computer choose : ' + comp + '\nAnd the result is : You ' + result);

    question = confirm('lagi?');
}

alert('thanks for playing');

