_.mixin({

	extendPrivate: function(destination, source){
		if(_.isUndefined(destination._private)) destination.private = {};
		var pairs = _.each(_.pairs(source), function(e, i, l){
			if(_.isFunction(e[1])){
				destination._private[e[0]] = _.bind(e[1], destination);
				return;
			}
			destination._private[e[0]] =e[1];
		});
	},
	
	extendPublic: function(destination, source){
		var pairs = _.each(_.pairs(source), function(e, i, l){
			if(_.isFunction(e[1])){
				destination[e[0]] = _.bind(e[1], destination);
				return;
			}
			destination[e[0]] =e[1];
		});
	},
	


});