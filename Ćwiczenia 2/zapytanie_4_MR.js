var mapFunction4 = function() {
	emit(this.nationality, { height: parseFloat(this.height), weight: parseFloat(this.weight) });
}

var reduceFunction4 = function(nationality, values) {
	value4 = { minBmi: 0, avgBmi: 0, maxBmi: 0 };
	var min = (values[0].weight / Math.pow(values[0].height / 100, 2));
	var max = min;
	var sumBmi = min;
	var tempBmi = 0;
	for (i = 1; i < values.length; i++){
		tempBmi = (values[i].weight / Math.pow(values[i].height / 100, 2));
		sumBmi += tempBmi;
		if (tempBmi < min) min = tempBmi;
		if (tempBmi > max) max = tempBmi;
	}
	value4.minBmi = min;
	value4.maxBmi = max;
	value4.avgBmi = (sumBmi / values.length);
	return value4;
}

db.people.mapReduce(
	mapFunction4,
	reduceFunction4,
	{ 
		out: "map_4",
	}
)

printjson(db.map_4.find().toArray())