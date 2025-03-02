async function fetchUserCities (){
    try{
           const response = await
     fetch("https://jsonplaceholder.typicode.com/users")
         const user = await 
    response.json()
          const cities = user.map(user => user.address.city)
                return cities
  }
  catch(error){
  console.log("getting errors", error)
    return []
  }
  }
  fetchUserCities().then(cities => console.log(cities))
  