TicTacToe.TicTacToeViewModel = (function(){



	function TicTacToeViewModel(boardSize){
		
		this.player1 = new TicTacToe.PlayerViewModel("X");
		this.player2 = new TicTacToe.PlayerViewModel("O");
		
		this.currentPlayer = this.player1;
		this.player1.isTurn(true);
		this.otherPlayer = this.player2;
		
		this.board = new TicTacToe.BoardViewModel(boardSize);
		
		this.outcome = ko.observable("Game in Progress");
		
	}

	return TicTacToeViewModel;
}());