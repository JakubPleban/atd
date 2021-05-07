db.people.aggregate([
	{ $group: {
		_id: null,
		uniqueJobs: { $addToSet: "$job" }
	}},
	{ $out: "agg3" }
])

printjson(db.agg3.find().toArray())