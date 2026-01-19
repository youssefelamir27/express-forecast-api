const x = fetch("https://api.weatherapi.com/v1/current.json?key=da0561271c924da3a80130040252811&q=germany")
  .then((res) => res.json())
  .then((data) => console.log(data.location.name))
  .catch((e) => console.log(e))