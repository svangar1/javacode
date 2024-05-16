
// const user = {
//     userName : "Sai",
//     userEmailId: "test@google.com",
//     userMobileNo: "12345",
//     getUserDeatils : () => {
//         console.log('fn',this.userName, this.userEmailId, this.userMobileNo);
//     }
// }

// const fn = user.getUserDeatils

// fn();

// console.log('fn call', user.getUserDeatils());

// console.log(user.userName, user['userName']);

// console.log('userMobileNo',user['userMobileNo'])



// // // -------------this and normal getUserDetails()-------

// // user - name, email id, mobile no
// const userName = "Sai";
// const userEmailId = "test@google.com"
// const userMobileNo = "12345";


// console.log(userName, userEmailId, userMobileNo);

const user1 = {
    userName : "Sai",
    userEmailId: "test@google.com",
    userMobileNo: "12345",
    getUserDeatils : () => {
        console.log('fn',this.userName, this.userEmailId, this.userMobileNo);
    }
}

console.log('fn call', user1.getUserDeatils()); //fn call undefined

console.log(user1.userName, user1['userName']); // Sai Sai

console.log('userMobileNo',user1['userMobileNo']) // userMobileNo 12345


// // //------------- FREZZE

// Object.freeze(user1);

// user1.getUserDeatils(); // fn Sai test@ 12345 ->line 34 

// console.log('[]',user1['user MobileNo']); // [] undefined

// const key = "userEmailId";

// console.log('[]',user1[key]); // [] test@google.com


// //---------------------

// function getValues(userObj, key) {
//     const value = userObj[key]

//     return value;

// }

// console.log(getValues(user, 'getUserDeatils'))


//---------------------

// const countries = {  // key : values --->> IN : Delhi
//     'IN' : "Delhi",
//     'USA': "New york",
//     'UK' : "London"
// }
// console.log("before freeze", countries); // {IN: 'Delhi', USA: 'New york', UK: 'London'}
// // Object.freeze(countries);
// countries.UK = "London";

// console.log("after freeze", countries); //{IN: 'Delhi', USA: 'New york', UK: 'London'}

// const famousAreas = {
//     "Delhi" : 'Red Fort',
//     "New York" : "Times Square"
// }
// console.log("famousAreas:", famousAreas); // famousAreas: {Delhi: 'Red Fort', New York: 'Times Square'}

// // ----- Capital : Famous Area ------

// console.log('keys', Object.keys(countries)); // (3) ['IN', 'USA', 'UK']

// var countryArray = Object.keys(countries);
// console.log(countryArray); // (3) ['IN', 'USA', 'UK'] 

// console.log('values', Object.values(countries)); // (3) ['Delhi', 'New york', 'London']


// for (let i=0; i<countryArray.length; i++){
//     console.log(countries[countryArray[i]]); // Delhi, New York, London
// }
// console.log(countries[countryArray[0]])
// (India:Delhi [IN [i] ] )
// (Usa:York [Usa [i] ] )

// countries.update({
//     'Brazil' : "ABC",
//     'Pakistan': "DEF"
// })

// console.log(countries);

// countries['FR'] = "Paris";
// countries.AUS = "Sydney";
// countries.Mexico = "XYZ";


// console.log(countries); // After commenting Freeze --> {IN: 'Delhi', USA: 'New york', UK: 'London', FR: 'Paris', AUS: 'Sydney'}

// console.log(countryArray);

// // countryArray.push("Mexico");
// countryArray = Object.keys(countries);


// console.log(countryArray); 

// console.log(countries["Mexico"]);

// for (let i=0; i<countryArray.length; i++){
//     console.log(countries[countryArray[i]]); // Delhi, New York, London
// }


//--------------Spread operator or Rest Operator-------



