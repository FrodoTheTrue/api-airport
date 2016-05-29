# API Airport
Simple API for airport

With using:
  - node/express
  - react.js + redux
  - bootstrap
  - sqlite3

## API documentation
Model, using for flights:
```
model Flight {
  id, INTEGER PRIMARY KEY AUTOINCREMENT
  number, VARCHAR(255)
  city_up, VARCHAR(255)
  city_down, VARCHAR(255)
  plane_type, VARCHAR(255)
  time, DATE
  fact_time, DATE 
  status, VARCHAR(255)
}
```
    
### 1) Get flights
 - Method: GET
 - URL: https://api-aiport.herokuapp.com/api/flights
 
All fields in model Flight you can use for 'get flights' in get params!

Example request:

```
curl https://api-aiport.herokuapp.com/api/flights
```

Response:

```
{
  "error" : null,
  "flights":
    [
      {
        "id" : 1,
        "number" : "RX-0456",
        "city_up" : "Екатеринбург",
        "city_down" : "Москва",
        "plane_type" : "Аэробус",
        "time" : "2012-06-18 10:34:09",
        "fact_time" : "2012-06-18 15:34:09",
        "status" : "Идет посадка"
      },
      {
        ...
      },
      ...
    ]
}
```
Example request with fetch:
```

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch('https://api-aiport.herokuapp.com/api/flights', {method: 'GET', headers: myHeaders})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.flights.forEach(flight => {
            // do smth with flight object
        });
    });
```
Example request with get params:
```
curl https://api-aiport.herokuapp.com/api/flights?id=1
curl https://api-aiport.herokuapp.com/api/flights?number=RX-0456

```

### 2) Create new flight
 - Method: POST
 - URL: https://api-aiport.herokuapp.com/api/flights
 - Body (Content-type: application/json): JSON.stringify(flight_object)
 
 flight_object example: 
 ```
 {
    number: "1",
    city_up: "2",
    city_down: "3",
    plane_type: "4",
    time: "2012-06-18 15:34:09",
    fact_time: "2012-06-18 15:34:09",
    status: "5"
}
 ```

Example request with fetch:

```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var payload = {
    number: "1",
    city_up: "2",
    city_down: "3",
    plane_type: "4",
    time: "2012-06-18 15:34:09",
    fact_time: "2012-06-18 15:34:09",
    status: "5"
};

fetch('/api/flights', {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

```
Response:
```
{
  error: null
}
```
### 3) Update flight
 - Method: PUT
 - URL: https://api-aiport.herokuapp.com/api/flights/:flight_id
 - Body (Content-type: application/json): JSON.stringify(update_object)
 
 update_object example (fields, that you want to change): 
 ```
 {
    number: 1000,
    city_up: "Волгоград"
 }
 ```

Example request with fetch:

```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch('/api/flights/2', {
   headers: myHeaders,
   method: 'PUT',
   body: JSON.stringify({
       number: 1000,
       city_up: "Волгоград"
    })
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

```
Response:
```
{
  error: null
}
```
### 4) Delete flight
 - Method: DELETE
 - URL: https://api-aiport.herokuapp.com/api/flights/:flight_id
 - Body: empty

Example request with fetch:

```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

fetch('/api/flights/2', {
   headers: myHeaders,
   method: 'DELETE'
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


```
Response:
```
{
  error: null
}
```
