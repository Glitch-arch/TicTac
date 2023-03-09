const playerInfo = document.querySelector('.game-info');
const boxes = document.querySelectorAll('.box');
const gameEndbtn = document.querySelector('.btn');

// Default Player
let defaultValue = playerInfo.innerHTML = 'Current Player - X'


let info = 'X';


function swapTurn(){

    if (info === 'X') {
        
       info = 'O';
       playerInfo.innerHTML = `Current Player - ${info}`

    } else {
       info = 'X';
       playerInfo.innerHTML = `Current Player - ${info}`

    }
// return;
   
}
let gameGrid = [ '', '', '', '', '', '', '', '', ''];
const winningIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function checkGameover(){

    // console.log('inside gameover')
    let winner = '';
    winningIndex.forEach(position => {
        // console.log(position)
        // console.log(gameGrid)
        // console.log(position[0])

        // Someone won !!
        if ((gameGrid[position[0]] !== '' || gameGrid[position[1]] !== '' || gameGrid[position[2]] !== '') && 
        (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]] )){
            
            // console.log('inside gameover, condn passed')

            if (gameGrid[position[0]] === 'X') {
                
                stopClicks();
                // playerInfo.innerHTML = 'Winner is X';
                winner = 'X'
                
            }
            else{
                stopClicks();
                // playerInfo.innerHTML = 'Winner is O';
                winner = 'O'
            }

            boxes[position[0]].classList.add('win');
            boxes[position[1]].classList.add('win');
            boxes[position[2]].classList.add('win');

                    // Match Ended time for results !!

            if (winner !== '' ) {
            
                playerInfo.innerHTML = `Winner is ${winner}`;
                btnEnable();
            }
            else{
                playerInfo.innerHTML = 'Game Tied !';
                btnEnable();
            }
            
        }
        
        let boardFilled = true;
        gameGrid.forEach((box) => {
         if (box === "") boardFilled = false;
        });
        // Board is filled, but game is tie
        if (boardFilled) {
            playerInfo.innerText = "Game Tied !";
            gameEndbtn.classList.add("active");
            return;
    }
        
    });
    // console.log('inside gameover, executed it ')
}

function btnEnable(){

    // console.log('inside btnenble');
    gameEndbtn.classList.add('active');

}


gameEndbtn.addEventListener('click',()=>{
    playerInfo.innerHTML = 'Current Player - X';
    gameEndbtn.classList.remove('active');
    gameGrid = [ '', '','','','','','','',''];
    boxes.forEach(box => {
        box.innerHTML = '';
        box.classList.remove('win');
        box.style.pointerEvents = 'all';
    })
    // console.log('hey neo')
});



function stopClicks(){
    boxes.forEach(box => {
        
        box.style.pointerEvents = 'none'
        
    });
    return;
}

boxes.forEach((box,index) => {
    
    box.addEventListener('click', ()=>{
        
        if( info === 'X'){
            box.innerHTML = 'X';
            box.style.pointerEvents = "none";
            gameGrid[index ] = 'X';
            swapTurn();
            checkGameover();
        }
        else{
            box.innerHTML = 'O';
            box.style.pointerEvents = "none";
            gameGrid[index ] = 'O';
            swapTurn();
            checkGameover();

        }

    })

});










