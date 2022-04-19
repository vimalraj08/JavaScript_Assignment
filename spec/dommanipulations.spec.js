describe('DomManipulation', ()=>{
    beforeEach(function(){
      const constants = new Constants();
      const ticTacToe = new TicTacToe();
      const domManipulation = new DomManipulation();
    });

    it('should be created', ()=>{
        expect(domManipulation).toBeTruthy();
    });  
});
  
  