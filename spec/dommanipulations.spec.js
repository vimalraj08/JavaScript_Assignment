
describe('DomManipulation', ()=>{
    beforeEach(function(){
      const constants = new Constants();
      const ticTacToe = new TicTacToe();
      const domManipulation = new DomManipulation();
    });

    it('should be created', ()=>{
        expect(domManipulation).toBeTruthy();
    });
    
    describe('addInput',()=>{

      it('should call checkVictory() if symbol and position is passed',()=>{
        spyOn(ticTacToe,'checkVictory').and.callFake;
        DomManipulation.addInput("X",[0,0]);
        expect(ticTacToe.checkVictory()).toHaveBeenCalledTimes(1);
      })

      //This condition is not handled in the application
      it('should fail if null symbol is passed as a parameter',()=>{
        spyOn(ticTacToe,'checkVictory').and.callFake;
        DomManipulation.addInput(null,[0,0]);
        expect(ticTacToe.checkVictory()).toHaveBeenCalledTimes(0); 
        //output would be false as the function would be called once hence there is no check for invalid parameters
      })
   

    it('should fail if null position is passed as a parameter',()=>{
      spyOn(ticTacToe,'checkVictory').and.callFake;
      DomManipulation.addInput("X",null);
      expect(ticTacToe.checkVictory()).toHaveBeenCalledTimes(0); 
      //output would be false as the function would be called once hence there is no check for invalid parameters
    })

    it('should fail if no parameter is passed to the function',()=>{
      spyOn(ticTacToe,'checkVictory').and.callFake;
      DomManipulation.addInput();
      expect(ticTacToe.checkVictory()).toHaveBeenCalledTimes(0); 
      //output would be false as the function would be called once hence there is no check for invalid parameters
    })
  })

});
  
  