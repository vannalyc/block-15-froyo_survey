//defining a customer 
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com", 
    phone: undefined, 
    zipCode: 631, 
    favoriteFlavors: 32, 
    cupSize: "medium", 
    favoriteStore: "Target", 
    firstVisit: false, 
};
//modifying customer information 
customer["email"] = "Jak3Smith1992@email.com",
customer["phone"] = 3195551234,
customer["zipCode"] = 63132,
customer["favoriteFlavors"] = "coffee", "strawberry", "matcha",
//Delete properties in CUSTOMER object (zipCode, favoriteStore)
delete customer["zipCode"];
delete customer["favoriteStore"];
//ADD new items into survey, 
//topping: chocolate sprinkles, wafer straws,gummy bear
//futureFlavors: mango
//todaysPurchaseCost: 5.32
customer.toppings = "chocolate sprinkles", "wafer straws", "gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchseCost = "$5.32"; 
 //   console.log(customer[key])
console.log(Object.keys(customer));


