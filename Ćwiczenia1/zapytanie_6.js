db.people.insertOne({ 	
	"sex": "Male", 
	"first_name": "Jakub", 
	"last_name": "Pleban",
	"job": "Project Manager",
	"email": "s23308@pjwstk.edu.pl",
	"location": {
		"city": "Warsaw",
		"address": {
			"streetname": "XYZ",
			"streetnumber": "13"
		}
	},
	"description": "Lorem ipsum...",
	"height": "174",
	"weight": "85",
	"birth_date": "1996-01-12T17:00:00Z",
	"nationality": "Poland",
	"credit": [
		{
			"type": "mastercard",
			"number": "9999111100003333",
			"curreny": "PLN",
			"balance": "19292929591259125125125125"
		}
	]
})