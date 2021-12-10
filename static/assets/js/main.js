const meals = [
	{
		"model": "mealRatings.Meal",
		"pk":1,
		"fields" :
			{
				"name": "Toast with Egg",
				"description": "Toast with sunnyside up egg",
				"imageUrl": "1.jpeg",
				"countryOfOrigin": "England",
				"typicalMealTime":1,
				"dateAdded": "2011-05-05T02:12:01+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":2,
		"fields" :
			{
				"name": "Belgian Waffle",
				"description": "Belgian waffle with blueberries and strawberries",
				"imageUrl": "2.jpeg",
				"countryOfOrigin": "Belgium",
				"typicalMealTime":1,
				"dateAdded": "2013-11-22T20:27:23+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":3,
		"fields" :
			{
				"name": "Pancakes",
				"description": "Pancakes with blueberries and tangerines",
				"imageUrl": "3.jpeg",
				"countryOfOrigin": "Greece",
				"typicalMealTime": 1,
				"dateAdded": "2011-09-10T19:00:48+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":4,
		"fields" :
			{
				"name": "Minimal Toast",
				"description": "Toast and Coffee",
				"imageUrl": "4.jpeg",
				"countryOfOrigin": "USA",
				"typicalMealTime": 1,
				"dateAdded": "2017-01-06T00:30:18+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":5,
		"fields" :
			{
				"name": "Cereal",
				"description": "Cereal with Milk",
				"imageUrl": "5.jpeg",
				"countryOfOrigin": "USA",
				"typicalMealTime": 1,
				"dateAdded": "2016-05-04T10:16:02+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":6,
		"fields" :
			{
				"name": "Croissant",
				"description": "Croissant with orange juice and coffee",
				"imageUrl": "6.jpeg",
				"countryOfOrigin": "France",
				"typicalMealTime": 1,
				"dateAdded": "2011-02-24T12:54:39+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":7,
		"fields" :
			{
				"name": "Chicken Vegetable Bowl",
				"description": "Roasted chicken, beans, eggs, corn, tomatoes",
				"imageUrl": "7.jpeg",
				"countryOfOrigin": "Morocco",
				"typicalMealTime": 2,
				"dateAdded": "2011-10-11T15:13:25+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":8,
		"fields" :
			{
				"name": "Qutab",
				"description": "thinly rolled dough that is cooked briefly on a saj",
				"imageUrl": "8.jpeg",
				"countryOfOrigin": "Azerbaijan",
				"typicalMealTime": 2,
				"dateAdded": "2010-03-10T12:28:09+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":9,
		"fields" :
			{
				"name": "Tuna Burger",
				"description": "Burger with bread and patties made from tuna",
				"imageUrl": "9.jpeg",
				"countryOfOrigin": "USA",
				"typicalMealTime": 2,
				"dateAdded": "2015-07-13T07:12:58+00:00"

			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":10,
		"fields" :
			{
				"name": "Baguette Sandwich",
				"description": "Baguette with turkey, tomato, swiss cheese",
				"imageUrl": "10.jpeg",
				"countryOfOrigin": "France",
				"typicalMealTime": 2,
				"dateAdded": "2011-09-10T19:00:48+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":11,
		"fields" :
			{
				"name": "Roasted Fish and Couscous",
				"description": "Roasted fish and couscous with broccoli and lemon",
				"imageUrl": "11.jpeg",
				"countryOfOrigin": "Algeria",
				"typicalMealTime": 2,
				"dateAdded": "2014-07-25T13:36:42+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":12,
		"fields" :
			{
				"name": "Quinoa vegetarian bowl",
				"description": "Qunoia, carrots, corn, radish, and kale",
				"imageUrl": "12.jpeg",
				"countryOfOrigin": "Chile",
				"typicalMealTime": 2,
				"dateAdded": "2010-03-10T12:28:09+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":13,
		"fields" :
			{
				"name": "Tacos",
				"description": "Ground beef and avocado tacos",
				"imageUrl": "13.jpeg",
				"countryOfOrigin": "Mexico",
				"typicalMealTime": 3,
				"dateAdded": "2018-09-08T15:02:53+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":14,
		"fields" :
			{
				"name": "Bun Rieu",
				"description": "Traditional Crab Pork tomato soup",
				"imageUrl": "14.jpeg",
				"countryOfOrigin": "Vietnam",
				"typicalMealTime": 3,
				"dateAdded": "2017-03-10T22:02:32+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":15,
		"fields" :
			{
				"name": "Hamburger",
				"description": "Sandwich made with ground beef patty",
				"imageUrl": "15.jpeg",
				"countryOfOrigin": "Germany",
				"typicalMealTime": 3,
				"dateAdded": "2014-07-25T13:36:42+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":16,
		"fields" :
			{
				"name": "Chamorro",
				"description": "Beef Hind Shanks",
				"imageUrl": "16.jpeg",
				"countryOfOrigin": "Mexico",
				"typicalMealTime": 3,
				"dateAdded": "2011-10-11T15:13:25+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":17,
		"fields" :
			{
				"name": "Shrimp Scampi",
				"description": "Shrimp roasted in butter lemon sauce",
				"imageUrl": "17.jpeg",
				"countryOfOrigin": "Italy",
				"typicalMealTime": 3,
				"dateAdded": "2016-11-08T12:22:45+00:00"
			}
	},
	{
		"model": "mealRatings.Meal",
		"pk":18,
		"fields" :
			{
				"name": "Sashimi",
				"description": "thin slices of high quality fish or other meats often served with soy sauce",
				"imageUrl": "18.jpeg",
				"countryOfOrigin": "Japan",
				"typicalMealTime": 3,
				"dateAdded": "2020-04-23T00:00:19+00:00"
			}
	},
	{
        "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 1,
                    "rating": 4.99,
                    "dateOfRating": "2017-11-23T16:51:41+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 1,
                    "rating": 1.02,
                    "dateOfRating": "2010-09-22T03:06:16+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 1,
                    "rating": 1.86,
                    "dateOfRating": "2015-11-02T18:10:22+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 1,
                    "rating": 4.42,
                    "dateOfRating": "2018-04-09T21:07:22+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 2,
                    "rating": 2.88,
                    "dateOfRating": "2018-09-08T15:02:53+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 2,
                    "rating": 3.95,
                    "dateOfRating": "2016-11-14T11:35:54+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 2,
                    "rating": 4.51,
                    "dateOfRating": "2015-07-13T07:12:58+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 2,
                    "rating": 1.6,
                    "dateOfRating": "2010-01-25T20:31:17+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 3,
                    "rating": 2.05,
                    "dateOfRating": "2010-04-24T17:18:15+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 3,
                    "rating": 0.26,
                    "dateOfRating": "2015-09-03T03:08:53+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 3,
                    "rating": 2.09,
                    "dateOfRating": "2018-10-07T18:43:39+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 3,
                    "rating": 3.88,
                    "dateOfRating": "2019-03-19T06:25:09+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 4,
                    "rating": 4.32,
                    "dateOfRating": "2018-11-16T12:03:39+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 4,
                    "rating": 1.31,
                    "dateOfRating": "2019-11-20T20:46:25+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 4,
                    "rating": 4.59,
                    "dateOfRating": "2020-12-28T04:40:25+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 4,
                    "rating": 4.01,
                    "dateOfRating": "2011-05-05T02:12:01+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 5,
                    "rating": 0.71,
                    "dateOfRating": "2014-08-22T15:30:01+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 5,
                    "rating": 1.0,
                    "dateOfRating": "2011-05-03T03:45:23+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 5,
                    "rating": 0.66,
                    "dateOfRating": "2016-10-13T18:54:48+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 5,
                    "rating": 1.34,
                    "dateOfRating": "2016-04-04T01:08:42+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 6,
                    "rating": 4.63,
                    "dateOfRating": "2013-11-22T20:27:23+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 6,
                    "rating": 0.63,
                    "dateOfRating": "2012-05-18T02:47:29+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 6,
                    "rating": 4.06,
                    "dateOfRating": "2021-04-03T22:10:48+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 6,
                    "rating": 0.59,
                    "dateOfRating": "2016-12-14T15:30:41+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 7,
                    "rating": 3.23,
                    "dateOfRating": "2013-02-15T15:29:16+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 7,
                    "rating": 1.75,
                    "dateOfRating": "2016-01-14T05:29:28+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 7,
                    "rating": 2.88,
                    "dateOfRating": "2013-12-26T07:48:08+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 7,
                    "rating": 0.37,
                    "dateOfRating": "2018-04-21T07:04:18+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 8,
                    "rating": 4.04,
                    "dateOfRating": "2010-08-16T22:16:55+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 8,
                    "rating": 4.44,
                    "dateOfRating": "2021-12-13T03:35:43+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 8,
                    "rating": 0.75,
                    "dateOfRating": "2011-03-03T04:56:14+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 8,
                    "rating": 0.78,
                    "dateOfRating": "2014-07-11T00:27:26+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 9,
                    "rating": 1.03,
                    "dateOfRating": "2011-09-10T19:00:48+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 9,
                    "rating": 1.81,
                    "dateOfRating": "2021-08-16T21:29:06+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 9,
                    "rating": 3.43,
                    "dateOfRating": "2016-09-05T10:57:29+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 9,
                    "rating": 4.37,
                    "dateOfRating": "2021-12-13T15:33:35+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 10,
                    "rating": 3.94,
                    "dateOfRating": "2011-01-09T17:54:15+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 10,
                    "rating": 4.52,
                    "dateOfRating": "2018-12-02T19:42:08+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 10,
                    "rating": 4.12,
                    "dateOfRating": "2018-09-18T12:21:15+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 10,
                    "rating": 2.1,
                    "dateOfRating": "2017-08-20T23:30:41+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 11,
                    "rating": 1.46,
                    "dateOfRating": "2018-11-05T18:13:35+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 11,
                    "rating": 3.6,
                    "dateOfRating": "2011-08-15T06:51:53+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 11,
                    "rating": 1.83,
                    "dateOfRating": "2017-01-06T00:30:18+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 11,
                    "rating": 1.62,
                    "dateOfRating": "2010-07-26T02:03:11+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 12,
                    "rating": 3.99,
                    "dateOfRating": "2018-08-01T11:32:28+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 12,
                    "rating": 0.92,
                    "dateOfRating": "2017-06-23T06:37:26+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 12,
                    "rating": 3.29,
                    "dateOfRating": "2017-01-06T11:34:23+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 12,
                    "rating": 0.43,
                    "dateOfRating": "2013-01-25T02:58:19+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 13,
                    "rating": 4.9,
                    "dateOfRating": "2013-10-01T16:48:11+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 13,
                    "rating": 2.1,
                    "dateOfRating": "2013-05-04T18:43:36+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 13,
                    "rating": 2.75,
                    "dateOfRating": "2019-04-10T09:16:28+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 13,
                    "rating": 4.18,
                    "dateOfRating": "2016-02-19T22:50:04+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 14,
                    "rating": 4.88,
                    "dateOfRating": "2016-05-04T10:16:02+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 14,
                    "rating": 1.29,
                    "dateOfRating": "2012-05-17T02:37:12+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 14,
                    "rating": 4.1,
                    "dateOfRating": "2020-01-01T05:53:45+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 14,
                    "rating": 2.72,
                    "dateOfRating": "2021-06-14T16:38:56+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 15,
                    "rating": 0.42,
                    "dateOfRating": "2016-10-04T05:02:41+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 15,
                    "rating": 4.59,
                    "dateOfRating": "2019-05-17T13:15:09+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 15,
                    "rating": 0.19,
                    "dateOfRating": "2019-09-10T14:55:31+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 15,
                    "rating": 1.15,
                    "dateOfRating": "2020-06-07T04:29:21+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 16,
                    "rating": 3.44,
                    "dateOfRating": "2021-01-18T11:37:01+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 16,
                    "rating": 3.43,
                    "dateOfRating": "2013-07-11T14:23:21+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 16,
                    "rating": 0.15,
                    "dateOfRating": "2011-02-24T12:54:39+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 16,
                    "rating": 4.41,
                    "dateOfRating": "2017-03-10T22:02:32+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 17,
                    "rating": 3.13,
                    "dateOfRating": "2021-01-22T22:41:42+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 17,
                    "rating": 4.61,
                    "dateOfRating": "2020-04-23T00:00:19+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 17,
                    "rating": 3.14,
                    "dateOfRating": "2016-11-08T12:22:45+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 17,
                    "rating": 2.88,
                    "dateOfRating": "2011-10-11T15:13:25+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 18,
                    "rating": 0.55,
                    "dateOfRating": "2014-07-25T13:36:42+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 18,
                    "rating": 2.37,
                    "dateOfRating": "2016-10-23T11:59:36+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 18,
                    "rating": 1.54,
                    "dateOfRating": "2019-04-18T22:14:20+00:00"
            }
    },
    {
            "model": "mealRatings.MealRating",
            "fields": {
                    "meal": 18,
                    "rating": 0.67,
                    "dateOfRating": "2010-03-10T12:28:09+00:00"
            }
    }
]