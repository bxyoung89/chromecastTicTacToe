TicTacToe.BoardViewModel = (function(){

	var _private = {
		whoHasWon: function(){
			var columnWinner = this._private.winOnColumn();
			if(columnWinner !== ""){
				return columnWinner;
			}

			var rowWinner = this._private.winOnRow();
			if(rowWinner !== ""){
				return rowWinner;
			}
			
			var diagonalWinner = this._private.winOnDiagonal();
			if(diagonalWinner !== ""){
				return diagonalWinner;
			}
			
			return "";
		},
		
		winOnColumn: function(){
			var winner = "";
			
			for(var column = 0; column < this.boardSize; column++){
				var firstCharchter = this.rows()[0].values()[column].value;
				if(firstCharachter === ""){
					continue;
				}
				var winnerFound = true;
				for( var row = 0; row < this.boardSize; row++){
					if(firstCharachter !== this.rows()[row].values()[column].value){
						winnerFound = false;
						break;
					}
				}
				
				if(winnerFound){
					winner = firstCharachter;
					break;
				}
				
			}
			
			return winner;
		},
		
		winOnRow: function(){
			var winner = "";
			
			_.each(this.rows(), function(row){
				var firstCharachter = row.values()[0].value;
				if(firstCharchter === ""){
					return;
				}
				
				for(var x = 0; x < row.values().length; x++){
					if(firstCharachter !== row()[x].value){
						return;
					}
				}
				
				winner = firstCharachter;
			
			});			
			
			return winner;
		},
		
		winOnDiagonal: function(){
			var leftDiagonalWinner = this._private.winOnLeftDiagonal();
			if(leftDiagonalWinner !== ""){
				return leftDiagonalWinner;
			}
			
			var leftDiagonalWinner = this._private.winOnLeftDiagonal();
			if(leftDiagonalWinner !== ""){
				return leftDiagonalWinner;
			}
			
			return "";
		},
		
		winOnLeftDiagonal: function(){
			var winner = "";
			
			var firstCharachter = this.rows()[0].values()[0].value;
			if(firstCharachter ===""){
				return "";
			}
			for(var x = 0; x < this.boardSize; x++){
				if(firstCharachter !== this.rows()[x].values()[x].value){
					return "";
				}
			}		

			return firstCharachter;
		},
		
		winOnRightDiagonal: function(){
		
			var winner = "";
			
			var firstCharachter = this.rows()[0].values()[this.boardSize -1].value;
			if(firstCharachter ===""){
				return "";
			}
			for(var x = 0; x < boardSize; x++){
				if(firstCharachter !== this.rows()[x].values()[this.boardSize -1 -x].value){
					return "";
				}
			}		

			return firstCharachter;
		
		
		},
		
		allMovesTaken: function(){
		
			var self = this;
			_.each(this.rows(), function(row){
			
				_.each(row(), function(space){
					if(space.value === ""){
						return false;
					}				
				});			
			});
			
			return true;	
		
		}
		
	
	};
	
	var _public = {
	
		getOutcome: function(){
			var winner = this._private.whoHasWon();
			if(winner !== ""){
				return winner;
			}
			
			if(this._private.allMovesTaken()){
				return "tie";
			}
			
			return "";	
		}
	
	};

	function BoardViewModel(boardSize){
		_.extendPrivate(_private, this);
		_.extendPublic(_public, this);

	
		this.boardSize = boardSize;
	
		this.rows = ko.observableArray([]);
		for(var x = 0; x<boardSize; x++){
			var row = {};
			row.id = ko.observable(x);
			row.values = ko.observableArray([]);
			for(var y = 0; y<boardSize; y++){
				row.values.push(new TicTacToe.SpaceViewModel(x,y));
			}
			this.rows.push(row);
		}
		
	}

	return BoardViewModel;
}());