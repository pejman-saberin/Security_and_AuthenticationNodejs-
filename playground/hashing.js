//this is called json web token
const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');  //jwt.io is the library for this npm i jsonwebtoken@7.1.9 --save
//jwt.sign  //takes the object (data with userid) and it signs it. Creates the hash and returns the token value
//jwt.verify  //does the oopsite. Takes the token and makes sure the data was not manipulated.
var data={
  id:10
};

var token=jwt.sign(data,'123abc');
console.log(token);

var decoded=jwt.verify(token,'123abc');  //secret is '123abc' . We have to use the exact same secret otherwise it won't be validated.
console.log(`decoded: ${decoded.id}` );
console.log(decoded);

//the shows below to see what json web token does... there is no need for below since the json web token library will take care of this

// var message='I am user number 3';
// var hash=SHA256 (message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// /
// // var data={
// //   id:4
// // };
// //
// // var token={
// //   data, //defined above
// //   hash: SHA256(JSON.stringify(data)+'somesecret').toString()  //hash value of the data . O  //somesecret is called salt and it only lives on the server so people on the client side doesn't have access to this
// // }
// //
// // token.data.id=5;
// // token.hash= SHA256(JSON.stringify(token.data.id)).toString();
// //
// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
//
// if (resultHash==token.hash){
//   console.log('Data was not changed');
// }else {
//   console.log('Datawas changed. Do not trust!');
// }
