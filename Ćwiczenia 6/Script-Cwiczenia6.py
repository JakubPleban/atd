import requests

headers = 'Content-Type: application/json'
url = 'http://localhost:8098/buckets/s23308'
key = '/keys/Themenos'
data1 = { 
	'characterName': 'Themenos', 
	'characterLevel': '3',
	'characterClass': 'Paladin', 
	'characterStats': { 
		'Strength': '16', 
		'Dexterity': '10', 
		'Constitution': '16', 
		'Intelligence': '10', 
		'Wisdom': '12', 
		'Charisma': '16' 
		}
}
data2 = { 
	'characterName': 'Themenos', 
	'characterLevel': '4',
	'characterClass': 'Paladin', 
	'characterStats': { 
		'Strength': '16', 
		'Dexterity': '10', 
		'Constitution': '16', 
		'Intelligence': '10', 
		'Wisdom': '12', 
		'Charisma': '18' 
		}
}


r1 = requests.put(url + key, json=data1)
print("Put document. Response code: ", r1.status_code)

r2 = requests.get(url + key, headers)
print("Get document. Response code: ", r2.status_code, '\n')
print(r2.json())

r3 = requests.put(url + key, json=data2)
print("Modifiy document. Response code: ", r3.status_code)

r4 = requests.get(url + key, headers)
print("Get modified document. Response code: ", r4.status_code, '\n')
print(r4.json())

r5 = requests.delete(url + key)
print("Delete document. Response code: ", r5.status_code)

r6 = requests.get(url + key, headers)
print("Get removed document. Response code: ", r6.status_code)
if r6.status_code == 404:
	print ("Can't get specified document")
else:
	print(r6.json())

