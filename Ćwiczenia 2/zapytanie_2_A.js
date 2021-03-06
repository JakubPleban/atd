db.people.aggregate([
	{ $unwind: "$credit" },
	{ $group: {
		_id: "$credit.currency",
		leftCredits: { $sum: { $convert: { input: "$credit.balance", to: "double"} } }
	}},
	{ $out: "agg2" }
])

printjson(db.agg2.find().toArray())