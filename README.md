# Restaurant Reservation System

If ypu want use it, click here. [API](https://cryptic-tor-80920.herokuapp.com/api/v1/restaurants)

## How does it work

1. Any time you call the API, it generates a list with 5 restaurants.

2. If you want to get, update or delete a specific restaurant, add its ID int he url.

*Example:*

<https://cryptic-tor-80920.herokuapp.com/api/v1/restaurants/76dadacbbabf966e1bc73e1a>

```json
{
    "id": "76dadacbbabf966e1bc73e1a",
    "name": "Haley - Maggio",
    "description": "Intuitive zero administration toolset",
    "city": "Erinshire",
    "image": "https://loremflickr.com/640/480/food",
    "tables": {
      "available": 15,
      "reserved": 0
    }
  }
```

3. If you want to filter restaurant by city, only add the name's city in the URL.

*Example:*

<https://cryptic-tor-80920.herokuapp.com/api/v1/restaurants?city=Erinshire>

```json
[
  {
    "id": "76dadacbbabf966e1bc73e1a",
    "name": "Haley - Maggio",
    "description": "Intuitive zero administration toolset",
    "city": "Erinshire",
    "image": "https://loremflickr.com/640/480/food",
    "tables": {
      "available": 15,
      "reserved": 0
    }
  }
]
```

4. To make a reservation you only need add the ID of the restaurant like this link

<http://localhost:3000/api/v1/restaurants/76dadacbbabf966e1bc73e1a?reservation=true>

```json
[
  {
    "id": "76dadacbbabf966e1bc73e1a",
    "name": "Haley - Maggio",
    "description": "Intuitive zero administration toolset",
    "city": "Erinshire",
    "image": "https://loremflickr.com/640/480/food",
    "tables": {
      "available": 14,
      "reserved": 1
    }
  }
]
```

5. To get all reservations use <https://cryptic-tor-80920.herokuapp.com/api/v1/reservations>
```json

[
  {
    "id": "e48edbb2ead7c92c1a1efd7a",
    "name": "Haley - Maggio",
    "city": "Erinshire",
    "date": "2022-08-26T18:57:16.894Z"
  }
]
```
