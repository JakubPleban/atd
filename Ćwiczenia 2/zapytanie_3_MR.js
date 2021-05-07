var mapFunction3 = function() {
	emit('job', this.job);
}

var reduceFunction3 = function(job, values){
	var jobsSet = new Set();
	for( i = 0; i < values.length; i++){
		jobsSet.add(values[i]);
	}
	var jobs = [];
	jobsSet.forEach(job => { jobs.push(job)});
	return jobs;
}

db.people.mapReduce(
	mapFunction3,
	reduceFunction3,
	{
		out: "map_3"
	}
)

printjson(db.map_3.find().toArray())