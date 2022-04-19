import assert from 'assert';

describe('TicTacToe', ()=>{
    beforeEach(function(){
      const constants = new Constants();
      const ticTacToe = new TicTacToe();
      const domManipulation = new DomManipulation();
    });

    it('should be created', ()=>{
        expect(ticTacToe).toBeTruthy();
    });

    it('should add X symbol by calling domManipulation', ()=>{
        spyOn(domManipulation, 'addInput').and.callFake;
        ticTacToe.addX([0,0]);
        expect(domManipulation.addInput).toHaveBeenCalledWith('X', [0,0]);
    });

    it('should add O symbol by calling domManipulation', ()=>{
        spyOn(domManipulation, 'addInput').and.callFake;
        ticTacToe.addO([0,0]);
        expect(domManipulation.addInput).toHaveBeenCalledWith('O', [0,0]);
    });

    describe('isClickInGrid',()=>{

        //If Grid values is entered correctlt it shall return true
        //Assertion statement is used to check the pass creteria
        it('should return true is a valid position is passed', ()=>{
            assert.equall(TicTacToe.prototype.isClickInGrid(["grid",2,2]),true);
        })

        //Assertion to check if it fails when called without a parameter
        it('should return false if called without a position parameter', ()=>{
            assert.equall(TicTacToe.prototype.isClickInGrid(),false);
        })

        //The 2nd condition in the IF loop satisfys and retuns false
        it('should return false if length of the position is more than 3', ()=>{
            //assert.equall(TicTacToe.prototype.isClickInGrid(["grid",2,2,2]),false);
            expect(TicTacToe.prototype.isClickInGrid(["grid",2,2,2])).toBe(false);
        })

        //The 3rd condition in the IF loop satisfys and retuns false
        it('should return false is a void position ousite the grid is passed', ()=>{
            assert.equall(TicTacToe.prototype.isClickInGrid(["form",2,2]),false);
        })

        //The 4th condition in the IF loop satisfys and retuns false
        it('should return false is a null value passed in the position index', ()=>{
            assert.equall(TicTacToe.prototype.isClickInGrid(["grid",null,2]),false);
        })
    })

    describe('inputEvent',()=>{

        // calling input function with a null input and validating if the setKeyDone() called or not
        it('should not call if the parameter passed is null',()=>{
            spyOn('ticTacToe',setKeyDone()).and.callFake;
            ticTacToe.setKeyDone(null);
            expect(ticTacToe.setKeyDone()).toHaveBeenCalledTimes(0);
        })
    })

    describe('Xwins',()=>{

        it('should call declaration function in dommanipulation',()=>{
            spyOn(domManipulation, 'declareVictory').and.callFake;
            TicTacToe.Xwins();
            expect(domManipulation.declareVictory).toHaveBeenCalledWith('x');
        })

    })

    describe('Owins',()=>{

        it('should call declaration function in dommanipulation',()=>{
            spyOn(domManipulation, 'declareVictory').and.callFake;
            TicTacToe.Owins();
            expect(domManipulation.declareVictory).toHaveBeenCalledWith('o');
        })

    })

    describe('tieWins',()=>{

        it('should call declaration function in dommanipulation',()=>{
            spyOn(domManipulation, 'declareVictory').and.callFake;
            TicTacToe.Owins();
            expect(domManipulation.declareVictory).toHaveBeenCalledWith('tie');
        })

    })
});
  
  