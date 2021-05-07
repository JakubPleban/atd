var mapFunction5 = function() {
	for (i = 0; i < this.credit.length; i++){
		emit({ currency: this.credit[i].currency, nationality: this.nationality, sex: this.sex }, parseFloat(this.credit[i].balance) );
	}
};

var reduceFunction5 = function(currency, values){
	value = { totalBalanceLeft: 0, avgBalanceLeft: 0 };
	for (i = 0; i < values.length; i++){
		value.totalBalanceLeft += values[i];
	}
	value.avgBalanceLeft = (value.totalBalanceLeft / values.length);
	return value;
}

db.people.mapReduce(
	mapFunction5,
	reduceFunction5,
	{
		query: { nationality: "Poland", sex: "Female" },
		out: "map_5"
	}
)

printjson(db.map_5.find().toArray())