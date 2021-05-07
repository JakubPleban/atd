var mapFunction1 = function() {
	emit(this.sex, { count: 1, height: parseFloat(this.height), weight: parseFloat(this.weight) });
}

var reduceFunction1 = function(sex, values) {
	var count = 0;
	var totalHeight = 0;
	var totalWeight = 0;
	for (i = 0; i < values.length; i++){
		count += values[i].count;
		totalHeight += values[i].height;
		totalWeight += values[i].weight;
	}
	value = { averageHeight: 0, averageWeight: 0 };
	value.averageHeight = (totalHeight / count);
	value.averageWeight = (totalWeight / count);
	return value;
}

db.people.mapReduce(
	mapFunction1,
	reduceFunction1,
	{ 
		out: "map_1",
	}
)

printjson(db.map_1.find().toArray())