function Constants(){
    this.grids = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    this.inputKeyX = 'X';
    this.inputKeyO = 'O';
}


function TicTacToe(){
    this.keyDone = null;
}

TicTacToe.prototype.setKeyDone = function () {
    if (this.keyDone) {
        if (this.keyDone === constants.inputKeyX) {
            this.keyDone = constants.inputKeyO;
        } else if (this.keyDone === constants.inputKeyO) {
            this.keyDone = constants.inputKeyX;
        } else {
            this.keyDone = constants.inputKeyX;
        }
    } else {
        this.keyDone = constants.inputKeyX;
    }
}

TicTacToe.prototype.addX = function (position) {
    constants.grids[position[0]][position[1]] = constants.inputKeyX;
    domManipulation.addInput(constants.inputKeyX, position);
}

TicTacToe.prototype.addO = function (position) {
    constants.grids[position[0]][position[1]] = constants.inputKeyO;
    domManipulation.addInput(constants.inputKeyO, position);
}

TicTacToe.prototype.isClickInGrid = function (position) {
    if (!position) {
        return false;
    }
    if (position.length !== 3) {
        return false;
    }
    if (position[0] !== 'grid') {
        return false;
    }
    if (typeof (position[1] - 0) !== 'number') {
        return false;
    }
    if (typeof (position[2] - 0) !== 'number') {
        return false;
    }
    return true;
}

TicTacToe.prototype.inputEvent = function (event) {
    const gridId = event.target.id;
    if (gridId) {
        ticTacToe.setKeyDone();
        const position = gridId.split('-');
        if (ticTacToe.isClickInGrid(position) && ticTacToe.keyDone === constants.inputKeyO) {
            ticTacToe.addO([position[1], position[2]]);
        }
        if (ticTacToe.isClickInGrid(position) && ticTacToe.keyDone === constants.inputKeyX) {
            ticTacToe.addX([position[1], position[2]]);
        }
    }
}

TicTacToe.prototype.checkVictory = function () {
    const grd = constants.grids;
    const X = constants.inputKeyX;
    const O = constants.inputKeyO;
    var flagVar = false;
    if (grd[0][0] === X && grd[0][1] === X && grd[0][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[1][0] === X && grd[1][1] === X && grd[1][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === X && grd[2][1] === X && grd[2][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[0][0] === X && grd[1][0] === X && grd[2][0] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[1][0] === X && grd[1][1] === X && grd[1][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === X && grd[2][1] === X && grd[2][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[0][0] === X && grd[1][1] === X && grd[2][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === X && grd[1][1] === X && grd[0][2] === X) {
        ticTacToe.Xwins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[0][0] === O && grd[0][1] === O && grd[0][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[1][0] === O && grd[1][1] === O && grd[1][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === O && grd[2][1] === O && grd[2][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[0][0] === O && grd[1][0] === O && grd[2][0] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[1][0] === O && grd[1][1] === O && grd[1][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === O && grd[2][1] === O && grd[2][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[0][0] === O && grd[1][1] === O && grd[2][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    } else if (grd[2][0] === O && grd[1][1] === O && grd[0][2] === O) {
        ticTacToe.Owins();
        //Setting the flag as true to abort the match after winning
        flagVar=true;
    }

    //Check the condition for tie

    //It would check if all values in the grid are filled with either with X or O
    //And if it doesnt fullfills the condition for winning, it execute this block of code
    else if(((grd[0][0]===X)||(grd[0][0]===O))&&
    ((grd[0][1]===X)||(grd[0][1]===O))&&
    ((grd[0][2]===X)||(grd[0][2]===O))&&
    ((grd[1][0]===X)||(grd[1][0]===O))&&
    ((grd[1][1]===X)||(grd[1][1]===O))&&
    ((grd[1][2]===X)||(grd[1][2]===O))&&
    ((grd[2][0]===X)||(grd[2][0]===O))&&
    ((grd[2][1]===X)||(grd[2][1]===O))&&
    ((grd[2][2]===X)||(grd[2][2]===O))
    ){
        //If the complete values in the grid is assorted it would execute these lines of code
        ticTacToe.tieWins();
    }
    
    if(flagVar===true){
        //If a person wins the flag would be set to True and then the alert would be shown as the gmae is completed
        alert('Game has already been won!');
    }

}

TicTacToe.prototype.Xwins = function () {
    setTimeout(() => {
        domManipulation.declareVictory('x');
    }, 1000);
}

TicTacToe.prototype.Owins = function () {
    setTimeout(() => {
        domManipulation.declareVictory('o');
    }, 1000);
}

TicTacToe.prototype.tieWins = function () {
    setTimeout(() => {
        domManipulation.declareVictory('tie');
    }, 1000);
}

function DomManipulation(){
}

DomManipulation.prototype.declareVictory = function (symbol) {
    document.getElementById(`${symbol}-wins`).style.display = 'block';
}

DomManipulation.prototype.addInput = function (symbol, position) {
    let symbolNode = document.createElement('div');
    symbolNode.className = 'gridSymbol';
    symbolNode.innerText = symbol;
    document.getElementById(position.join('')).replaceChildren(symbolNode);
    ticTacToe.checkVictory();
}

DomManipulation.prototype.renderGridValues = function() {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (!constants.grids[i][j]) {
                let emptyNode = document.createElement('div');
                emptyNode.className = 'gridSymbol';
                emptyNode.id = `grid-${i}-${j}`
                emptyNode.innerText = '';
                emptyNode.addEventListener('click', ticTacToe.inputEvent, false);
                let gridNode = document.getElementById(`${i}${j}`)
                gridNode.replaceChildren(emptyNode);
            } 
        }
    }
}

const constants = new Constants();
const ticTacToe = new TicTacToe();
const domManipulation = new DomManipulation();
domManipulation.renderGridValues();


