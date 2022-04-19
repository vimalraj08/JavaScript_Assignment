describe('Constants', ()=>{
    beforeEach(function(){
        const constants = new Constants();
        const ticTacToe = new TicTacToe();
        const domManipulation = new DomManipulation();
    });
    it('should be created', ()=>{
      expect(constants).toBeTruthy();
    });

    it('should set grid values', ()=>{
      expect(constants.grids.length).toBe(3);
    });

    it('should set input X and O values', ()=>{
      expect(constants.inputKeyO).toBe('O');
      expect(constants.inputKeyX).toBe('X');
    });
  });
  
  