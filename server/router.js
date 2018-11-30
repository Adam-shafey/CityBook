
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'test'));
const session = driver.session();

module.exports = function(app){
	app.post('/', function(req, res) {
//		res.send("hello");
		const age = req.body.age;
		const gender = req.body.gender;
		const max_monthly_budget = req.body.max_monthly_budget;
		const freedom_of_speech = req.body.freedom_of_speech;
		const racial_tolerance = req.body.racial_tolerance;
		const walkability = req.body.walkability;
		const safety = req.body.safety;
		const air_quality = req.body.air_quality;
		const trafic_safety = req.body.trafic_safety;
		const cities_liked = req.body.cities_liked;
		const cities_disliked = req.body.cities_disliked;
		const internet_speed = req.body.internet_speed;
		const nightlife = req.body.nightlife;
		const local_friendliness = req.body.local_friendliness;
		const lgbt_friendliness = req.body.lgbt_friendliness;
		console.log(req.body);
		const getCountries = session.run(
			`LOAD CSV WITH HEADERS FROM
			'file:///normalized_cities.csv'
			AS line
			return line
			`);
			//{age, gender, max_monthly_budget, freedom_of_speech, racial_tolerance, walkability, safety, air_quality, trafic_safety, cities_liked, cities_disliked, internet_speed, nightlife, local_friendliness, lgbt_friendliness });

		getCountries.then(result => {
			//result = JSON.parse(result);
			//res.send(result);
			//res.send(result.records.map(entry => {return entry["_fields"][0]["place_slug"]}));
			//res.setHeader('Content-Type', 'application/json');
			res.send(result.records.map(entry => {
				const score = freedom_of_speech * entry["_fields"][0]["freedom_of_speech"] + racial_tolerence * entry["_fields"][0]["racial_tolerence"] + walkability * entry["_fields"][0]["walkability"] + safety * entry["_fields"][0]["safety"] + air_quality * entry["_fields"][0]["air_quality_(year-round)"] + trafic_safety * entry["_fields"][0]["traffic_safety"] + internet_speed * entry["_fields"][0]["internet"] / 300 + nightlife * entry["_fields"][0]["nightlife"] + local_friendliness * entry["_fields"][0]["friendly_to_foreigners"] + lgbt_friendliness * entry["_fields"][0]["lgbt_friendliness"]; 
				return JSON.parse(JSON.stringify({city: entry["_fields"][0]["place_slug"], score}));
			}).sort((a,b) => (a.score < b.score ? -1 : (a.score > b.score ? 1 : 0))).slice(0,7));
		}, err => res.send(err));
	});
}

/*

sample code:

const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
const session = driver.session();

const personName = 'Alice';
const resultPromise = session.run(
  'CREATE (a:Person {name: $name}) RETURN a',
  {name: personName}
);

resultPromise.then(result => {
  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);

  console.log(node.properties.name);

  // on application exit:
  driver.close();
});

*/

/*
scaled formula = (x - xmin) / (xmax - xmin)

MAX VALUES:

1br_studio_rent_in_center                  2783
adult_nightlife                               4
air_quality_(year-round)                    368
airbnb_(monthly)                           7839
cashless_society                              3
coca-cola                                     5
coffee                                     8.61
cost_of_living                                4
cost_of_living_for_expat                   4147
cost_of_living_for_local                   2980
female_friendly                               4
freedom_of_speech                             4
friendly_to_foreigners                        4
fun                                           4
happiness                                     4
healthcare                                    4
internet                                    300
lgbt_friendly                                 4
nightlife                                     4
peace                                         4
quality_of_life                               4
racial_tolerance                              4
religious_government                          1
safe_tap_water                                1
safety                                        4
startup_score                                 4
traffic_safety                                4
walkability                                   4
nomad_score                                4.97
region                                  Oceania
country                                Zimbabwe
place_slug                   zwolle-netherlands
dtype: object

MIN VALUES:

1br_studio_rent_in_center           62.5109
adult_nightlife                           2
air_quality_(year-round)                  1
airbnb_(monthly)                        275
cashless_society                          1
coca-cola                                 0
coffee                                    0
cost_of_living                            1
cost_of_living_for_expat                374
cost_of_living_for_local                177
female_friendly                           1
freedom_of_speech                         1
friendly_to_foreigners                    1
fun                                       1
happiness                                 1
healthcare                         0.753495
internet                                  0
lgbt_friendly                             1
nightlife                          0.890461
peace                                     1
quality_of_life                           1
racial_tolerance                          1
religious_government                      0
safe_tap_water                            0
safety                                    1
startup_score                             1
traffic_safety                            1
walkability                               1
nomad_score                            2.26
region                               Africa
country                         Afghanistan
place_slug                   a-coruna-spain
dtype: object
*/

