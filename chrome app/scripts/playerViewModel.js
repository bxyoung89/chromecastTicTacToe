TicTacToe.PlayerViewModel = (function(){



	function PlayerViewModel(charachter){
		this.character = ko.observable(charachter);
		this.isTurn = ko.observable(false);

	
	}

	return PlayerViewModel;
}());