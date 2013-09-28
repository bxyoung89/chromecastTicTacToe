TicTacToe.SpaceViewModel = (function(){



	function SpaceViewModel(x, y){
		this.value = ko.observable("");
		this.x = ko.observable(x);
		this.y = ko.observable(y);
		
	}

	return SpaceViewModel;
}());