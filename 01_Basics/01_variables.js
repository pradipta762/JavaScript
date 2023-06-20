const accountId = 144553
let accountEmail = "pradipta@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2    //Not allowed

accountEmail = "pd@gmail.com"
accountPassword = "9878"
accountCity = "Bangaluru"

console.log(accountId); 


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])