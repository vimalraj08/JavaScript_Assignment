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
});
  
  